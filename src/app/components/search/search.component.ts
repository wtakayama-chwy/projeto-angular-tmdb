import { Component, OnInit, OnChanges } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private apiService: ApiService,
   ) { }
  
  searchWord: string;
  searchedMovies: Movie[];
    
  searchMovie(searchField: string) {
    if (searchField) {
      this.apiService
        .searchMovies(searchField)
        .then(res => this.searchedMovies = res.results);
    }
  }

  ngOnInit(): void {
  }
}


