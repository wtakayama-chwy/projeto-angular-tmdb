import { Component, OnInit, Input, Output  } from '@angular/core';
import { Movies } from 'src/app/shared/models/movies';
import { MatDialog } from '@angular/material/dialog';
import { MoviePopupComponent } from '../../movie-popup/movie-popup.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) 
  { }

  @Input() movie: Movies;
  @Output() dialogConfig: any ;

  ngOnInit(): void {
  }

  openModal(movie){
    // Passing the data to use data injection from ANGULAR MATERIAL modal dialog
    let dialogRef = this.dialog.open(MoviePopupComponent, {
      data: {
        id: movie.id,
        original_title: movie.original_title,
        release_date: movie.release_date,      
        vote_average: movie.vote_average,
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
      }         
    })

    dialogRef.afterClosed().subscribe(result => {
      movie.original_title = result;
    });
  }
}