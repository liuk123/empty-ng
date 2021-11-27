import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[interSection]',
})
export class InterSectionDirective implements OnInit, OnDestroy {

  constructor(
    private el: ElementRef,
    @Inject('INTERSECTIONOBSERVER') private intersectionObserver) {
  }

  ngOnInit():void {
    this.intersectionObserver.observe(this.el.nativeElement)
  }
  ngOnDestroy():void {
    this.intersectionObserver.unobserve(this.el.nativeElement)
  }
}