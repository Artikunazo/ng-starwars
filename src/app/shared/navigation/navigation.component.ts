import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services/navigation/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navCount = 0;
  constructor(
    private _navigationService: NavigationService
  ) {
  }

  ngOnInit(): void {
    this._navigationService.navCount.subscribe(response => {
      this.navCount = response;
    });
  }

}
