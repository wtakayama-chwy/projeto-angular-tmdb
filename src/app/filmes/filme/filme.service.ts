import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API: string = 'https://api.themoviedb.org/3/';
const key: string = 'api_key=32b2538fae9d6a2e14d1539dde85893f';
const basicQuery: string = '&language=pt-BR&page=1';

@Injectable({ providedIn : 'root' }) // Any component can hava acces to http
export class FilmeService {

    constructor(private http: HttpClient){ // Private - No one is allowed to acces http, besides the class

    }
    // Must return just the list
    listMoviesNowPlaying(){
        return this.http
            .get<Object[]>(API + '/movie/now_playing?' + key + basicQuery) // Assuring to return a OBJECT ARRAY 
    }
    
        
}