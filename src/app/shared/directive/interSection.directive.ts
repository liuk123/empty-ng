import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/biz/services/common/config.service';

@Directive({
  selector: '[interSection]',
})
export class InterSectionDirective implements OnInit, OnDestroy {

  constructor(
    private el: ElementRef,
    @Inject('INTERSECTIONOBSERVER') private intersectionObserver) {
  }

  ngOnInit():void {
    if(ConfigService.Config.isBrowser){
      this.intersectionObserver.observe(this.el.nativeElement)
    }    
  }
  ngOnDestroy():void {
    if(ConfigService.Config.isBrowser){
      this.intersectionObserver.unobserve(this.el.nativeElement)
    }
  }
}