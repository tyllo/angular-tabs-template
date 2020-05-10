import {
  Component,
  OnDestroy,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { TabsService } from './tabs.service';

import { TabContentComponent } from './tab-content.component';
import { TabTitleComponent } from './tab-title.component';

let id = 0;

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnDestroy {
  readonly id = id++;

  @ViewChild('title', { static: true })
  readonly titleTemplate: TemplateRef<TabTitleComponent>;

  @ViewChild('content', { static: true })
  readonly contentTemplate: TemplateRef<TabContentComponent>;

  get active(): boolean {
    return this.tabsService.isActive(this);
  }

  constructor(private tabsService: TabsService) {
    tabsService.add(this);
  }

  ngOnDestroy() {
    this.tabsService.remove(this);
  }
}
