import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

    
  constructor( private _router: Router ) { 

  }

  ngOnInit(): void {
    this._router.navigate(['/parking/getdetails']);
  }

}
