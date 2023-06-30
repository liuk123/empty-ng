import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Directive({
  selector: '[appSlideItem]'
})
export class SlideItemDirective {
  constructor(public ref: ElementRef) {}
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  ops={
    y:{
      wh: 'height',
      scroll: 'scrollTop',
      xy: 'top'
    },
    x: {
      wh: 'width',
      scroll: 'scrollLeft',
      xy: 'left'
    }
  }
  style={
    x: {
      flexDirection: 'row',
      scrollSnapType: 'x mandatory',
      overflowX: 'auto'
    },
    y: {
      flexDirection: 'column',
      scrollSnapType: 'y mandatory',
      overflowY: 'auto'
    }
  }
  btnType={
    y:['up', 'down'],
    x:['left', 'right'],
  }
  itemStyle={
    x:{
      marginRight: '16px',

      scrollSnapAlign: 'start',
      flexShrink: 0,
      width: '100%',
      height: '100%',
    },
    y:{
      marginBottom: '16px',

      scrollSnapAlign: 'start',
      flexShrink: 0,
      width: '100%',
      height: '100%',
    }
  }
  private timer=null
  @ContentChildren(SlideItemDirective) slides!: QueryList<SlideItemDirective>
  @ViewChild('slideDom', {read: ElementRef}) slideDom: ElementRef

  @Input() xy:'x'|'y' = 'y'
  constructor(private rd:Renderer2) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.slides.forEach(v=>{
      Object.keys(this.itemStyle[this.xy]).forEach(k=>{
        this.rd.setStyle(v.ref.nativeElement, k,this.itemStyle[this.xy][k])
      })
    })
    this.interval(this.scrollPage.bind(this,'r'))
  }
  interval (fn1) {
    this.timer = setTimeout(() => {
      if (this.timer !== null) {
        clearTimeout(this.timer)
        this.timer = null
      }
      fn1()
      this.interval(fn1)
    }, 1000*8)
  }
  mouseEnter(){
    if (this.timer !== null) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
  mouseLeave(){
    if (this.timer == null) {
      this.interval(this.scrollPage.bind(this,'r'))
    }
  }
  scrollPage(direction:'l'|'r'|'b'|'t', op = this.ops[this.xy]){
    let sChildren = this.slides.map(v=>v.ref.nativeElement)
    let scrollTop = this.slideDom.nativeElement[op.scroll]
    let index = 0
    let sum = 0
    for(let i=0,len = sChildren.length; i<len; i++){
      let rect = sChildren[i].getBoundingClientRect()
      if(scrollTop<=sum){
        index = i
        break
      }else{
        sum += rect[op.wh]+16
      }
    }
    if(index+1==sChildren.length){
      sum=0
      this.slideDom.nativeElement.scroll({
        [op.xy]: sum,
      })
    }else{
      if(direction=='r'||direction=='b'){
        let rect = sChildren[index+1].getBoundingClientRect()
        sum += rect[op.wh]+16
      }else if(index!==0){
        let rect = sChildren[index-1].getBoundingClientRect()
        sum-=rect[op.wh]+16 
      }
      this.slideDom.nativeElement.scroll({
        [op.xy]: sum,
        behavior: 'smooth'
      })
    }
    
  }

}
