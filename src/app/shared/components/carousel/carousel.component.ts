import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
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
      marginRight: '16px'
    },
    y:{
      marginBottom: '16px'
    }
  }
  @Input() xy:'x'|'y' = 'y'
  constructor() { }

  ngOnInit(): void {
  }

  scrollPage(ev:any,direction:'l'|'r'|'b'|'t', op = this.ops[this.xy]){
    let e = ev.target
    
    
    while(e && e.nodeName!=='BUTTON'){
      e=e.parentNode
    }
    let sildesDom = e.parentNode.nextElementSibling
    let sChildren = sildesDom.children
    let scrollTop = sildesDom[op.scroll]
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
    }else{
      if(direction=='r'||direction=='b'){
        let rect = sChildren[index+1].getBoundingClientRect()
        sum += rect[op.wh]+16
      }else if(index!==0){
        let rect = sChildren[index-1].getBoundingClientRect()
        sum-=rect[op.wh]+16 
      }
    }
    sildesDom.scroll({
      [op.xy]: sum,
      behavior: 'smooth'
    })
  }

}
