import { Component, OnInit } from '@angular/core';
import { coor } from '../../_model/coordenadas';
import * as L from 'leaflet';
import { CoordenadasService } from '../../_service/coordenadas.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



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

  valor: boolean;
  esteRestaurante: coor[] = [];
  esteRestaurante2: coor[];

  constructor(private coordenadasService : CoordenadasService, private coordenadasService2 : CoordenadasService, private db: AngularFirestore,
    private afa: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {

    // this.verCoordenadasSiExiste();
    this.valor =false;

    let currenUser = this.afa.auth.currentUser;
    this.usuarioLog = currenUser.uid;


    this.coordenadasService2.listar().subscribe(data =>{

      data.forEach(element => {
        if(element.userUID === this.usuarioLog){
          this.valor = true;
         this.validacionExisteCoordenada(this.valor);
        }else{
          console.log("no");
        }
      });
   })


    this.esteMapa();

  }

  esteMapa(){

    const container = document.getElementById('mapa')
    if(container) {
    // code to render map here...
    this.map = L.map('mapa', {
      center: [ -0.2104022, -78.4910514 ],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.registrar();
    }

  }

  marcador(lat : number, lng : number){
    this.marker = L.marker([lat, lng], {draggable:true});
    this.marker.addTo(this.map).bindPopup('Estoy aqui');

    this.marker.on('drag', () =>{
      console.log("aver " + this.marker.getLatLng())

      //for(let x of this.cor.coordenadas){
      //  console.log("sera " + x[0])
      //}
      //this.coordenadasService.registrar(this.cor.coordenadas);

      })

      /*

      let searchControl = L.esri.Geocoding.geosearch().addTo(this.map);
      let results = L.layerGroup().addTo(this.map);

      searchControl.on('results', function (data) {
        results.clearLayers();
        for (var i = data.results.length - 1; i >= 0; i--) {
          results.addLayer(L.marker(data.results[i].latlng));
        }
      });
      */


  }

  registrar(){
    this.marcador(-0.2104022, -78.4910514 )
  }



  prueba(){
    let x = this.marker.getLatLng()
    console.log("aa", x['lat']);
    this.latitud = x['lat'];
    this.longitud = x['lng'];

    var lati = parseFloat(this.longitud);
    var long = parseFloat(this.latitud);

    console.log(lati, long);

    this.coordenadasService.guardarcoordenadas(lati, long);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Coordenada guardada correctamente',
      showConfirmButton: false,
      timer: 3000
    }).then(() =>{
      this.router.navigate(["dueño/restaurante"]);
    });

  }

  actualizarCoordenada(){

    this.coordenadasService2.listar().subscribe(data =>{
      this.esteRestaurante = [];
      data.forEach(element => {
        if(element.userUID === this.usuarioLog){
          this.esteRestaurante.push(element);

          // this.esteRestaurante.push(element);
        }else{
          console.log("no es");
        }

      });

          let x = this.marker.getLatLng()
          console.log("aa", x['lat']);
          this.latitud = x['lat'];
          this.longitud = x['lng'];

          var lati = parseFloat(this.longitud);
          var long = parseFloat(this.latitud);

          console.log(lati, long);
          // this.coordenadasService.actualizarC(this.esteRestaurante,lati,long)


      console.log("nnnn", this.esteRestaurante);


    })


  }

  verCoordenadas(){
    this.coordenadasService2.listar().subscribe(data =>{
       for(let y of data){
         if(y.userUID === this.usuarioLog){
          // console.log("se", element);
          let x = this.marker.getLatLng()
          console.log("aa", x['lat']);
          this.latitud = x['lat'];
          this.longitud = x['lng'];

          var lati = parseFloat(this.longitud);
          var long = parseFloat(this.latitud);

          console.log(lati, long);
          this.coordenadasService.actualizarC(y,lati,long)


          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Coordenada actualizada correctamente',
            showConfirmButton: false,
            timer: 3000
          }).then(() =>{
            // this.router.navigate(["dueño/restaurante"]);
            // window.location.replace("http://localhost:4200/#/dueño/verMapa");
            window.location.replace("https://muertosdehambre.web.app/#/dueño/verMapa");
            // window.location.replace("");
            // window.location.reload();


            // var dir = this.router.navigate(["dueño/restaurante"]);
            // Esto funciona para controlar un error al actualizar el menu
            // Validar el REPLACE cuando se suba al dominio la pagina
            // var dirigir = true;
            // if(dirigir){
              //window.location.replace("http://localhost:4200/#/dueño/verMapa");
              // window.location.reload('dueño/verMapa');
            // this.router.navigate(["dueño/restaurante"]);

            //   dirigir = false;
            // }
            // if(dirigir === false){
            // this.router.navigate(["dueño/restaurante"]);
            // window.location.reload();
            // }
          });

         break;
         }else{
           this.valor = false;
           this.validacionExisteCoordenada(this.valor);
           console.log("no hay datos con este usuario");
           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sin coordenadas guardadas',
            showConfirmButton: false,
            timer: 1000
          }).then(() =>{
            // this.router.navigate(["dueño/restaurante"]);
          })
         }
       }

    })

  }

  verCoordenadasSiExiste(){
    this.coordenadasService2.listar().subscribe(data =>{
       for(let y of data){
         console.log( "user mapa", y.userUID);
         console.log("log", this.usuarioLog);

         if(y.userUID === this.usuarioLog){

          this.valor = true;
          this.validacionExisteCoordenada(this.valor);
         break;
         }else{
           this.valor = false;
           this.validacionExisteCoordenada(this.valor);
          }
       }
    })

  }
  validacionExisteCoordenada(valorA: boolean){
    if (valorA){
      return true;
    }else{
      return false;
    }
  }

  regresar(){
    this.router.navigate(['dueño/restaurante'])
  }


}
