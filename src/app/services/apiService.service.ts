import { Injectable } from '@angular/core';
import { SearchMovie } from '../models/searchMovie';
import { Movie } from '../models/movie';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchOption=[]
  public moviesData: SearchMovie[]
  searchUrl : string = 'https://api.themoviedb.org/3/search/movie?api_key=32b2538fae9d6a2e14d1539dde85893f&language=pt-BR&query=coringa&page=1&include_adult=false'
  nowPlayingUrl : string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=32b2538fae9d6a2e14d1539dde85893f&language=pt-BR&page=1';

  constructor(private http: HttpClient) { }

  // NOW PLAYING MOVIES
  getMovie(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.nowPlayingUrl);
  }
  
  // SEARCH MOVIES
  searchMovies(): Observable<SearchMovie[]>{
    return this.http.get<SearchMovie[]>(this.searchUrl);
  }
}
