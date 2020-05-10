import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { TabComponent } from './tab.component';

@Injectable()
export class TabsService {
  private tabs: TabComponent[] = [];

  private active: TabComponent;

  tabs$ = new BehaviorSubject(this.tabs);

  active$ = new BehaviorSubject(this.active);

  add(tab: TabComponent) {
    this.tabs = this.tabs.concat(tab);

    if (!this.active) {
      this.setActive(tab);
    }

    this.tabs$.next(this.tabs);
  }

  remove(tab: TabComponent) {
    const index = this.tabs.indexOf(tab);
    const tabs = this.tabs.slice();
    tabs.splice(index, 1);

    this.tabs = tabs;

    if (this.active === tab) {
      this.setActive(this.tabs[0]);
    }

    this.tabs$.next(this.tabs);
  }

  isActive(tab: TabComponent) {
    return this.active === tab;
  }

  setActive(tab: TabComponent) {
    this.active = tab;
    this.active$.next(tab);
  };
}
