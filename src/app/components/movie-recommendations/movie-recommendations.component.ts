import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-recommendations',
  templateUrl: './movie-recommendations.component.html',
  styleUrls: ['./movie-recommendations.component.css']
})
export class MovieRecommendationsComponent implements OnInit {

  @Input() id: any;
  subscribe: Subscription;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute,
  ) { }

  moviesRecommendations: any;

  listMoviesRecommendations(movieId){
    this.moviesRecommendations =  this._apiService.getMoviesRecommendations(movieId)
      .then(res => { this.moviesRecommendations = res.results, console.log(this.moviesRecommendations) });
    }

  ngOnInit(): void {
    this.subscribe = this._route.params
    .subscribe((params: any) => {
      this.id = params['query'];
    this.listMoviesRecommendations(this.id);
    })
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
