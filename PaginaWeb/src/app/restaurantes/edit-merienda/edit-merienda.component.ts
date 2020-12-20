import { PlatoMeriendaService } from './../../_service/plato-merienda.service';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, Form } from '@angular/forms';
import { PlatoEspecial } from '../../_model/platoEspecial';

@Component({
  selector: 'app-edit-merienda',
  templateUrl: './edit-merienda.component.html',
  styleUrls: ['./edit-merienda.component.css']
})
export class EditMeriendaComponent implements OnInit {
  @Input() menu: PlatoEspecial;

  miform: FormGroup;
  ingredientesList: string[];
  

  constructor(private meriendaService: PlatoMeriendaService, private fb: FormBuilder) { }

  ngOnInit() {

    this.menu.ingredientes.map(i =>{
      console.log("sera??", i);
    })

    console.log("thisss", this.menu.ingredientes);
    

    this.miform = this.fb.group({
      id: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      platoEspecial: ['', [Validators.required]],
      precioEspecial: ['',  [Validators.required, Validators.pattern(/^[1-9]/)]],
      ingredientes: this.fb.array(this.menu.ingredientes.map(i => this.fb.group({
        ingrediente: this.fb.control(i)
      })))
    })

    this.iniciarForm2();
    this.IngredienteArray2();
    this.meriendaService.listar2();

    
  }

  editMenu(menu: PlatoEspecial){
    console.log("ss", menu);
    
    if(this.miform.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al editar el Menú!',
      }); 
    }else{
        this.meriendaService.subirMenu(menu);
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

  IngredienteArray2() {
    console.log("arrayForm", <FormArray>this.miform.get('ingredientes'));
    
    // (<FormArray>this.miform.get('ingredientes'));
  }

  addIngredientes(ingrediente: string){
    const control = <FormArray>this.miform.controls['ingredientes'];
    control.push(this.fb.group({ingrediente: []}));
  }

  removeIngrediente(index: number){
    const control = <FormArray>this.miform.controls['ingredientes'];
    control.removeAt(index);
  }

  
  // Metodo que va recibir lo que tenga en el form @input = menu

  private iniciarForm2():void{
    this.miform.patchValue({
      id: this.menu.id,
      estado: this.menu.estado,
      platoEspecial: this.menu.platoEspecial, 
      precioEspecial: this.menu.precioEspecial,
      ingredientes: this.menu.ingredientes      
    });
  }
}
