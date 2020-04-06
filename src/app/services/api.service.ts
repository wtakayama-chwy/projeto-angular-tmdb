import { Injectable } from '@angular/core';
import { SearchMovie } from '../models/searchMovie';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApiService {

  language: string = 'language=pt-BR';
  key: string = 'api_key=32b2538fae9d6a2e14d1539dde85893f';
  public moviesData: SearchMovie[]
  nowPlayingUrl: string = `https://api.themoviedb.org/3/movie/now_playing?${this.key}&${this.language}&page=1`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

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
      .catch(error => console.log(error));
  }

  searchMovies(query: string){

    const searchUrl: string = 
    `https://api.themoviedb.org/3/search/movie?${this.key}&${this.language}&query=${query}&page=1&include_adult=false`;
    
    return fetch(searchUrl)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  async getMoviesRecommendations(id){
    
  const recommendationsUrl: string = await
    `https://api.themoviedb.org/3/movie/${id}/recommendations?${this.key}&${this.language}&page=1&include_adult=false`;
    
    return fetch(recommendationsUrl)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  async getMovieDetails(id){

    const detailsUrl: string = await
    `https://api.themoviedb.org/3/movie/${id}?${this.key}&${this.language}`

    return fetch(detailsUrl)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  getMovieClicked(movie){
    const movieObject = movie;
    return movieObject;
  }
}
