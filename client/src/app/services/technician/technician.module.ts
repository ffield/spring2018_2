import { Http, HttpModule } from '@angular/http';
import { Technician } from './technician.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function technicianFactory(http: Http) {
    return new Technician(http, 'https://api.spotify.com');
}

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: [{provide: Technician, useFactory: technicianFactory, deps: [Http]}],
    declarations: []
})
export class TechnicianModule { }