import { Component, OnInit } from '@angular/core';
import { Parking } from '../../vo/parking'
import { ParkingService } from '../../services/parking.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit {

  parkingData : Parking[];
  displayedColumns: string[] = [ 'sr', 'address', 'isOccupied', 'startTime', 'endTime', 'meterNo', 'gps', 'batteryLife', 'userCode' ]

  // TODO: Get current zipcode from GPS location
  currentZipCode = '32771';

  markers = [];
  zoom = 18
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 35,
    minZoom: 15,
  }

  parkingSearchForm: FormGroup = new FormGroup({
    
  });

  constructor( private parkingService: ParkingService, private activatedRoute: ActivatedRoute ) { 
    console.log( 'Home constructor : ' + JSON.stringify( Auth ) );
  }

  

  ngOnInit(): void {
    
      var code = this.activatedRoute.snapshot.params['code'];
      console.log( 'Area Code : ' + code );
      
      // TODO: Write a code to get Address of Main Parking Office/Site for center location.
      // Modify URL to pass latitude & logitude for the same.

      if ( code )
      {
          this.getParkingDataByCode( code.split(";")[0] )
      }
      else
      {
          this.getParkingData( this.currentZipCode );
      }
      
  }

  populateMarker( data ) {

    var showMap = false

    console.log( 'In populateMarker...start...' + JSON.stringify( data ) );
    
    data.forEach( element => {

      console.log( "Latitude : " + element.meter.location[0] + " Longitude : " + element.meter.location[1]  )
      
        this.markers.push({
            position: {
              lat: element.meter.location[0],
              lng: element.meter.location[1],
            },
            options: { animation: google.maps.Animation.DROP },
            label: element.meter.number,
            title: '' + element.meter.address
          }
        )

         
          if( !showMap )
          {
               navigator.geolocation.getCurrentPosition(position => {
                console.log( 'Current Position >> ' + position );
                this.center = this.markers[0].position
              })
              showMap = true
          }
         
    } );

    console.log( 'In populateMarker...end...' )

  }
  getParkingData( zipcode ): void
  {
      this.parkingService.getParkingDataByZipcode( zipcode ).subscribe( data => {
                  
                this.parkingData = data;
                  console.log( 'Parking data: ' + this.parkingData )

                  //if( this.parkingData && this.parkingData.length > 0 )
                  {
                      console.log('Populating Map Data...START...');
                      this.populateMarker( this.parkingData );
                      console.log('Populating Map Data...END...');
                  }
              },
              error => {
                console.log( 'Error in getParkingDataByCode' + JSON.stringify( error ) )
              }
      )
  }

  getParkingDataByCode( code: string ): void
  {
      this.parkingService.getParkingDataByAreaCode( code ).subscribe( 
                
                  data => {
                    this.parkingData = data;
                    console.log( 'Parking data by code : ' + JSON.stringify( this.parkingData ) )
                    console.log( 'Parking data by code size : ' + this.parkingData.length )
                    console.log( 'Parking data by code size data: ' + data.length )
  
                    //if( this.parkingData && this.parkingData.length > 0 )
                    {
                        console.log('Populating Map Data...START...');
                        this.populateMarker( this.parkingData );
                        console.log('Populating Map Data...END...');
                    }
                },
                error => {
                  console.log( 'Error in getParkingDataByCode' + JSON.stringify( error ) )
                }
        )
  }


  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

}
