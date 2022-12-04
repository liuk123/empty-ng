import { NgModule } from '@angular/core';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { DragBaseModule } from '../model/drag-base.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitlePanelComponent } from './panel/title-panel/title-panel.component';
import { TabsPanelComponent } from './panel/tabs-panel/tabs-panel.component';
import { IndexListComponent } from './list/index-list/index-list.component';

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    TabsComponent,
    LineChartComponent,
    TitlePanelComponent,
    TabsPanelComponent,
    IndexListComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class ViewsModule extends DragBaseModule {
  dynamicComponents = {
    "app-demo1": Demo1Component,
    "app-demo2": Demo2Component,
    "app-tabs": TabsComponent,
    "app-line-chart": LineChartComponent,

    "app-index-list":IndexListComponent,
    "app-tabs-panel":TabsPanelComponent,
    "app-title-panel":TitlePanelComponent

  }

  constructor() {
    super();
  }
}