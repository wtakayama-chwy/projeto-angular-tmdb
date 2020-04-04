import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { ApiService } from './services/apiService.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[]; // Now playing

  constructor() { }

  ngOnInit() {
    this.movies = [];

    // Now Playing Fetch & Stores inside movies array
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=32b2538fae9d6a2e14d1539dde85893f&language=pt-BR&page=1')
      .then(response => response.json())
      .then(res => this.movies = res.results);
}

}
