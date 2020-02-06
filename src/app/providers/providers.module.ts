import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* PIPES DEL MODULO */
import { FirebaseGoogleAnalyticsService } from './analtytics/firebase-google-analytics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FirebaseGoogleAnalyticsService,
  ]
})
export class ProvidersModule { }
