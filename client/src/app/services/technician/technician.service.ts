import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { TechDetail } from '../../types/techdetail';

@Injectable()
export class Technician {
    
    constructor(private http: Http, baseAPIUri: string) {
    }

    getTechnicians = () => {
        let a : TechDetail = 
        {name:"Christopher Braddock",
        username:"cbraddock",
        address: "14 Shipley Road",
        lat:39.763572,
        lng:-75.515917,
        service: "Guitar Teacher",
        biography:"Played guitar for 20 years. Super dope at it.",
        imageURI:""
    }
    	let b: TechDetail = 
    	{name:"Francis Field",
        username:"ffield",
        address: "2413 W 17th St.",
        lat:39.762777,
        lng:-75.572132,
        service: "Guitar Technician",
        biography:"Proficient in guitar tech. Specialiing in cheap mobile setups",
        imageURI:""
    }

    let final : TechDetail[] = [ ];
    final[0] = a;
    final[1] = b;
    return final;
    }
}