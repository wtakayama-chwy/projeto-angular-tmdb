import { Component, OnInit } from '@angular/core';
import { Movies } from '../../shared/models/movies';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movies[] = []; // Now playing

  constructor(private _apiService: ApiService) { }
  
  ngOnInit(): void {
    this._apiService
      .getMoviesNowPlaying()
      .subscribe(res => this.movies = res['results']);
  }
}
