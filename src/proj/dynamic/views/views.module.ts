import { NgModule } from '@angular/core';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { DragBaseModule } from '../model/drag-base.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { BaseChartComponent } from './chart-comp/base-chart/base-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsPanelComponent } from './container/tabs-panel/tabs-panel.component';
import { TableComponent } from './text/table/table.component';
import { ImageComponent } from './text/image/image.component';
import { IconComponent } from './text/icon/icon.component';
import { ButtonComponent } from './text/button/button.component';
import { AComponent } from './text/a/a.component';
import { HeaderComponent } from './text/header/header.component';
import { DivComponent } from './text/div/div.component';
import { TextComponent } from './text/text/text.component';

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    TabsComponent,
    BaseChartComponent,
    TabsPanelComponent,
    TableComponent,
    ImageComponent,
    IconComponent,
    ButtonComponent,
    AComponent,
    HeaderComponent,
    DivComponent,
    TextComponent,
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

    "app-tabs-panel":TabsPanelComponent,

    "app-image": ImageComponent,
    "app-icon": IconComponent,
    "app-button": ButtonComponent,
    "app-base-chart": BaseChartComponent,
    "app-table":TableComponent,
    "app-header": HeaderComponent,
    "app-a": AComponent,
    "app-div": DivComponent,
    "app-text": TextComponent

  }

  constructor() {
    super();
  }
}