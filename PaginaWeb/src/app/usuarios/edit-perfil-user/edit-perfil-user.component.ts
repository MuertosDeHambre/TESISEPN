import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from 'app/_model/usuario';
import { UsuarioService } from '../../_service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-perfil-user',
  templateUrl: './edit-perfil-user.component.html',
  styleUrls: ['./edit-perfil-user.component.css']
})
export class EditPerfilUserComponent implements OnInit {

  @Input() user: Usuario;

  constructor(private usuarioScv: UsuarioService) { }

  public editDesayunoForm = new FormGroup({
    uid: new FormControl (''),
    nombre: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(20),  Validators.pattern("[A-Za-z]*")]),  
    apellido: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(20),  Validators.pattern("[A-Za-z]*")]),  
    email: new FormControl('',  [Validators.required]),
    numero: new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.minLength(10)]),
    // descripcion: new FormControl(''),
    // socialF: new FormControl('',),
    // socialG: new FormControl('',)

  });

  ngOnInit() {
    this.iniciarForm();
  }

  editUser(menu: Usuario){

    if(this.editDesayunoForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al editar la información',
        timer: 1500

      }); 
    }else{
        this.usuarioScv.editarUsuario(menu);
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          text: 'Información actualizada',
          timer: 1500

        });
    }    
  }

  cancelar(event: any){
    Swal.fire({
      icon: 'error',
      showConfirmButton: false,
      text: 'Información no actualizada',
      timer: 1500
    });
  }


  // Metodo que va recibir lo que tenga en el form @input = menu
  private iniciarForm():void{
    this.editDesayunoForm.patchValue({
      uid: this.user.uid,
      nombre: this.user.nombre,
      apellido: this.user.apellido, 
      email: this.user.email,
      numero: this.user.numero,
      // descripcion: this.user.descripcion,
      // socialF: this.user.socialF,
      // socialG: this.user.socialG
    });
  } 

}
