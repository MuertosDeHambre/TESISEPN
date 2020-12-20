import { Ingredientes } from './../../_model/ingredientes';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { PlatoDesayunoService } from '../../_service/plato-desayuno.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { PlatoDesayuno } from '../../_model/platoDesayuno';

@Component({
  selector: 'app-edit-desayuno',
  templateUrl: './edit-desayuno.component.html',
  styleUrls: ['./edit-desayuno.component.css']
})
export class EditDesayunoComponent implements OnInit {
  @Input() menu: PlatoDesayuno;

  ingredientesFire = [
    { ingredientes: "arroz" },
    { ingredientes: "huevos" },
    { ingredientes: "azucar" },
  ];

  miform: FormGroup;
  ingredienteForm: FormGroup;

  usuarioLog: string;
  i: PlatoDesayuno[] =[]
  estado: boolean;

  constructor(private desayunoService: PlatoDesayunoService, private fb: FormBuilder, private afa: AngularFireAuth) { }

  ngOnInit() {

    this.estado = false;
    let currenUser = this.afa.auth.currentUser;
    this.usuarioLog = currenUser.uid;


    // Asi tengo la lista de ingredientes creado en el Form
    this.miform = this.fb.group({
      id: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      platoDesayuno: ['', [Validators.required]],
      detalleDesayuno: ['', [Validators.required]],
      precioDesayuno: ['',  [Validators.required,Validators.pattern(/^[1-9]/)]],
      ingredientes: this.fb.array(this.menu.ingredientes.map(i => this.fb.group({
        ingrediente: this.fb.control(i)
      })))
    })

    this.iniciarForm();
  }



 
  editMenu(menu: PlatoDesayuno){

      if(this.miform.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al editar el Menú!',
      });
    }else{
        this.desayunoService.subirMenu(menu);
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          text: 'Menú editado!',
        });
    }
  }

  cancelar(event: any){
    Swal.fire({
      icon: 'error',
      showConfirmButton: false,
      text: 'Menú no editado!',
    });
  }

  // Asi traigo los elementos al input 
  get IngredienteArray() {
    return (<FormArray>this.miform.get('ingredientes'));
  }

  addIngredientes(ingrediente: string){
    const control = <FormArray>this.miform.controls['ingredientes'];
    control.push(this.fb.group({ingrediente: []}));
  }

  removeIngrediente(index: number){
    const control = <FormArray>this.miform.controls['ingredientes'];
    control.removeAt(index);
  }

  private iniciarForm():void{
    this.miform.patchValue({
      id: this.menu.id,
      estado: this.menu.estado,
      platoDesayuno: this.menu.platoDesayuno,
      detalleDesayuno: this.menu.detalleDesayuno,
      precioDesayuno: this.menu.precioDesayuno,
      ingredientes: this.menu.ingredientes
    });
  }
}
