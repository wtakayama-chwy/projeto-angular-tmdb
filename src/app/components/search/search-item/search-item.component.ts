import { Component, OnInit, Input } from '@angular/core';
import { SearchMovie } from 'src/app/models/searchMovie';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() searchMovie: SearchMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
