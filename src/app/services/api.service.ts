import { Injectable } from '@angular/core';
import { SearchMovie } from '../models/searchMovie';
import { Movie } from '../models/movie';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  language: string = 'language=pt-BR';
  key: string = 'api_key=32b2538fae9d6a2e14d1539dde85893f';
  public moviesData: SearchMovie[]
  nowPlayingUrl : string = `https://api.themoviedb.org/3/movie/now_playing?${this.key}&${this.language}&page=1`;

  constructor(private http: HttpClient) { }

  // NOW PLAYING MOVIES - Testing observable & Http - not working yet
  /*getMovie(): Observable<Movie[]>{
    return this.http
      .get<Movie[]>(this.nowPlayingUrl);
  }

  // SEARCH MOVIES - Subscribe must be called on method
  searchMovies(query: string): Observable<SearchMovie[]>{
    return this.http
      .get<SearchMovie[]>(this.searchUrl)
  }

  */
  getMoviesNowPlaying(){
    return fetch(this.nowPlayingUrl)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  searchMovies(query: string){
    let searchWord : string;
    let searchedMovies: Movie[];

    let searchUrl : string = 
    `https://api.themoviedb.org/3/search/movie?${this.key}&${this.language}&query=${query}&page=1&include_adult=false`;
    
    return fetch(searchUrl)
      .then(response => response.json())
      // .then(res => { searchedMovies = res.results, console.log(searchedMovies) })
      .catch(error => console.log(error))
  }

  async getMoviesRecommendations(id){
    
    let recommendationsUrl : string = await
    `https://api.themoviedb.org/3/movie/${id}/recommendations?${this.key}&${this.language}&page=1&include_adult=false`;
    
    return fetch(recommendationsUrl)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getMovieClicked(movie){
    let movieObject = movie;
    return movieObject
  }

}
