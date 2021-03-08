import { Directive, Input, ViewContainerRef } from '@angular/core';
import { ViewItem } from '../model/drag.model';

@Directive({
  selector: '[elHost]',
})
export class ElDirective {
  @Input() elHost: ViewItem
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}