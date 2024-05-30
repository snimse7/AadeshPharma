import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get<any>('assets/demo/data/countries.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

    getStates(){
        return this.http.get<any>('assets/demo/data/states.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

    getCities(){
        return this.http.get<any>('assets/demo/data/cities.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
    
}
