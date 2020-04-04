import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMovies : string;
  searchedMovies: Movie[];
  key: string = '32b2538fae9d6a2e14d1539dde85893f';
  // QUERY MUST RECEIVE A VALUE FROM INPUT FIELD
  // query = this.searchMovies; 
  language: string = 'pt-BR';

  searchMovie(searchField: string) {
    if (searchField) {
      this.searchMovies = searchField;
      console.log(this.searchMovies);

      // Now Playing Fetch & Stores inside movies array
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=${this.language}&query=${this.searchMovies}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(res => this.searchedMovies = res.results)
      }
    }
    constructor() { }
  
    ngOnInit(): void {
  }
}
