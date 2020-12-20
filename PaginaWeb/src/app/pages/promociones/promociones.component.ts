import { Component, OnInit } from '@angular/core';
import { Promocion } from '../../_model/promocion';
import { PromocionService } from '../../_service/promocion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileI } from '../../_model/imagenes';
import { FileP } from '../../_model/promosImg';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  file_promo: any = null;
  labelFile: string;
  private files: FileP;
  filesName: File[];
  imgSrc: string;
  isSubmitted: boolean = false;


  constructor(private promoService: PromocionService) { }

  public newPromoForm = new FormGroup({
    id: new FormControl (''),
    imagePost: new FormControl('', Validators.required)
  });

  public formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  ngOnInit() {
    this.resetForm();
  }

  addPromocion(data: Promocion) {
    
    Swal.fire({
      title: '¿Deseas agregar esta promoción ahora?',
      icon: 'info',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) =>{
      if(result.value){
        this.promoService.subirRestauranteconPromociones(data, this.file_promo);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Promoción agregada',
          showConfirmButton: false,
          timer: 2000
        });
        this.resetForm();
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Cancelado',
          showConfirmButton: false,
          timer: 1500
        });
        this.resetForm();
      }
    });    
    //this.router.navigate(['editar']);
  }

  seleccionar_promo(e: any): void{

    let typeImage = e.target.files[0].type;
    let sizeFile = e.target.files[0].size;
    console.log("tamaño de la imagene", sizeFile);
    console.log("tipo de la imagene", typeImage);

    if(typeImage === 'image/gif' || typeImage === 'image/jpeg' || typeImage === 'image/png' ){
      
      // Imagen minima de 5 Mb aproimadamente 5242880
      if(sizeFile <= 5000000){
        this.isSubmitted = true;
        this.file_promo = e.target.files[0];
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

  // Aun no le hago uncionar la opcion para subir varias imagenes a la vez
  public selectFiles(event: any): void {    
    if (event.target.files && event.target.files.length) {
      this.files = event.target.files;
      this.filesName = event.target.files.name;
      console.log("Imagenes seleccionadas", this.files);
      console.log("Imagenes seleccionadas", this.filesName);
      
    }
  }



  resetForm() {
    this.newPromoForm.reset();
    this.newPromoForm.setValue({
      id: '',
      imagePost: ''
    });
    this.file_promo = null;
    this.labelFile = "";
    console.log("Promoción Agregada");
    this.isSubmitted = false;
  }


}
