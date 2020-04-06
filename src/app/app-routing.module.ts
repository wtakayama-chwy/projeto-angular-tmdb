import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PageNotFound } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'busca', component: SearchPageComponent },
  { path: 'busca/:query', component: SearchPageComponent },
  { path: 'busca/:query/details', component : MovieDetailsPageComponent },
  { path: "**", component: PageNotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ SearchPageComponent, PageNotFound, MovieDetailsPageComponent ];