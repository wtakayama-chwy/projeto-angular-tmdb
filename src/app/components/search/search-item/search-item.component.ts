import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Movies } from 'src/app/shared/models/movies';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() searchMovie: Movies;
  @ViewChild('id') id: any;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
