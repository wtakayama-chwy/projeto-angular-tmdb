import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Components 
import { DummyComponent } from './dummy/dummy.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SearchComponent } from './components/search/search.component';
// Modules
import { FilmesModule } from './filmes/filmes.module';
// Services
import { DataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    SearchComponent,
    MoviesComponent,
    MovieItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FilmesModule,
    HttpClientModule,
    MatAutocompleteModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
