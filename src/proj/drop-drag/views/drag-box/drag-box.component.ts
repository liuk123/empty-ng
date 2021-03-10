import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { fromEvent, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-drag-box',
  templateUrl: './drag-box.component.html',
  styleUrls: ['./drag-box.component.less'],
})
export class DragBoxComponent implements OnInit {

  @Input() active = true
  width=100
  height=100
  
  unsubscribable:Unsubscribable
  constructor(
    private el: ElementRef,
    private rd: Renderer2) { }

  ngOnInit(): void {
  }

  pointDown(e,p){
    e.stopPropagation()
    e.preventDefault()
    const moveEvent$ = fromEvent(e.target,'mousemove')
    this.unsubscribable = moveEvent$.subscribe((v:MouseEvent)=>{
      this.width = this.width + v.clientX - e.clientX
      this.height = this.height + v.clientY - e.clientY
    })
  }
  pointUp(e){
    e.stopPropagation()
    e.preventDefault()
    if(this.unsubscribable){
      this.unsubscribable.unsubscribe()
      this.unsubscribable=null
    }
  }
  pointLeave(e){
    e.stopPropagation()
    e.preventDefault()
    if(this.unsubscribable){
      this.unsubscribable.unsubscribe()
      this.unsubscribable=null
    }
  }

  pointStyle=[{
    name:'t',
    style:{
      left:'50%',
      top:'-10px',
      marginLeft: '-10px'
    }
  },{
    name:'r',
    style:{
      right:'-10px',
      top:'50%',
      marginTop: '-10px'
    }
  },{
    name:'b',
    style:{
      left:'50%',
      bottom:'-10px',
      marginLeft: '-10px'
    }
  },{
    name:'l',
    style:{
      left:'-10px',
      top:'50%',
      marginTop: '-10px'
    }
  },{
    name:'lt',
    style:{
      left:'-10px',
      top:'-10px',
    }
  },{
    name:'rt',
    style:{
      right:'-10px',
      top:'-10px',
    }
  },{
    name:'lb',
    style:{
      left:'-10px',
      bottom:'-10px',
    }
  },{
    name:'rb',
    style:{
      right:'-10px',
      bottom:'-10px',
    }
  }]
}
