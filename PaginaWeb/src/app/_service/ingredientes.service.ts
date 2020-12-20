import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Ingredientes } from '../_model/ingredientes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {


  private platoEspecialCollection: AngularFirestoreCollection<Ingredientes>;

  constructor(private afs: AngularFirestore,) {

    this.platoEspecialCollection = afs.collection<Ingredientes>('ingredientesE');

   }


  listar() {
    return this.afs.collection<Ingredientes>('ingredientesE').valueChanges();
  }
  
  // Metodo recuperar los datos de la coleccion de Perfil, iterando por el id que devuelve 
  recuperarDatos(): Observable<Ingredientes[]>{
    return this.afs
      .collection('ingredientesE')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a =>{
          const data = a.payload.doc.data() as Ingredientes;
          const id = a.payload.doc.id;
          return {id, ...data}; //SPREAD OPERATOR
        }))
      );
  }
  
  
  
  public eliminarIngrediente(ingre: Ingredientes){
    return this.platoEspecialCollection.doc(ingre.uid).delete();
  }
  
  eliminar(i: Ingredientes){
    return this.afs.collection('ingredientesE').doc(i.uid).delete();
  }
  

}

