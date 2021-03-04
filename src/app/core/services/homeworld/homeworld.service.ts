import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { HomeworldModel } from '@core/models/homeworld.model';
import { CommonService } from '@core/services/common/common.service';

@Injectable({
  providedIn: 'root',
})
export class HomeworldService {
  private baseApiUrl = 'https://swapi.dev/api/';
  homeworldCharacter = new Subject<HomeworldModel>();
  homeworld = new Subject<HomeworldModel[]>();

  constructor(
    private http: HttpClient,
    private _commonService: CommonService
  ) {}

  setHomeWorldCharacter(homeworldUrl: string) {
    return this.http.get<HomeworldModel>(homeworldUrl).subscribe((response) => {
      this.homeworldCharacter.next(response);
    });
  }

  setHomeworldDetails(homeworld: string) {
    this._commonService.getItemByName('planets', homeworld)
    .subscribe((homeworld: HomeworldModel) => {
      this.homeworld.next(homeworld['results'][0]);
    });
  }
}
