import { NgModule } from "@angular/core";
import { FilmeComponent } from "./filme/filme.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ FilmeComponent ],
    imports: [ MatButtonModule, MatIconModule, MatCardModule ],
    exports: [ FilmeComponent ]
})

export class FilmesModule {}

