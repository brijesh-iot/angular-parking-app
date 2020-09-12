import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parking } from '../vo/parking'
import { ParkingMaster } from '../vo/parking-master'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor( private _http: HttpClient ) { }

  getParkingData(): Observable<Parking[]>
  {
    let url = environment.parkingApiServer + "/parking"
    
    console.log( "Calling getParkingData with url : " + url );

    return this._http.get<Parking[]>( url );
  }

  getParkingDataByZipcode( zipcode ): Observable<Parking[]>
  {
    let url = environment.parkingApiServer + "/parking/zipcode/"+zipcode;
    
    console.log( "Calling getParkingData with url : " + url );

    return this._http.get<Parking[]>( url );
  }

  getParkingDataByAreaCode( code: string ): Observable<Parking[]>
  {
    let url = environment.parkingApiServer + "/parking/code/" + code
    
    console.log( "Calling getParkingDataByAreaCode with url : " + url );

    return this._http.get<Parking[]>( url );
  }

  getParkingMasterData( zipcode: number ): Observable<ParkingMaster[]>
  {
    let url = environment.parkingMasterApiServer + "/parkingmaster/zipcode/" + zipcode
    
    console.log( "Calling getParkingMasterData with url : " + url );

    return this._http.get<ParkingMaster[]>( url );
  }

}
