import { Component, OnInit } from '@angular/core';
import { CoordenadasService } from '../../../_service/coordenadas.service';
import * as L from 'leaflet';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private map
  marker: any;
  latitud: any;
  longitud: any;
  usuarioLog: string;

  constructor(private coordenadasSvc: CoordenadasService,
              private afa: AngularFireAuth) { }

  ngOnInit(): void {

    let currenUser = this.afa.auth.currentUser;
    this.usuarioLog = currenUser.uid;
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

}
