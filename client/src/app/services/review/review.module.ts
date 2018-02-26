import { Http, HttpModule } from '@angular/http';
import { Review } from './review.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export function reviewFactory(http: Http) {
    return new Review(http, 'https://api.spotify.com');
}

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: [{provide: Review, useFactory: reviewFactory, deps: [Http]}],
    declarations: []
})
export class ReviewModule { }