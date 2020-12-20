import { Component, OnInit, Input } from '@angular/core';
import { Promocion } from '../../_model/promocion';
import { Perfil } from '../../_model/perfil';
import { PerfilService } from '../../_service/perfil.service';

@Component({
  selector: 'app-lista-promos',
  templateUrl: './lista-promos.component.html',
  styleUrls: ['./lista-promos.component.css']
})
export class ListaPromosComponent implements OnInit {

  @Input() promos: Promocion;

  restaurantes: Perfil[] = [];

  constructor(public perfilSvc: PerfilService) { }

  ngOnInit(): void {
    this.perfilSvc.listar().subscribe(data =>{
      this.restaurantes = [];
      data.forEach(element => {
        if(element.resVerificado ==='Aprobado' && element.estadoDocumento === 'documento Aprobado' && element.estado === 'verdadero'){
          this.restaurantes.push(element);
        }
      });
    })
  }


}
