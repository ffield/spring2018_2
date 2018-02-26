import { Component, OnInit } from '@angular/core';
import { Technician } from '../services/technician/technician.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainPageComponent implements OnInit {

  technicians : any[] = [ ];

  constructor(private _apiSvc: Technician) {
   }

  ngOnInit() {
  	this.technicians = this._apiSvc.getTechnicians();
  }

}