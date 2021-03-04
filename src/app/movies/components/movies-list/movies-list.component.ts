import { Component, OnInit } from '@angular/core';

import { MoviesService } from '@core/services/movies/movies.service';
import { NavigationService } from '@core/services/navigation/navigation.service';
import { MoviesModel } from '@core/models/movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  moviesList: MoviesModel[] = [];
  sortedMovies: MoviesModel[];
  sortOriginalMovies: MoviesModel[];

  constructor(
    private _moviesService: MoviesService,
    private _navigationService: NavigationService
  ) {
    this.sortedMovies = this.moviesList.slice();
  }

  ngOnInit(): void {
    this._navigationService.setNewNavigation();
    this.setAllMovies();
  }

  setAllMovies() {
    this._moviesService.setAllMovies();
    this._moviesService.moviesList.subscribe((response) => {
      this.moviesList = response;
      this.sortedMovies = this.moviesList.slice();
      this.sortOriginalMovies = this.moviesList.slice();
    });
  }

  getMovieCover(title: string) {
    return this._moviesService.imagesFilms[title];
  }

  sortMovies(sortBy: string, isAsc: boolean) {
    this.sortedMovies = this.moviesList.sort((a, b) => {
      switch (sortBy) {
        case 'episode':
          return this.compare(a['episode_id'], b['episode_id'], isAsc);
        case 'date':
          return this.compare(a['release_date'], b['release_date'], isAsc);
        case 'original':
          return this.compare(a['release_date'], b['release_date'], true);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
