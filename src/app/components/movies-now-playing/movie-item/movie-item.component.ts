import { Component, OnInit, Input, Output  } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MatDialog } from '@angular/material/dialog';
import { MoviePopupComponent } from '../../movie-popup/movie-popup.component';
import { ApiService } from 'src/app/services/api.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
  ) 
  { }

  @Input() movie: Movie;
  @Output() movieObject: any; // Movie type
  @Output() dialogConfig: any ;

  ngOnInit(): void {
  }

  moviesRecommendation: [] = [];

  openModal(movie){

    this.movieObject = this.apiService.getMovieClicked(movie);

    let recommendObj = this.apiService
      .getMoviesRecommendations(this.movieObject.id)
      .then(res => this.moviesRecommendation = res.results)
    
    console.log(recommendObj);
    console.log(this.moviesRecommendation);


    let dialogRef = this.dialog.open(MoviePopupComponent, {
      data: {
        id: movie.id,
        original_title: movie.original_title,
        release_date: movie.release_date,      
        vote_average: movie.vote_average,
        backdrop_path: movie.backdrop_path,
        overview: movie.overview
      }         
    })

    dialogRef.afterClosed().subscribe(result => {
      movie.original_title = result;
    });
  }
}