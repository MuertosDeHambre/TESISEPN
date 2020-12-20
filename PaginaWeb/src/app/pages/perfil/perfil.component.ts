import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../_model/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { Perfil } from '../../_model/perfil';
import { PerfilService } from '../../_service/perfil.service';
import { LoginService } from '../../_service/login.service';
import { PlatoService } from '../../_service/plato.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal/modal.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as L from 'leaflet';
import { CoordenadasService } from '../../_service/coordenadas.service';
import { comentarios } from '../../_model/comentarios';
import { queja } from '../../_model/quejas';
import { ComentariosService } from '../../_service/comentarios.service';
import { QuejasSugerenciaService } from '../../_service/quejas-sugerencia.service';
import { Afiliados } from '../../_model/afiliados';
import { AfiliadoServiveService } from '../../_service/afiliado-servive.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: string;
  ultimaConexion: string;
  desde: string;
  usuarioSocial: string;
  emailVerificado: boolean;
  fotoSocial: string;

  perfil : Perfil[];
  restaurantelog : Perfil[];

  esteRestaurante: Perfil[] = [];

  usuarioLog: string;
  perfil$: Observable<Perfil[]>;

  valor: boolean=true;

  valorMapa: boolean;

  editarMenu: boolean;
  resDeshabilitado: boolean;

  file: any = null;
  private map
  marker: any;
  labelFile: string;
  isSubmitted: boolean = false;


  latitud: any;
  longitud: any;

  mapaExiste: boolean;

  // ESTADISTICAS
  comentarios:comentarios[] =[];
  totalComentarios:String='';
  totalComentariosDueno:any=0;

  quejas: queja[] = [];
  totalquejas: any=0;

  sugerencias: queja[] = [];
  totalsugerencias: any=0;

  afiliados: Afiliados[] = [];
  totalAfiliados: any=0;


  constructor(private afa: AngularFireAuth, private perfilService: PerfilService,
              private loginService: LoginService,
              private platoService: PlatoService,
              private dialog: MatDialog,
              private route: Router,
              private coordenadasSvc: CoordenadasService,
              private comentariosSVc: ComentariosService,
              private restauranteSvc: PerfilService, 
              private quejasScv: QuejasSugerenciaService,
              private afiliadosSvc: AfiliadoServiveService) { }

    public newDocForm = new FormGroup({
    id: new FormControl (''),
    docPost: new FormControl('', Validators.required)
  });

  ngOnInit() {

    this.listarSugerencias();
    this.listarQuejas();
    this.listarComentarios();
    this.listarAfiliados();



    this.valorMapa = false;

    this.mapaExiste = false;

    let currenUser = this.afa.auth.currentUser;
    this.usuario = currenUser.phoneNumber;
    this.usuarioLog = currenUser.uid;

    // variable para validar si el correo del usuaro
    this.emailVerificado = currenUser.emailVerified;
    this.editarMenu = false;

    this.resetForm();

    // Programacion reactiva: Me permite mostrar los datos de la tabla del usuario logueado para que el pueda editar
    this.perfilService.listar().subscribe(data => {
      this.esteRestaurante = [];
      for(let x of data){
        if(this.usuarioLog == x.userUID){
          this.restaurantelog = [x];
          this.esteRestaurante.push(x);
          this.valor = true;
          this.validacion(this.valor);
          break;
        }else{
          this.valor = false;
        }
      }

      console.log("??", this.esteRestaurante);
      
      this.coordenadasSvc.listar().subscribe(data =>{

        this.esteRestaurante.forEach(r => {
          data.forEach(element => {
            if(element.userUID === r.userUID){
              console.log("tiene mapa", element);
              this.valorMapa = true;
              this.validacionMapa(this.valorMapa);
            }else{
              console.log("no tiene mapa");
            }
          });
        });
      })
      

  });

    this.perfilService.listar().subscribe(data=>{
      this.perfil = data;
      //console.log(this.perfil);
    });

    this.perfil$ = this.perfilService.recuperarDatos();
    
    this.mapa();

  }

  listarComentarios(){
    this.comentarios=[];
    this.comentariosSVc.listar().subscribe(data =>{
      console.log("data", data);
      console.log("user", this.usuarioLog);
      
      for(let key$ in data){
        let comentario = data[key$]
        comentario['uid'] = key$;        
        // console.log("key", comentario['uid']);
        this.comentarios.push(comentario);
        // console.log("aaaa", this.comentarios);
        
        if(this.usuarioLog === comentario.uidResta){
          console.log("a ver", comentario);
          this.totalComentariosDueno = this.totalComentariosDueno+1;
        }
        
      }     
    }, 

    error=>{
      console.log(error);
      }

    );
  }

  listarQuejas(){
    this.quejas=[];

    this.quejasScv.listar().subscribe(data=>{

      data.forEach(element => {
        if(element.uidResta === this.usuarioLog && element.tipo === 'Queja'){
          this.quejas.push(element);
          console.log("quejas", this.quejas);
          this.totalquejas = this.totalquejas +1;
        }
      });
    })
  }

  listarAfiliados(){
    this.afiliados=[];

    this.afiliadosSvc.listar().subscribe(data=>{

      data.forEach(element => {
        if(element.uidResta === this.usuarioLog && element.estado === 'verdadero'){
          this.afiliados.push(element);
          console.log("afiliados", this.afiliados);
          this.totalAfiliados = this.totalAfiliados +1;
        }
      });
    })
  }

  listarSugerencias(){
    this.sugerencias=[];

    this.quejasScv.listar().subscribe(data=>{

      data.forEach(element => {
        if(element.uidResta === this.usuarioLog && element.tipo === 'Sugerencia'){
          this.sugerencias.push(element);
          console.log("quejas", this.sugerencias);
          this.totalsugerencias = this.totalsugerencias +1;
        }
      });
    })
  }

  irEstadisticas(){
    this.route.navigate(['dueño/estadisticas'])
  }

  mapa(){
    
       // code to render map here...
        this.map = L.map('map', {
          center: [ -0.2104022, -78.4910514 ],
          zoom: 16,
            invalidateSize: true

        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    tiles.addTo(this.map);
    this.verCoordenadas();
  }

    marcador(lat : number, lng : number){
    this.marker = L.marker([lat, lng], {draggable:false});
    this.marker.addTo(this.map).bindPopup('Mi restaurante');
  }

  verCoordenadas(){
    this.coordenadasSvc.listar().subscribe( data =>{

      for(let element of data){
        if(element['userUID'] ===  this.usuarioLog){
          this.latitud = element['lat'];
          this.longitud = element['lng'];
          

          var lat = parseFloat(this.latitud);
          var lon = parseFloat(this.longitud);
          
          this.marcador(lat, lon); // Aqui agrego el pop-up con las coordenadas de la base de datos
        }
        break;
      }
    })

  }

  verMapa(){
    this.route.navigate(['dueño/verMapa'])
  }

  editarMapa(){
    this.route.navigate(['dueño/mapa'])
  }


  // Metodo para validar si existe informacion del restaurante
  // y mostrar la opcion para cargar promociones
  validacion(valor: boolean){
      if (valor){
        return true;
      }else{
        return false;
      }
    }

    validacionMapa(valor: boolean){
      if (valor){
        return true;
      }else{
        return false;
      }
    }

    deshabilitarRestaurante(res: Perfil){
      Swal.fire({
        title: '¿Deseas deshabilitar tu restaurante?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "No",
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.value) {
          this.perfilService.deshabilitarRestaurante(res).then(() =>{
            //this.timer();
            // Controlo el Ng model para que aparezca el restaurante Deshabilitad
            this.resDeshabilitado = true;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Restaurante deshabilitado',
              showConfirmButton: false,
              timer: 2000
            })
                .then(() =>{
                //this.router.navigate(['/perfil']);
              });
            }).catch((error =>{
              Swal.fire('Error!', error ,'error');
            }));
        }else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Cancelado',
            showConfirmButton: false,
            timer: 1000
          });
      }
      })
    }

    habilitarRestaurante(res: Perfil){
      console.log("res", res);

      Swal.fire({
        title: '¿Desea habilitar tu restaurante?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "No",
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.value) {
          this.perfilService.habilitarRestaurante(res).then(() =>{
            //this.timer();
            //window.location.reload(true);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Restaurante habilitado',
              showConfirmButton: false,
              timer: 2000
            })
              .then(() =>{
                //this.router.navigate(['/perfil']);
              });
            }).catch((error =>{
              Swal.fire('Error!', error ,'error');
            }));
        }else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Cancelado',
            showConfirmButton: false,
            timer: 1000
        });
      }
    })
  }

  subirDocumentoDeValidacion(res: Perfil, e: any){

    console.log("rssss", res.id);
    this.file = e.target.files[0];
    this.labelFile = e.target.files[0].name;
    console.log("archivo", this.file);

    Swal.fire({
      title: '¿Deseas subir este doocumento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "No",
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {

        this.perfilService.subirPerfilconDocumento(res, this.file)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Documento agregado',
            showConfirmButton: false,
            timer: 1000
          });
        // this.resetForm()
      }else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Cancelado',
          showConfirmButton: false,
          timer: 1000
      });
      // this.resetForm()
    }
  })
}

  seleccionar(e: any): void{
    // this.isSubmitted = true;
    this.file = e.target.files[0];
    this.labelFile = e.target.files[0].name;
    console.log("que???", this.file);
  }

  seleccionar_doc(e: any): void{

    // this.isSubmitted = true;
    // this.file = e.target.files[0];
    // this.labelFile = e.target.files[0].name;


    let typeImage = e.target.files[0].type;
    let sizeFile = e.target.files[0].size;
    console.log("tamaño de la imagene", sizeFile);
    console.log("tipo de la imagene", typeImage);

    if(typeImage === 'image/gif' || typeImage === 'image/jpeg' || typeImage === 'image/png' || typeImage === 'application/pdf' || typeImage === 'application/docx' ){
      console.log(sizeFile);
      
      // Imagen minima de 5 Mb aproimadamente 5242880
      if(sizeFile <= 5000000){
        this.isSubmitted = true;
        this.file = e.target.files[0];
        this.labelFile = e.target.files[0].name;
      }else{
        Swal.fire({
          icon: 'error',
          showConfirmButton: false,
          text: 'Archivo no permitido!',
        });
      }


    }else{
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        text: 'Archivo no permitido!',
      });
    }
  }


  addDocumento(restaurante: Perfil) {
    Swal.fire({
      title: '¿Estás seguro de agregar este documento?',
      icon: 'info',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) =>{
      if(result.value){
        this.perfilService.subirPerfilconDocumento(restaurante, this.file);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Documento agregado',
          text: 'El administrador revisará si tu restaurante es válido, el proceso puede durar 24 horas.',
          showConfirmButton: true,
        });
        this.resetForm();
      }else{
        this.resetForm();
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Cancelado',
          showConfirmButton: false,
          timer: 1500
        });
        this.resetForm();
        this.newDocForm.setValue({
          id: '',
          docPost: ''
        });
      }
    });    
  }

  resetForm() {
    this.newDocForm.reset();
    this.newDocForm.setValue({
      id: '',
      docPost: ''
    });
    this.file = null;
    this.labelFile = "";
    this.isSubmitted = false;
  }
  

  

  enviarEmail(){
    this.loginService.enviarVerificacionEmail();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'mail enviado!',
      text: "Revisa tu bandeja de entrada",
      showConfirmButton: false,
      timer: 1500
    });
  }

    onNewPost() {
      this.openDialog();
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(ModalComponent, {panelClass: 'myapp-no-padding-dialog'});
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result ${result}`);
      });
    }
}
