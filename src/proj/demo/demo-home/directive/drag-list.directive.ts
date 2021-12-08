import { AfterViewInit, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-drag-list]',
})
export class DragListDirective {
  data = []
  constructor() {
  }
}