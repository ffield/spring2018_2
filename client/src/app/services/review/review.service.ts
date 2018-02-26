import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Review {
    
    constructor(private http: Http, baseAPIUri: string) {
    }

    getReviews = () => {
        return [{"username":"cbraddock"}];
    }
}