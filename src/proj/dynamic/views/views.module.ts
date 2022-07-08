import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { DragBaseModule } from '../model/drag-base.module';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    TabsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule extends DragBaseModule {
  dynamicComponents = {
    "app-demo1": Demo1Component,
    "app-demo2": Demo2Component,
    "app-tabs": TabsComponent,
  }

  constructor() {
    super();
  }
}