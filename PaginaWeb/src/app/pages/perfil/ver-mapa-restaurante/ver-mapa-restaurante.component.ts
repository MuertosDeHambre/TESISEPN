import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { CoordenadasService } from '../../../_service/coordenadas.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ver-mapa-restaurante',
  templateUrl: './ver-mapa-restaurante.component.html',
  styleUrls: ['./ver-mapa-restaurante.component.css']
})
export class VerMapaRestauranteComponent implements OnInit {
  private map
  marker: any;
  latitud: any;
  longitud: any;
  usuarioLog: string;

  constructor(private coordenadasSvc: CoordenadasService,
              private afa: AngularFireAuth,
              private route: Router) { }

  ngOnInit(): void {

    let currenUser = this.afa.auth.currentUser;
    this.usuarioLog = currenUser.uid;
    this.mapa();
  }

  actualizarMapa(){
   this.route.navigate(['dueño/mapa']);
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
      console.log("userUID: ", element.userUID);
      console.log("usrrlog: ", this.usuarioLog);
      console.log("elemente??", element);
      
      if(element.userUID ===  this.usuarioLog){
        this.latitud = element['lat'];
        this.longitud = element['lng'];
        

        var lat = parseFloat(this.latitud);
        var lon = parseFloat(this.longitud);
        
        this.marcador(lat, lon); // Aqui agrego el pop-up con las coordenadas de la base de datos`
        break;
      }else{
        console.log("no es");
        
      }
      // break;
    }
  })

}

regresar(){
  this.route.navigate(['dueño/restaurante'])
}

}