import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: 'filme.component.html',
  styleUrls: ['filme.component.css']
})
export class FilmeComponent {
 
  @Input() url = '';  

}
