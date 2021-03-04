import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharacterModel } from 'src/app/core/models/character.model';

import { MoviesService } from '@core/services/movies/movies.service';
import { CharactersService } from '@core/services/characters/characters.service';
import { NavigationService } from '@core/services/navigation/navigation.service';
import { MovieModel } from '@core/models/movie.model';
import { TitleFriendlyPipe } from '@shared/pipes/title-friendly/title-friendly.pipe';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieModel;
  movieUrl = '';
  charactersMovie: CharacterModel[] = [];
  movieCover: string;

  constructor(
    private route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _charactersService: CharactersService,
    private _navigationService: NavigationService,
    private titleFriendlyPipe: TitleFriendlyPipe
  ) {
    this.charactersMovie = [];
   }

  ngOnInit(): void {
    this._navigationService.setNewNavigation();
    this.setMovieDetails();
  }

  setMovieDetails() {
    // Get URL params
    this.route.params.subscribe((params: Params) => {
      // Get movie by title
      this._moviesService.setMovieByTitle(this.getRealFilmTitle(params.title));
    });

    this._moviesService.movie.subscribe((response: MovieModel) => {
      this.movie = response;

      // Get cover film image
      this.movieCover = this.titleFriendlyPipe
        .transform(this.movie?.title)
        .toLowerCase();
      this.movieCover = this.getMovieCover(this.movieCover);

      // Get characters details
      if (this.charactersMovie.length === 0) {
        for (const element of this.movie?.characters) {
          this._charactersService.setCharacterDetailsByUrl(element);
        }
      }
    });

    // Save caracters on component variable
    this._charactersService.characters.subscribe((response) => {
      this.charactersMovie = response;
    });
  }

  getMovieCover(title: string) {
    return this._moviesService.imagesFilms[title];
  }

  getRealFilmTitle(title: string) {
    return title.split('-').join(' ');
  }
}
