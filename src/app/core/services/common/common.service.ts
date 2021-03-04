import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseApiUrl: string = 'https://swapi.dev/api/';

  constructor(
    private http: HttpClient
  ) { }

  sendRequest(params: string){
    return this.http.get(`${this.baseApiUrl}${params}`);
  }

  getAllItems(type: string){
    return this.sendRequest(`${type}/`);
  }

  getItemByName(type: string, name: string) {
    return this.sendRequest(`${type}/?search=${name}`);
  }
  
}
