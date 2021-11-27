import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[lazyImage]',
})
export class LazyImageDirective implements OnInit, OnDestroy {
  @Input() lazyImage: string

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
  loadImage(image){
    image.setAttribute('src', this.lazyImage)
  }
}