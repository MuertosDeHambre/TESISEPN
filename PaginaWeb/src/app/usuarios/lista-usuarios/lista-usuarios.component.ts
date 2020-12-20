import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Usuario } from '../../_model/usuario';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../_service/usuario.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'email', 'numero', 'rol','acciones'];
  dataSource = new MatTableDataSource();


  usuarios$: Observable<Usuario[]>;
  userHabilitados :Usuario[] =[];



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private usuarioSvc: UsuarioService,
                private route: Router) { }

  ngOnInit(): void {

    
    this.tablaHabilitados();
    // this.usuarioSvc.recuperarDatos().subscribe(usuarios => (this.dataSource.data = usuarios));

    this.usuarios$ = this.usuarioSvc.recuperarDatos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applicarFiltro(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  tablaHabilitados(){
    this.userHabilitados=[];
    this.usuarioSvc.recuperarDatos()
      .subscribe(
        // afil['estado'] == 'falso'
        data=>{
          for(let key$ in data){
            let habilitados = data[key$];

            if(habilitados['estado'] == "verdadero"){
              this.userHabilitados.push(habilitados);
            }else{
              console.log("no");
            }

          }
          this.dataSource.data = this.userHabilitados	;
          this.dataSource.paginator = this.paginator;      
        },
        error=>{
          console.log(error);
        }

      );
  }

  desHabilitarUsuario(usuario: Usuario) {   
     
    Swal.fire({
      title: '¿Deseas deshabilitar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then(result => {
      if (result.value) {
        this.usuarioSvc.deshabilitarUsuario(usuario).then(() => {
            this.route.navigate(['admin/listaU']);
          Swal.fire('Deshabilitado!', 'El usuario ha sido deshabilitado.', 'success');
          this.tablaHabilitados();
        }).catch((error) => {
          Swal.fire('Error!', 'There was an error deleting this post', 'error');
        });
      }
    });
  }

}
