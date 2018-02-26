import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Technician {
    
    constructor(private http: Http, baseAPIUri: string) {
    }

    getTechnicians = () => {
        return [{"fullname":"Christopher Braddock"},{"fullname":"Francis Field"},{"fullname":"Charlie Field"},{"fullname":"Justin Field"}];
    }
}