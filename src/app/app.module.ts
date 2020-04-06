import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field'; 3
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
//My Components & Services
import { MoviesComponent } from './components/movies-now-playing/movies.component';
import { MovieItemComponent } from './components/movies-now-playing/movie-item/movie-item.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviePopupComponent } from './components/movie-popup/movie-popup.component';
import { MovieDetailsComponent } from './components/movies-details/movie-details/movie-details.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { MovieRecommendationsComponent } from './components/movie-recommendations/movie-recommendations.component';
import { MovieItemRecommendationsComponent } from './components/movie-recommendations/movie-item-recommendations/movie-item-recommendations.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    MoviesComponent,
    MovieItemComponent,
    SearchItemComponent,
    routingComponents,
    HomePageComponent,
    MoviePopupComponent,
    MovieDetailsComponent,
    MovieDetailsPageComponent,
    MovieRecommendationsComponent,
    MovieItemRecommendationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    ApiService,
    MatDialog,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ MoviePopupComponent ]
})
export class AppModule { }
