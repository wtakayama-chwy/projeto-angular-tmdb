import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item-recommendations',
  templateUrl: './movie-item-recommendations.component.html',
  styleUrls: ['./movie-item-recommendations.component.css']
})
export class MovieItemRecommendationsComponent implements OnInit {

  @Input() movieRecommendations: any;

  constructor() { }

  ngOnInit(): void {
  }
}
