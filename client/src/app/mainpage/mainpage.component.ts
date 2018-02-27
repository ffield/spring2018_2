import { Component, OnInit } from '@angular/core';
import { Technician } from '../services/technician/technician.service';
import { TechDetail} from '../types/techdetail';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainPageComponent implements OnInit {

  technicians : TechDetail[] = [ ];
  lat: Number = 51.678418;
  lng: Number = 7.809007;
  isVisible : boolean = false;
  selectedTech: TechDetail;

  constructor(private _apiSvc: Technician) {
   }


  ngOnInit() {
  	this.technicians = this._apiSvc.getTechnicians();
  	// for (let i = 0; i < this.technicians.length; i++) {
  	// 	this.technicians[i].lat = Number(this.technicians[i].lat)
  	// 	this.technicians[i].lng = Number(this.technicians[i].lng)
  	// }
  		this.lat = this.technicians[0].lat;
  		this.lng = this.technicians[0].lng;
      console.log(this.technicians);

  }

  displayDetails(tech) {
      this.selectedTech = tech;
  		this.isVisible = !this.isVisible;
  }

}