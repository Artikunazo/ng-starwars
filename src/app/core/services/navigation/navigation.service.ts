import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navCount = new Subject<number>();
  realcount = 0;
  constructor() { }

  setNewNavigation(){
    setTimeout(() => {
      this.navCount.next(this.realcount += 1);
    }, 0);
  }
}
