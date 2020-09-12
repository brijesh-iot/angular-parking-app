import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alert } from '../../vo/alert';
import { AlertsService } from '../../services/alerts.service';
import { ActivatedRoute } from '@angular/router';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-devicealerts',
  templateUrl: './devicealerts.component.html',
  styleUrls: ['./devicealerts.component.css']
})
export class DevicealertsComponent implements OnInit {

  alertsData: Alert[];
  displayedColumns: string[] = [ 'sr', 'alertName', 'serialNumber', 'eventName', 'eventState', 'timestamp', 'address', 'zipcode' ]

  constructor( private alertsService: AlertsService, private activatedRoute: ActivatedRoute ) 
  { 
      console.log( 'Home constructor : ' + JSON.stringify( Auth ) );
  }

  alertsSearchForm: FormGroup = new FormGroup({
    
  });

  ngOnInit(): void {
    this.getParkingData();
  }

  getParkingData(): void
  {
      console.log( 'Device Alerts Component -> getParkingData called !' );

      this.alertsService.getAlertData().subscribe( data => {
                  
          this.alertsData = data;
          console.log( 'Alerts data: ' + this.alertsData )

      })
  }

}
