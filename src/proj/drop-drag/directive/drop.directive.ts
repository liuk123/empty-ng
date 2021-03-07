import { Directive, HostListener, ElementRef, Renderer2, Input, ViewContainerRef } from '@angular/core';
import { ViewService } from '../service/views.service';

@Directive({
  selector: '[ins-droppable]',
})
export class DropDirective {
  _dropId
  @Input('ins-droppable') set dropId(val) {
    this._dropId = val
  }
  get dropId() {
    return this._dropId
  }
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private srv: ViewService) {
  }
}