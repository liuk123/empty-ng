import { Directive, Input, ViewContainerRef } from '@angular/core';
import { DragItem, ViewItem } from '../model/drag.model';

@Directive({
  selector: '[elHost]',
})
export class ElDirective {
  @Input() elHost: DragItem
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}