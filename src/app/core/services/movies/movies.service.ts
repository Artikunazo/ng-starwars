import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { CommonService } from '@core/services/common/common.service';
import { MovieModel } from '@core/models/movie.model';
import { MoviesModel } from '@core/models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  imagesFilms = {
    'a-new-hope': 'https://i.ibb.co/C6kcTHD/a-new-hope.jpg',
    'the-empire-strikes-back':
      'https://i.ibb.co/Rj8cCxf/the-empire-strikes-back.jpg',
    'return-of-the-jedi': 'https://i.ibb.co/JkTNRPd/return-of-the-jedi.jpg',
    'the-phantom-menace': 'https://i.ibb.co/5h5XNdL/the-phantom-menace.jpg',
    'attack-of-the-clones': 'https://i.ibb.co/dt01kG8/attack-of-the-clones.jpg',
    'revenge-of-the-sith': 'https://i.ibb.co/TR1pvg8/revenge-of-the-sith.jpg',
    'the-force-awakens': 'https://i.ibb.co/FKnbq6K/the-force-awakens.jpg',
  };
  moviesList = new Subject<MoviesModel[]>();
  movie = new Subject<MovieModel>();

  constructor(
    private http: HttpClient,
    private _commonService: CommonService
  ) {}

  setAllMovies() {
    this._commonService
      .getAllItems('films')
      .subscribe((movies: MoviesModel[]) => {
        this.moviesList.next(movies['results']);
      });
  }

  setMovie(movieUrl: string) {
    this.http.get<MovieModel>(movieUrl).subscribe((movie) => {
      this.movie.next(movie);
    });
  }

  setMovieByTitle(movieTitle: string) {
    this._commonService.getItemByName('films', movieTitle)
    .subscribe((movies: MovieModel) => {
      this.movie.next(movies['results'][0]);
    });
  }
}
