import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MOUSE_MOVE } from './drag-move';
import { DragItem } from './drag.model';

@Component({
  selector: 'app-mark-line',
  template: `
  <div class="mark-line">
    <div
      class="line"
      *ngFor="let line of lines"
      [style.display]="lineStatus[line]?'block':'none'"
      [style.left.px]="this.lineStyle[line]?.left"
      [style.top.px]="this.lineStyle[line]?.top"
      [style.width]="this.lineStyle[line]?.width"
      [style.height]="this.lineStyle[line]?.height"
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
  `]
})
export class MarkLineComponent implements OnInit, OnDestroy {

 
  // 默认最小吸附距离
  private readonly DEFAULT_LINE_DIFF= 4

  @Input() siblingComp: DragItem[]
  @Input() curComp: DragItem

  constructor(
    @Inject(MOUSE_MOVE) private readonly mousemove$: Observable<any>
    ) {}

  ngOnInit(): void {
    this.mousemove$.subscribe(v=>{
      if(this.curComp){
        this.showLine(this.curComp.styles.isDownward,this.curComp.styles.isRightward)
      }
    })
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
   * curY - startY > 0, curX - startX > 0
   */
  showLine(isDownward, isRightward){

    const curCompStyle = this.getComponentRotatedStyle(this.curComp.styles)
    const curCompHalfwidth = curCompStyle.width/2
    const curCompHalfheight = curCompStyle.height/2

    this.hideLine()

    this.siblingComp.forEach(comp=>{
      const compStyles = this.getComponentRotatedStyle(comp.styles)
      const {top, left, bottom, right} = compStyles
      const compHalfheight = compStyles.height/2
      const compHalfwidth = compStyles.width/2

      const conditions = [
        {
          isNearly: this.isNearly(curCompStyle.top, top),
          line: 'xt',
          dragShift: top,
          lineShift: top,
          type: "top",
        },
        {
          isNearly: this.isNearly(curCompStyle.bottom, top),
          line: 'xt',
          dragShift: top - curCompStyle.height,
          lineShift: top,
          type: "top",
        },
        {
          isNearly: this.isNearly(curCompStyle.top +curCompHalfheight, top + compHalfheight ),
          line: 'xc',
          dragShift: top + compHalfheight - curCompHalfheight,
          lineShift: top + compHalfheight,
          type: "top",
        },
        {
          isNearly: this.isNearly(curCompStyle.top, bottom),
          line: 'xb',
          dragShift: bottom,
          lineShift: bottom,
          type: "top",
        },
        {
          isNearly: this.isNearly(curCompStyle.bottom, bottom),
          line: 'xb',
          dragShift: bottom - curCompStyle.height,
          lineShift: bottom,
          type: "top",
        },
  
        {
          isNearly: this.isNearly(curCompStyle.left, left),
          line: 'yl',
          dragShift: left,
          lineShift: left,
          type: "left",
        },
        {
          isNearly: this.isNearly(curCompStyle.right, left),
          line: 'yl',
          dragShift: left-curCompStyle.width,
          lineShift: left,
          type: "left",
        },
        {
          isNearly: this.isNearly(curCompStyle.left+curCompHalfwidth, left+compHalfwidth),
          line: 'yc',
          dragShift: left+compHalfwidth-curCompHalfwidth,
          lineShift: left+compHalfwidth,
          type: "left",
        },
        {
          isNearly: this.isNearly(curCompStyle.left, right),
          line: 'yr',
          dragShift: right,
          lineShift: right,
          type: "left",
        },
        {
          isNearly: this.isNearly(curCompStyle.right, right),
          line: 'yr',
          dragShift: right-curCompStyle.width,
          lineShift: right,
          type: "left",
        }
      ]
      const needToShow = []
      conditions.forEach(item=>{
        if(item.isNearly){
          this.curComp.styles[item.type] = item.dragShift
          needToShow.push(item.line)
          this.lineStyle[item.line][item.type] = item.lineShift
        }
      })
      if(needToShow.length>0){
        this.chooseTheTureLine(needToShow, isDownward, isRightward)
      }
      console.log(this.lineStatus)
    })
  }
  isNearly(dragValue, targetValue) {
    return Math.abs(dragValue - targetValue) <= this.DEFAULT_LINE_DIFF
  }
  getComponentRotatedStyle(style) {
    style = { ...style }
    // if (style.rotate != 0) {
    //     const newWidth = style.width * this.util.cos(style.rotate) + style.height * this.util.sin(style.rotate)
    //     const diffX = (style.width - newWidth) / 2 // 旋转后范围变小是正值，变大是负值
    //     style.left += diffX
    //     style.right = style.left + newWidth

    //     const newHeight = style.height * this.util.cos(style.rotate) + style.width * this.util.sin(style.rotate)
    //     const diffY = (newHeight - style.height) / 2 // 始终是正
    //     style.top -= diffY
    //     style.bottom = style.top + newHeight

    //     style.width = newWidth
    //     style.height = newHeight
    // } else {
        style.bottom = style.top + style.height
        style.right = style.left + style.width
    // }

    return style
  }
  chooseTheTureLine(needToShow, isDownward, isRightward) {
    // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
    // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示
    if (isRightward) {
        if (needToShow.includes('yr')) {
            this.lineStatus.yr = true
        } else if (needToShow.includes('yc')) {
            this.lineStatus.yc = true
        } else if (needToShow.includes('yl')) {
            this.lineStatus.yl = true
        }
    } else {
        if (needToShow.includes('yl')) {
            this.lineStatus.yl = true
        } else if (needToShow.includes('yc')) {
            this.lineStatus.yc = true
        } else if (needToShow.includes('yr')) {
            this.lineStatus.yr = true
        }
    }

    if (isDownward) {
        if (needToShow.includes('xb')) {
            this.lineStatus.xb = true
        } else if (needToShow.includes('xc')) {
            this.lineStatus.xc = true
        } else if (needToShow.includes('xt')) {
            this.lineStatus.xt = true
        }
    } else {
        if (needToShow.includes('xt')) {
            this.lineStatus.xt = true
        } else if (needToShow.includes('xc')) {
            this.lineStatus.xc = true
        } else if (needToShow.includes('xb')) {
            this.lineStatus.xb = true
        }
    }
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
  lineStyle={
    xt: {
      width: '100%',
      height: '1px'
    },
    xc: {
      width: '100%',
      height: '1px'
    },
    xb: {
      width: '100%',
      height: '1px'
    },
    yl: {
      width: '1px',
      height: '100%'
    },
    yc: {
      width: '1px',
      height: '100%'
    },
    yr: {
      width: '1px',
      height: '100%'
    },
  }
}
