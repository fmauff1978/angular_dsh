
import { AngularFireModule, FirebaseApp} from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DshComponent } from './dsh/dsh.component';
import { FirebaseAppModule} from '@angular/fire/app';


import { CategoriesComponent } from './categories/categories.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DshComponent,
    CategoriesComponent,
    AllPostComponent,
    NewPostComponent
  ],


  imports: [
    
   AngularFireModule.initializeApp(environment.firebase),    
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
     AngularEditorModule,
     ReactiveFormsModule,
    ToastrModule.forRoot(),  
    BrowserModule, AppRoutingModule, 
    CommonModule,
    FormsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),   
    provideMessaging(() => getMessaging()),
    provideStorage(()=>getStorage())


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




