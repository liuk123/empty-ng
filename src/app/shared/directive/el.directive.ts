import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[elHost]',
})
export class ElDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}