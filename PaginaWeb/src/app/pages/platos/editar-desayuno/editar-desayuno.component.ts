import { PlatoDesayuno } from './../../../_model/platoDesayuno';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatoDesayunoService } from '../../../_service/plato-desayuno.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalEditarDesayunoComponent } from '../../../modal/modal-editar-desayuno/modal-editar-desayuno.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-desayuno',
  templateUrl: './editar-desayuno.component.html',
  styleUrls: ['./editar-desayuno.component.css']
})
export class EditarDesayunoComponent implements OnInit, OnDestroy {

  //VARIABLES
  // dataSource: MatTableDataSource<PlatoDesayuno>;
  dataSource = new MatTableDataSource();
  displayedColumns = ['estado', 'platoDes','precio', 'acciones']; // Datos que se va amostrar en la tabla

  desayunoTable :PlatoDesayuno[] =[];

  usuarioLog: string;// Validar usuario logueado
  usuarioLogeado: PlatoDesayuno[]; // usario logueado dueño del plato
  menuDesayuno : PlatoDesayuno[];
  platoDes$: Observable<PlatoDesayuno[]>;
  private ngUnsubscribe: Subject<void> = new Subject();// Se crear la variable para liberar recursos

  

  constructor(private desayunoService: PlatoDesayunoService,
              private router: Router,
              public dialog: MatDialog,
              private afa: AngularFireAuth) { }


  

  ngOnInit() {

    let currenUser = this.afa.auth.currentUser;
    this.usuarioLog = currenUser.uid;

       // Programacion reactiva:s
      //  this.desayunoService.listar().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      //   data.forEach((menus: PlatoDesayuno) =>{
      //     if(this.usuarioLog == menus.userUID){
      //       // console.log("usuario logado", this.usuarioLog);
      //       // console.log("menu logado", menus.userUID);
            
      //       // console.log("Si");
      //       this.usuarioLogeado = [menus];
      //       this.dataSource = new MatTableDataSource(this.usuarioLogeado);            
      //     }else{
      //       console.log("No");            
      //     } 
      //   });
      //   //this.dataSource = new MatTableDataSource(data);
      //   //this.dataSource2 = new MatTableDataSource(data);
      //   //this.dataSource3 = new MatTableDataSource(data);
      // });
    this.tabla();

    this.platoDes$ = this.desayunoService.recuperarMenus(); // recuperamos esta data con ASYNC
  }

  eliminar(platoDes: PlatoDesayuno){
    Swal.fire({
      title: '¿Deseas eliminar tu menú?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "No",
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        this.desayunoService.eliminar(platoDes).then(() =>{
          Swal.fire('Eliminado!','Tu menú ha sido eliminado','success')
            .then(() =>{
              this.router.navigate(['dueño/miMenu']);
            });
          }).catch((error =>{
            Swal.fire('Error!', error ,'error');
          }));
      }else {
        Swal.fire("Cancelado", "", "error");
    }
    })
  }

  tabla(){
    this.desayunoTable=[];
    this.desayunoService.recuperarMenus()
      .subscribe(
        // afil['estado'] == 'falso'
        data=>{
          console.log("sss", data);
          
          for(let key$ in data){
            let des = data[key$];
            // console.log("p", afil['uidResta']);
            if(this.usuarioLog == des['userUID']){
              // console.log("aaaaa", afil['_id']);
              // afil['_id']=key$;
              this.desayunoTable.push(des);
              // console.log("vvvv", this.afi);
              // console.log("xxx", this.afi[2]);
              // console.log("si");
            }else{
              console.log("no");
            }

          }
          this.dataSource.data = this.desayunoTable;
          // this.dataSource.paginator = this.paginator;      
        },
        error=>{
          console.log(error);
        }

      );
  }


  editarDesayuno(platoDes: PlatoDesayuno) {
    this.openEditDialgo(platoDes);
  }



  openEditDialgo(platoDes?: PlatoDesayuno): void {
    const config ={
      data:{
        contenido: platoDes,
        panelClass: 'myapp-no-padding-dialog'
      }
    };
    const dialogRef = this.dialog.open(ModalEditarDesayunoComponent, config);
    dialogRef.afterClosed().subscribe(resultado => {
      console.log(`Dialog result ${resultado}`);
    });

  }


  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
