import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { queja } from '../_model/quejas';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuejasSugerenciaService {

  private quejaCollection: AngularFirestoreCollection<queja>;
  private quejas: Observable<queja[]>;

  constructor(private db:AngularFirestore) { 
    this.quejaCollection = this.db.collection<queja>('quejas');

  }

  listar() {
    return this.db.collection<queja>('quejas').valueChanges();
  }

  recuperarDatos(): Observable<queja[]>{
    return this.db
      .collection('quejas')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a =>{
          const data = a.payload.doc.data() as queja;
          const id = a.payload.doc.id;
          return {id, ...data}; //SPREAD OPERATOR
        }))
      );
  }
}
