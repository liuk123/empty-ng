import { Directive, Input, ViewContainerRef } from '@angular/core';
import { DragItem } from '../model/drag.model';

@Directive({
  selector: '[elHost]',
})
export class ElDirective {
  @Input() elHost:string
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}