import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Alert } from '../vo/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor( private _http: HttpClient ) { }

  getAlertData(): Observable<Alert[]>
  {
    let url = environment.alertsApiServer + "/alerts"
    
    console.log( "Calling getAlertData with url : " + url );

    return this._http.get<Alert[]>( url );
  }
}
