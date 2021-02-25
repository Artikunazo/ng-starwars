import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { CharacterModel } from './../../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseApiUrl: string = 'https://swapi.dev/api/';
  characters = new Subject<CharacterModel[]>();
  charactersArray = [];
  characterSingular = new Subject<CharacterModel>();

  constructor(
    private http: HttpClient
  ) { }

  setCharacterDetailsByUrl(characterUrl: string) {
    this.charactersArray = [];
    return this.http.get<CharacterModel>(characterUrl).subscribe((response) => {
      this.charactersArray.push(response);
      this.characters.next(this.charactersArray);
    });
  }

  getCharacterDetailsByName(characterName: string) {
    return this.http
      .get<CharacterModel>(`${this.baseApiUrl}people/?search=${characterName}`)
      .subscribe((response) => {
        this.characterSingular.next(response['results'][0]);
      });
  }
}
