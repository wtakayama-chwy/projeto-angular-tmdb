import { Component } from '@angular/core';
import { FilmeService } from './filmes/filme/filme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Always define type 
  title = 'App-movies';
  filmes: Object[] = [];
  // Run at the beggining 
  // constructor(filmeService: FilmeService){
  //   filmeService
  //     .listMoviesNowPlaying()
  //     .subscribe(filmes => this.filmes = filmes)
  // }

}
