import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []; // Now playing

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
  
    this.apiService
      .getMoviesNowPlaying()
      .then(res => this.movies = res.results)
  }
}
