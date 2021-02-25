import { Component, OnInit } from '@angular/core';

import { NavigationService } from "./../../../core/services/navigation/navigation.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(
    private _navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this._navigationService.setNewNavigation();
  }

}
