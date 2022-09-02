import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DragItem } from './drag.model';

@Component({
  selector: 'app-mark-line',
  template: `
  <div class="mark-line">
    <div
      class="line"
      *ngFor="let line of lines"
      >
    </div>
  </div>
  `,
  styles: [`
  .line {
    background: #59c7f9;
    position: absolute;
    z-index: 1000;
  }
  .xline {
      width: 100%;
      height: 1px;
  }
  .yline {
      width: 1px;
      height: 100%;
  }
  `]
})
export class MarkLineComponent implements OnInit, OnDestroy {

 
  // 默认最小吸附距离
  private readonly DEFAULT_LINE_DIFF= 11

  @Input() siblingComp: DragItem[]
  @Input() curComp: DragItem
  width = 100
  height = 100
  oLeft = 0
  oTop = 0

  constructor() {}

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {}

  /**
   * 隐藏线
   */
  hideLine(){
    Object.keys(this.lineStatus).forEach(line => {
        this.lineStatus[line] = false
    })
  }

  /**
   * 显示线
   */
  showLine(){
    this.hideLine()
    const curBottom=this.oTop+this.height, curRight=this.oLeft+this.width
    const curCompHalfwidth = this.width/2
    const curCompHalfheight = this.height/2
    this.siblingComp.forEach(comp=>{
      const top=comp.styles.top,left=comp.styles.left
      const bottom=this.oTop+comp.styles.height,right=this.oLeft+comp.styles.width
      const compHalfwidth = comp.styles.width/2
      const compHalfheight = comp.styles.height/2

      const conditions = [
        {
          isNearly: this.isNearly(this.oTop, top),
          line: 'xt',
          dragShift: top,
          lineShift: top,
          type: "top",
        },
        {
          isNearly: this.isNearly(curBottom, top),
          line: 'xt',
          dragShift: top - this.height,
          lineShift: top,
          type: "top",
        },
        {
          isNearly: this.isNearly(this.oTop + curCompHalfheight, top + compHalfheight),
          line: 'xc',
          dragShift: top + compHalfheight - curCompHalfheight,
          lineShift: top + compHalfheight,
          type: "top",
        },
        {
          isNearly: this.isNearly(this.oTop, bottom),
          line: 'xb',
          dragShift: bottom,
          lineShift: bottom,
          type: "top",
        },
        {
          isNearly: this.isNearly(this.oTop + this.height, bottom),
          line: 'xb',
          dragShift: bottom - this.height,
          lineShift: bottom,
          type: "top",
        },
  
        {
          isNearly: this.isNearly(this.oLeft, left),
          line: 'yl',
          dragShift: left,
          lineShift: left,
          type: "left",
        },
        {
          isNearly: this.isNearly(this.oLeft+this.width, left),
          line: 'yl',
          dragShift: left-this.width,
          lineShift: left,
          type: "left",
        },
        {
          isNearly: this.isNearly(this.oLeft+curCompHalfwidth, left+compHalfwidth),
          line: 'yc',
          dragShift: left+compHalfwidth-curCompHalfwidth,
          lineShift: left+compHalfwidth,
          type: "left",
        },
        {
          isNearly: this.isNearly(this.oLeft, right),
          line: 'yr',
          dragShift: right,
          lineShift: right,
          type: "left",
        },
        {
          isNearly: this.isNearly(this.oLeft+this.width, right),
          line: 'yr',
          dragShift: right-this.width,
          lineShift: right,
          type: "left",
        }
      ]
      conditions.forEach(item=>{
        if(item.isNearly){
          // 修改当前组件位移
          if(item.type=="left"){
            this.oLeft = item.lineShift
          }else{
            this.oTop = item.lineShift
          }
        }
      })
      
    })
  }
  isNearly(dragValue, targetValue) {
    return Math.abs(dragValue - targetValue) <= this.DEFAULT_LINE_DIFF
  }

  // 六条线
  lines= ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']
  lineStatus= {
    xt: false,
    xc: false,
    xb: false,
    yl: false,
    yc: false,
    yr: false,
  }
}
