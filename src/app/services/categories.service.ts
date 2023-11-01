import { ToastrService } from 'ngx-toastr';
import { Injectable, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { documentId, getDocs, query } from 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

import { Category } from '../models/category';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements OnInit{




  constructor(private fs: AngularFirestore, private ts: ToastrService,
    ) { }

  async saveData(data){



    const res = await this.fs.collection('categories').add(data);

    console.log('Documento criado com ID: ', res.id);
    this.ts.success("Documento criado com sucesso!")


  }




  async deleteData(id){


    this.fs.doc(`categories/${id}`).delete();
    this.ts.success("Documento deletado com sucesso!")
    console.log(id)





  }




  updateData(id, EditData){



    this.fs.collection('categories').doc(id).update(EditData).then(docRef =>{

      this.ts.success("Dados atualizados com sucesso!");
      console.log(id, EditData)
    })


  }
  ngOnInit() {




}







    }









