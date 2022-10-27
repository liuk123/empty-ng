import { NgModule } from '@angular/core';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { DragBaseModule } from '../model/drag-base.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    TabsComponent,
    LineChartComponent,
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
  }

  constructor() {
    super();
  }
}