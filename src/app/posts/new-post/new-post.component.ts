import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permalink: string = " ";
  imgSrc: any = "./assets/plax.jpg";
  selectedImg : any;
  categories: Observable <Category[]>;

  constructor(private fs: AngularFirestore){}

  ngOnInit() {

    this.categories =this.fs.collection('categories', (ref) => ref.orderBy('criado_em', 'desc')).get().pipe(map((result)=> this.convertSnaps<Category>(result)));

    console.log(this.categories)
    }

  convertSnaps<T>(result){
    return <T[]> result.docs.map(snap=>{
      return{
      id:snap.id,
      ...<any> snap.data()



   }
   })
  }
      
      

 

  onTitleChanged($event){

    const title = $event.target.value;

    this.permalink = title.replace(/\s/g,'-');

    console.log(this.permalink)


  }

  showPreview($event){

    const reader = new FileReader()

    reader.onload = (e)=>{
      this.imgSrc = e.target.result
    }
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];

  }

}
