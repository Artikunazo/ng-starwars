import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { MovieModel } from './../../models/movie.model';
import { MoviesModel } from './../../models/movies.model';



@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  imagesFilms = {
    'a-new-hope'             : 'https://i.ibb.co/C6kcTHD/a-new-hope.jpg',
    'the-empire-strikes-back': 'https://i.ibb.co/Rj8cCxf/the-empire-strikes-back.jpg',
    'return-of-the-jedi'     : 'https://i.ibb.co/JkTNRPd/return-of-the-jedi.jpg',
    'the-phantom-menace'     : 'https://i.ibb.co/5h5XNdL/the-phantom-menace.jpg',
    'attack-of-the-clones'   : 'https://i.ibb.co/dt01kG8/attack-of-the-clones.jpg',
    'revenge-of-the-sith'    : 'https://i.ibb.co/TR1pvg8/revenge-of-the-sith.jpg',
    'the-force-awakens'      : 'https://i.ibb.co/FKnbq6K/the-force-awakens.jpg'
};
  private baseApiUrl: string = 'https://swapi.dev/api/';
  moviesList = new Subject<MoviesModel[]>();
  movie = new Subject<MovieModel>();

  constructor(private http: HttpClient) {}

  setAllMovies() {
    this.http
      .get<MoviesModel[]>(`${this.baseApiUrl}films/`)
      .subscribe((response) => {
        this.moviesList.next(response['results']);
      });
  }

  setMovie(movieUrl: string) {
    this.http.get<MovieModel>(movieUrl).subscribe((response) => {
      this.movie.next(response);
    });
  }
  
  setMovieByTitle(movieTitle: string) {
    this.http.get<MovieModel>(`${this.baseApiUrl}films/?search=${movieTitle}`).subscribe((response) => {
      this.movie.next(response['results'][0]);
    });
  }

  
  
}
