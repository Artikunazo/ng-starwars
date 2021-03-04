import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { HomeworldModel } from '@core/models/homeworld.model';

@Injectable({
  providedIn: 'root',
})
export class HomeworldService {
  private baseApiUrl: string = 'https://swapi.dev/api/';
  homeworldCharacter = new Subject<HomeworldModel>();
  homeworld = new Subject<HomeworldModel[]>();

  constructor(private http: HttpClient) {}

  setHomeWorldCharacter(homeworldUrl: string) {
    return this.http.get<HomeworldModel>(homeworldUrl).subscribe((response) => {
      this.homeworldCharacter.next(response);
    });
  }

  setHomeworldDetails(homeworld: string) {
    this.http
      .get<HomeworldModel>(`${this.baseApiUrl}planets/?search=${homeworld}`)
      .subscribe((response) => {
        this.homeworld.next(response['results'][0]);
      });
  }
}
