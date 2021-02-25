import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesService } from './services/movies/movies.service';
import { CharactersService } from './services/characters/characters.service';
import { HomeworldService } from './services/homeworld/homeworld.service';
import { NavigationService } from './services/navigation/navigation.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    MoviesService,
    CharactersService,
    HomeworldService,
    NavigationService
  ]
})
export class CoreModule { }
