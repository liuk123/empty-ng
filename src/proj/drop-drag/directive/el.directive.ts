import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[elHost]',
})
export class ElDirective {
  @Input() elHost:string
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}