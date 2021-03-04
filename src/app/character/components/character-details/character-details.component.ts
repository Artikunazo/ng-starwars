import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from '@core/services/movies/movies.service';
import { CharactersService } from '@core/services/characters/characters.service';
import { HomeworldService } from '@core/services/homeworld/homeworld.service';
import { NavigationService } from '@core/services/navigation/navigation.service';
import { CharacterModel } from '@core/models/character.model';
import { HomeworldModel } from '@core/models/homeworld.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  characterSingular: CharacterModel;
  relatedFilmsCharacter = [];
  homeworldCharacter: HomeworldModel;
  homeworldDetails: HomeworldModel[] = [];
  showFilms = false;

  constructor(
    private route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _charactersService: CharactersService,
    private _homeworldService: HomeworldService,
    private _navigationService: NavigationService
  ) {  }

  ngOnInit(): void {
    this._navigationService.setNewNavigation();
    this.getCharacterDetails();

  }

  getCharacterDetails() {
    this.route.params.subscribe((param: Params) => {
      // Get singular character details
      this._charactersService.getCharacterDetailsByName(param.name);
      this._charactersService.characterSingular.subscribe((response) => {
        this.characterSingular = response;

        // Get films related
        for (const element of this.characterSingular?.films) {
          if (this.relatedFilmsCharacter.length === this.characterSingular.films.length){
            break;
          }
          this._moviesService.setMovie(element);
          this._moviesService.movie.subscribe((response) => {
              this.relatedFilmsCharacter?.push(response.title);
              this.relatedFilmsCharacter = [...new Set(this.relatedFilmsCharacter)];
            });
        }

        // Get homeworld of the character
        this._homeworldService.setHomeWorldCharacter(this.characterSingular.homeworld);
        this._homeworldService.homeworldCharacter.subscribe(response => {
          this.homeworldCharacter = response;

          // Get Homeworld info
          this._homeworldService.setHomeworldDetails(this.homeworldCharacter.name);
          this._homeworldService.homeworld.subscribe(response => {
            this.homeworldDetails = response;
          });
        });
      });
    });
  }
}
