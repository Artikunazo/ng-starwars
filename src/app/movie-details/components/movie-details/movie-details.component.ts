import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterModel } from 'src/app/core/models/character.model';

import { MoviesService } from '../../../core/services/movies/movies.service';
import { CharactersService } from '../../../core/services/characters/characters.service';
import { NavigationService } from '../../../core/services/navigation/navigation.service';
import { MovieModel } from './../../../core/models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieModel;
  movieTitle: string = '';
  movieUrl: string = '';
  charactersMovie: CharacterModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _charactersService: CharactersService,
    private _navigationService: NavigationService
  ) {
    this.charactersMovie = [];
  }

  ngOnInit(): void {
    this._navigationService.setNewNavigation();
    this.setMovieDetails();
  }

  setMovieDetails() {
    //Get URL params
    this.route.params.subscribe((params: Params) => {
      this.movieTitle = this.getRealFilmTitle(params.title);
    });

    //Get movie by title
    this._moviesService.setMovieByTitle(this.movieTitle);
    this._moviesService.movie.subscribe((response) => {
      this.movie = response;

      //Get characters details
      for(let element of this.movie?.characters) {
        if(this.charactersMovie.length === this.movie.characters.length){
          break;
        }
        this._charactersService.setCharacterDetailsByUrl(element);
      };
    });

    //Save caracters on component variable
    this._charactersService.characters.subscribe((response) => {
      this.charactersMovie = response;
    });
  }

  getMovieCover(title: string){
    return this._moviesService.imagesFilms[title];
  }

  getRealFilmTitle(title: string){
    return title.split('-').join(' ');;
  }
}
