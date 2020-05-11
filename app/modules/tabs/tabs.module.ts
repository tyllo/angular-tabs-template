import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './components/tabs.component';
import { TabContentComponent } from './components/tab-content.component';
import { TabComponent } from './components/tab.component';
import { TabTitleComponent } from './components/tab-title.component';

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
