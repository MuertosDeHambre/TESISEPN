import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PerfilService } from '../../_service/perfil.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginService } from '../../_service/login.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { Perfil } from '../../_model/perfil';
import Swal from 'sweetalert2';
import { ModalComponent } from '../../modal/modal/modal.component';
import { FileI } from '../../_model/imagenes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-restaurante',
  templateUrl: './crear-restaurante.component.html',
  styleUrls: ['./crear-restaurante.component.css']
})
export class CrearRestauranteComponent implements OnInit, OnDestroy {

  form: FormGroup;
  id: string;
  edicion: boolean;
  usuarioLogeado: string;
  perfil : Perfil[];

  file: any;
  file_promo: any;
  labelFile: string;


  private filePath: any;
  rutaImagen: Observable<string>;

  public selected: any;
  Kioscos:0;
  

    // Se crear la variable para liberar recursos
    private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute,
              private perfilService: PerfilService,
              private afStorage: AngularFireStorage,
              private afs: AngularFirestore,
              private snackBar: MatSnackBar,
              private router: Router,
              private loginService: LoginService) { }


  public newPostForm = new FormGroup({
    id: new FormControl (''),
    nombreRestaurante: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),  
    tipoRestaurante: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
    capacidadRestaurante: new FormControl('', [Validators.maxLength(2), Validators.pattern(/^[1-9]/)] ),
    horaApertura: new FormControl('',  [Validators.required,Validators.pattern("^([0]?[6-9]|1[0-1]):[0-5][0-9]$")] ),
    horaCierre: new FormControl('',  [Validators.required, Validators.pattern("^([1]?[2-9]|2[0-3]):[0-5][0-9]$")]),
    direccionRestaurante: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)] ),
    socialF: new FormControl('',[Validators.maxLength(30)]),
    socialG: new FormControl('',[Validators.maxLength(30)]),
    imagePost: new FormControl('')
  });

  ngOnInit() {
    // Metodo para traer el id del usuario
    this.loginService.user.pipe(takeUntil(this.ngUnsubscribe)).subscribe(data =>{
      this.usuarioLogeado = data.uid;
    })

    this.form = new FormGroup({
      // Setear el formulario
      // Variables que se colocan en el FormControlName del html
      'id': new FormControl(''),
      'nombreR': new FormControl('', Validators.required),
      'tipoR': new FormControl('', Validators.required),
      'direccionR': new FormControl('', Validators.required),
      'horarioR': new FormControl('', Validators.required),
      'horarioC': new FormControl('', Validators.required),
      'capacidadR': new FormControl('', Validators.required),
      //'imagenPerfil': new FormControl('', Validators.required)
    });

    // Esto sirve para mostrar los datos del Grid al componente de edicion
    this.route.params.subscribe((params: Params) =>{
      this.id = params['id'];
      this.edicion = this.id != null;
      //this.initForm();
    });

    this.perfilService.listar().subscribe(data =>{
      this.perfil = data;
      console.log("perfil", this.perfil)
    });

    
  }

  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) 
       {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
       }
     }
  }


  initForm(){
    if(this.edicion){   // Metodo para mostrar lo que esta en la tabla al grid de edicion
      this.perfilService.leer(this.id).pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: Perfil) => {
        this.form = new FormGroup({
          'id': new FormControl(data.id),
          'nombreR': new FormControl(data.nombreRestaurante),
          'tipoR': new FormControl(data.tipoRestaurante),
          'direccionR': new FormControl(data.direccionRestaurante),
          'horarioA': new FormControl(data.horaApertura),
          'horarioC': new FormControl(data.horaCierre),
          'capacidadR': new FormControl(data.capacidadRestaurante),
          //'imagenPerfil': new FormControl(data.imagePost),
        });
        
        // Aqui no se usa el ngUnsubscribe porque se esta conectando con FireStorage
         if(data != null){
           this.afStorage.ref(`perfiles/${data.id}`).getDownloadURL().subscribe(data => {
            //this.urlImage = data;
            //console.log("Es la imagen?? ", this.urlImage);
            
           })
          }
      });
    }
  }

  operar() {

    Swal.fire({
      title: '¿Deseas crear tu restaurante?',
      //text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "No!",
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.value) {
    
        let perfil = new Perfil();
        perfil.nombreRestaurante = this.form.value['nombreR'];
        perfil.tipoRestaurante = this.form.value['tipoR'];
        perfil.horaApertura = this.form.value['horarioR'];
        perfil.horaCierre = this.form.value['horarioC'];
        perfil.direccionRestaurante = this.form.value['direccionR'];
        perfil.capacidadRestaurante = this.form.value['capacidadR'];
        perfil.userUID = this.usuarioLogeado;
    
        // Guardar la imagen atado al ID
        if(this.edicion){
          perfil.id = this.form.value['id'];
        }else{
          perfil.id = this.afs.createId();
        }    

        // Funcion para subir imagenes
        if(this.file != null){
          let ref = this.afStorage.ref(`perfiles/${perfil.id}`);
          ref.put(this.file);
        }
    

    //let mensaje
    if(this.edicion){
      this.perfilService.modificar(perfil);
      //Swal.fire('Eliminado!','Tu Restaurante ha sido eliminado','success')
    } else{
      this.perfilService.registrar(perfil);  
     // let f =this.perfilService.subirImagen( this.file); 
     // console.log("imagen>>", f);
      
     Swal.fire('Listo!','La información de tu restaurante ha sido agregada','success')

    }

    this.router.navigate(['perfil']);
  
    }else {
        Swal.fire("Cancelado", "", "error");
      }
    })
  }

   addPerfil(data: Perfil) {
     console.log('New perfil', data);
     this.perfilService.subirPerfilconImagen(data, this.file);
     Swal.fire('Listo!','La información de tu restaurante ha sido agregada','success')
     this.router.navigate(['/dueño/restaurante']);
   }


  // Funcion para mostrar el nombre del archivo seleccionado
  seleccionar(e: any): void{
  

    let typeImage = e.target.files[0].type;
    let sizeFile = e.target.files[0].size;
    console.log("tamaño de la imagene", sizeFile);
    console.log("tipo de la imagene", typeImage);

    if(typeImage === 'image/gif' || typeImage === 'image/jpeg' || typeImage === 'image/png' ){
      
      // Imagen minima de 5 Mb aproimadamente 5242880
      if(sizeFile <= 5000000){
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

  seleccionar_promo(e: any): void{
    this.file_promo = e.target.files[0];
  }

      //   task.snapshotChanges()
      //   .pipe(
      //    finalize(() => {
      //     ref.getDownloadURL().subscribe(urlImage => {
      //        this.urlImg = urlImage;
      //        console.log('urlImagen', this.urlImg);
      //        //perfil.fotoRes = this.UrlImagen;
      //        //perfil.imagen = "http";
      //      });
      //   })
      //  ).subscribe();

    
    //let f = this.perfilService.subirImagen(this.file);
    //console.log("imagen??", f)
  

  aver(){
    this.newPostForm.setValue({
      capacidadRestaurante: "0"
    })
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
