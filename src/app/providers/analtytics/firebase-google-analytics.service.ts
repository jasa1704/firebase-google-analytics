import * as firebase from "firebase/app";
import { Injectable } from "@angular/core";

/**
 * AnalyticProvider: Proveedor que permitira registrar la data para analitica de la aplicación
 * Consideraciones:  Comando Habilitar debug en Firebase: adb shell setprop debug.firebase.analytics.app com.testerapp
 *                   Comando Deshabilitar debug en Firebase:  adb shell setprop debug.firebase.analytics.app .none.
 */

@Injectable()
export class FirebaseGoogleAnalyticsService {
  constructor() {}
  /**
   * logEvent: Método que permite registrar en Firebase un Evento producido en la aplicación
   * @param {*} eventName
   * @param {*} params
   */

  // prettier-ignore
  public logEvent(eventName, params = {}) {
    firebase.analytics().logEvent(eventName, params);
   }
}
