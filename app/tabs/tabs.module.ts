import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import { TabContentComponent } from './tab-content.component';
import { TabComponent } from './tab.component';
import { TabTitleComponent } from './tab-title.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabContentComponent,
    TabComponent,
    TabTitleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TabsComponent,
    TabContentComponent,
    TabComponent,
    TabTitleComponent,
  ],
})
export class TabsModule {
}
