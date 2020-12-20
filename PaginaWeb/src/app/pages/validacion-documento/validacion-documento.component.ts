import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { Perfil } from '../../_model/perfil';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PerfilService } from '../../_service/perfil.service';
import { MatDialog } from '@angular/material/dialog';
import { EditEstadoDocumentoModalComponent } from '../../modal/edit-estado-documento-modal/edit-estado-documento-modal.component';


@Component({
  selector: 'app-validacion-documento',
  templateUrl: './validacion-documento.component.html',
  styleUrls: ['./validacion-documento.component.css']
})
export class ValidacionDocumentoComponent implements OnInit {

  displayedColumns: string[] = ['nombreR', 'tipoR', 'documento', 'estadoDoc' ,'acciones'];
  displayedColumns2: string[] = ['nombreR', 'tipoR', 'documento', 'estadoDoc','acciones' ];
  displayedColumns3: string[] = ['nombreR', 'tipoR', 'documento', 'estadoDoc','acciones' ];
  displayedColumns4: string[] = ['nombreR', 'tipoR', 'estadoDoc','acciones' ];

  dataSource = new MatTableDataSource();
  dataSource2 = new MatTableDataSource();
  dataSource3 = new MatTableDataSource();
  dataSource4 = new MatTableDataSource();


  resRechazado :Perfil[] =[];
  resAprobado :Perfil[] =[];
  resSinDoc :Perfil[] =[];
  reseEnRevision :Perfil[] =[];



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(private perfilSvc: PerfilService, public dialog: MatDialog,
            private route: Router) { }

  ngOnInit() {
    // this.perfilSvc.recuperarDatos().subscribe(perfiles => (this.dataSource.data = perfiles));
    // this.tablaResConDocumento();
    // this.tablaResSinDocumento();
    this.tablaDocumentosEnRevision();
  }

  tablaDocumentosEnRevision(){
    this.perfilSvc.recuperarDatos().subscribe(data =>{
      this.reseEnRevision = [];
      this.resRechazado = [];
      this.resAprobado = [];
      this.resSinDoc = [];

      data.forEach(element => {
        if(element.estadoDocumento === 'documento en Revision'){
          this.reseEnRevision.push(element);
        }else if(element.estadoDocumento === 'documento Rechazado'){
          this.resRechazado.push(element);
        }else if(element.estadoDocumento === 'documento Aprobado'){
          this.resAprobado.push(element);
        }else if(element.estadoDocumento === 'Sin Documento'){
          this.resSinDoc.push(element);
        }
      });

      console.log(this.resRechazado);
      console.log(this.reseEnRevision);
      console.log(this.resAprobado);
      console.log(this.resSinDoc);

      this.dataSource.data = this.resAprobado;
      this.dataSource.paginator = this.paginator; 

      this.dataSource2.data = this.reseEnRevision;
      this.dataSource2.paginator = this.paginator; 

      this.dataSource3.data = this.resRechazado;
      this.dataSource3.paginator = this.paginator; 

      this.dataSource4.data = this.resSinDoc;
      this.dataSource4.paginator = this.paginator; 
      

    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
    this.dataSource3.paginator = this.paginator;
    this.dataSource3.sort = this.sort;
    this.dataSource4.paginator = this.paginator;
    this.dataSource4.sort = this.sort;
  }

  applicarFiltro(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    this.dataSource3.filter = filterValue.trim().toLowerCase();
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  }


  editarEstadoDocumento(perfil: Perfil) {
    this.dialogoEditarDocumentoo(perfil);
  }

  dialogoEditarDocumentoo(perfil?: Perfil): void {
    const config ={
      data:{
        mensaje: 'Cambiar estado',
        contenido: perfil
      }
    };
    const dialogRef = this.dialog.open(EditEstadoDocumentoModalComponent, config);
    dialogRef.afterClosed().subscribe(resultado => {
      console.log(`Dialog result ${resultado}`);
    });
  }

}

