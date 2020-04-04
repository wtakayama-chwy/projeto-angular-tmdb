import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/apiService.service';

import { Movie } from './models/movie';
import { SearchMovie } from './models/searchMovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-movies';

  constructor(private _apiService: ApiService){

  }

  listSearchMovies: SearchMovie[];
  ngOnInt(){
    this._apiService.searchMovies()
      .subscribe(data => this.listSearchMovies = data)
  }
  
}
