import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isVisibleSubject = new BehaviorSubject<boolean>(true);
  isVisible$ = this.isVisibleSubject.asObservable();
  constructor() {}
  setVisibility(isVisible: boolean) {
    this.isVisibleSubject.next(isVisible);
  }
}
