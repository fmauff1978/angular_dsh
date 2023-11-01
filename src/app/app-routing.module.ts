import { NewPostComponent } from './posts/new-post/new-post.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DshComponent } from './dsh/dsh.component';

const routes: Routes = [

  {path:'', component: DshComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'posts', component: AllPostComponent},
  {path:'posts/new', component: NewPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
