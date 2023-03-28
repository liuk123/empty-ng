import { NgModule } from '@angular/core';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { DragBaseModule } from '../model/drag-base.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { LineChartComponent } from './chart-comp/line-chart/line-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitlePanelComponent } from './panel/title-panel/title-panel.component';
import { TabsPanelComponent } from './panel/tabs-panel/tabs-panel.component';
import { MTableComponent } from './list/m-table/m-table.component';
import { TextValueComponent } from './text/text-value/text-value.component';
import { TextValueListComponent } from './text/text-value-list/text-value-list.component';
import { BlankPanelComponent } from './panel/blank-panel/blank-panel.component';
import { TextValueIconComponent } from './text/text-value-icon/text-value-icon.component';
import { ImageComponent } from './text/image/image.component';
import { IconComponent } from './text/icon/icon.component';
import { ButtonComponent } from './buttons/button/button.component';
import { SimpleListComponent } from './list/simple-list/simple-list.component';
import { ForListComponent } from './list/for-list/for-list.component';
import { TemplateValueComponent } from './list/template/template-value/template-value.component';

@NgModule({
  declarations: [
    TemplateValueComponent,
    Demo1Component,
    Demo2Component,
    TabsComponent,
    LineChartComponent,
    TitlePanelComponent,
    TabsPanelComponent,
    MTableComponent,
    TextValueComponent,
    TextValueListComponent,
    BlankPanelComponent,
    TextValueIconComponent,
    ImageComponent,
    IconComponent,
    ButtonComponent,
    SimpleListComponent,
    ForListComponent,
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

    "app-tabs-panel":TabsPanelComponent,
    "app-title-panel":TitlePanelComponent,
    "app-blank-panel": BlankPanelComponent,

    "app-m-table":MTableComponent,
    "app-simple-list": SimpleListComponent,
    "app-for-list": ForListComponent,
    
    "app-text-value": TextValueComponent,
    "app-text-value-list": TextValueListComponent,
    "app-text-value-icon": TextValueIconComponent,

    "app-image": ImageComponent,
    "app-icon": IconComponent,
    "app-button": ButtonComponent,

    "app-template-value":TemplateValueComponent
  }

  constructor() {
    super();
  }
}