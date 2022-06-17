import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CharacterModel } from '@core/models/character.model';
import { CommonService } from "@core/services/common/common.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseApiUrl = 'https://swapi.dev/api/';
  characters = new Subject<CharacterModel[]>();
  charactersArray = [];
  characterSingular = new Subject<CharacterModel>();

  constructor(
    private http: HttpClient,
    private _commonService: CommonService
  ) { }

  setCharacterDetailsByUrl(characterUrl: string) {
    this.charactersArray = [];
    return this.http.get<CharacterModel>(characterUrl).subscribe((response) => {
      this.charactersArray.push(response);
      this.characters.next(this.charactersArray);
    });
  }

  getCharacterDetailsByName(characterName: string) {
    return this._commonService.getItemByName('people', characterName)
    .pipe(
      map (response => {
        const { results } = response as any;
        this.characterSingular.next(results[0]);
        return results[0];
      })
    )
    // .subscribe((character: CharacterModel) => {
    //   this.characterSingular.next(character['results'][0]);
    // });
  }
}
