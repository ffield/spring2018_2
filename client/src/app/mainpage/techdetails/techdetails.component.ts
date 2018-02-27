import { Input, Component, OnInit } from '@angular/core';
import { Technician } from '../../services/technician/technician.service';
import { TechDetail} from '../../types/techdetail';

@Component({
  selector: 'app-techdetails',
  templateUrl: './techdetails.component.html',
  styleUrls: ['./techdetails.component.css']
})
export class TechDetailsComponent implements OnInit {


  private _tech : TechDetail;


  @Input()
  set tech(tech: TechDetail) {
    this._tech = (tech);
  }

  get tech(): TechDetail { return this._tech; }


  constructor(private _apiSvc: Technician) {

   }


  ngOnInit() {
      console.log("been happened");
  }


  setTech(technician: TechDetail) {
    this.tech = technician;
  }

}