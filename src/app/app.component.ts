import { Component, AfterViewInit } from '@angular/core';
import { FirebaseGoogleAnalyticsService } from './providers/analtytics/firebase-google-analytics.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'nominatest';
  constructor(private firebaseGoogleAnalyticsService: FirebaseGoogleAnalyticsService) {}
  ngAfterViewInit() {
    firebase.analytics().logEvent('eventname', {
      firsttimeuser: true,
      username: 'nominatest'
    });
  }

  eventosAnlytics() {
    this.firebaseGoogleAnalyticsService.logEvent('pagina_principal_nomina_test', {
      firsttimeuser: true,
      username: 'guardar_nomina'
    });
  }

}
