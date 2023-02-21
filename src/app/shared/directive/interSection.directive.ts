import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Directive({
  selector: '[interSection]',
})
export class InterSectionDirective implements OnInit, OnDestroy {

  _interSection = null
  @Input() set interSection(val){
    if(ConfigService.Config.isBrowser){
      this._interSection = val
      if(val){
        val.forEach(v=>{
          let tem = this.el.nativeElement.getElementsByClassName(val)
          Array.from(tem).forEach((val:any)=>{
            if(this.data==null){
              this.data = []
            }
            if(!this.data.some(v=>v==val)){
              this.data.push(val)
            }
          })
        })
        if(this.data?.length>0){
          this.data.forEach(d=>{
            if(d.hasAttribute('data-source')){
              this.intersectionObserver.observe(d)
            }
          })
        }
      }else{
        this.intersectionObserver.observe(this.el.nativeElement)
      }
    }   
  }
  data = null
  constructor(
    private el: ElementRef,
    @Inject('INTERSECTIONOBSERVER') private intersectionObserver) {
  }

  ngOnInit():void {
     
  }
  ngOnDestroy():void {
    if(ConfigService.Config.isBrowser){
      if(this.data){
        this.data.forEach(d=>{
          this.intersectionObserver.unobserve(d)
        })
        this.data = null
      }else{
        this.intersectionObserver.unobserve(this.el.nativeElement)
      }
    }
  }
}