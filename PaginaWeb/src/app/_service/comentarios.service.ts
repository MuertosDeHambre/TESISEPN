import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { comentarios } from '../_model/comentarios';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private comentariosCollection : AngularFirestoreCollection<comentarios>;
  private comentarios : Observable<comentarios[]>;
  constructor(private db: AngularFirestore) {

    this.comentariosCollection = this.db.collection<comentarios>('comentarios');

   }


  listar() {
    return this.db.collection<comentarios>('comentarios').valueChanges();
  }

   getReservas() : Observable<comentarios[]>{
     return this.comentarios;
   }

   getReserva(id : string) : Observable<comentarios>{
     return this.comentariosCollection.doc<comentarios>(id).valueChanges().pipe(
       take(1),
       map(comentario =>{
        comentario.uid = id;
         return comentario
       })
     );
   }

   recuperarDatos(): Observable<comentarios[]>{
    return this.db
      .collection('comentarios')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a =>{
          const data = a.payload.doc.data() as comentarios;
          const id = a.payload.doc.id;
          return {id, ...data}; //SPREAD OPERATOR
        }))
      );
  }
}
