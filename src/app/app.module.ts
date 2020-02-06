import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import * as firebase from 'firebase/app';
import { ProvidersModule } from './providers/providers.module';

firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProvidersModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
