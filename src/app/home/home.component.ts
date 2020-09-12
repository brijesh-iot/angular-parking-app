import { Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { ParkingService } from '../services/parking.service'
import { ParkingMaster } from '../vo/parking-master';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parkingData : ParkingMaster[];
  displayedColumns: string[] = [ 'sr', 'parkingName', 'address', 'gps' ]
  markers = [];
  zoom = 13
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  parkingSearchForm: FormGroup = new FormGroup({
    
  });

  constructor( private service: ParkingService ) { 
    console.log( 'Home constructor : ' + JSON.stringify( Auth ) );
  }

  ngOnInit() 
  {
    console.log( 'Home onInit : ' + JSON.stringify( Auth ) );
    this.populateMarker();
  }

  populateMarker() {

    var masterdata = []
    var defaultZip = 32771
    var showMap = false

 
    this.service.getParkingMasterData( defaultZip ).subscribe( data => {
          
        console.log( 'Parking data: ' + JSON.stringify(data) )
        this.parkingData = data;
        this.markers = []

        if ( data && data.length > 0 )
        {
          data.forEach( element => {

            if( element.location != null && element.location.length > 0 )
            {
              console.log( "Latitude : " + element.latitude + " Longitude : " + element.longitude  )
            
              this.markers.push({
                  position: {
                    lat: element.latitude,
                    lng: element.longitude,
                  },
                  options: { animation: google.maps.Animation.DROP },
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
            }

              
          } );
        }

          
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
