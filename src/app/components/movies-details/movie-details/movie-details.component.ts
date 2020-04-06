import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: any;
  subscribe: Subscription;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute
  ) { }

  movieDetails: any;

  listMovieDetails(movieId){
  this.movieDetails =  this._apiService.getMovieDetails(movieId)
    .then(res => { this.movieDetails = res });
  }

  ngOnInit(): void {
    this.subscribe = this._route.params
      .subscribe((params: any) => {
        this.id = params['query'];
    this.listMovieDetails(this.id);
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
