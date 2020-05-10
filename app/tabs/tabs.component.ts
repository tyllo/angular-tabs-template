import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TabsService } from './tabs.service';

import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  providers: [
    TabsService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  constructor(public tabsService: TabsService) {
  }

  trackByFn(index: number, item: TabComponent) {
    return item.id;
  }
}
