import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { DragBaseModule } from '../model/drag-base.module';

@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule extends DragBaseModule {
  dynamicComponents = [Demo1Component,
    Demo2Component];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}