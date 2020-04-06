import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  subscribe: Subscription;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute
   ) { }

  searchedMovies: Movie[];
  
  searchMovie(searchField: string) {   
      this._apiService
        .searchMovies(searchField)
        .then(res => this.searchedMovies = res.results);
  }

  ngOnInit(): void {
    this.subscribe = this._route.params
      .subscribe((params:any) => {
        this.query = params['query'];
    })

    if (this.query) { // Avoid to render searchcomponent with no query
    this._apiService
        .searchMovies(this.query)
        .then(res => this.searchedMovies = res.results);
    }
  }  

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}


