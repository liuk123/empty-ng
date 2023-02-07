import { Inject, Injectable, OnInit } from "@angular/core";
import { merge, Observable, Subject } from "rxjs";
import { distinctUntilChanged, filter, map, repeatWhen, switchMap, take, takeUntil, tap } from "rxjs/operators";
import { MOUSE_MOVE, MOUSE_UP } from "../model/drag-move";
import { DragItem } from "../model/drag.model";

@Injectable()
export class MoveService {
  // 默认移动距离
  private readonly DEFAULT_MOVE = 4
  // 默认放大缩小距离
  private readonly DEFAULT_POINT_MOVE = 4
  // 默认最小吸附距离
  private readonly DEFAULT_LINE_DIFF = 6

  static siblingComp: DragItem[]
  static curComp: DragItem = null
  get dragStyles() {
    return MoveService.curComp?.styles
  }

  static switchCurComp(curComp, siblingComp) {
    MoveService.curComp = curComp
    MoveService.siblingComp = siblingComp
  }
  private static compDown$ = new Subject<MouseEvent>()
  private static pointerDown$ = new Subject<{ e: MouseEvent, p: string }>()
  private unsub$ = new Subject<null>()

  static emitCompDown(data) {
    MoveService.compDown$.next(data)
  }
  static emitPointerDown(data) {
    MoveService.pointerDown$.next(data)
  }
  constructor(
    @Inject(MOUSE_MOVE) private readonly mousemove$: Observable<any>,
    @Inject(MOUSE_UP) private readonly mouseup$: Observable<any>,
  ) {
  }

  startMove() {
    let lossmove$ = this.mousemove$.pipe(
      takeUntil(merge(this.mouseup$, this.unsub$)),
      repeatWhen(() => MoveService.compDown$),
    )
    let lossPointerMove$ = this.mousemove$.pipe(
      takeUntil(merge(this.mouseup$, this.unsub$)),
      repeatWhen(() => MoveService.pointerDown$),
    )

    let initX: number,
      initY: number,
      left: number,
      top: number,
      alignX: number,
      alignY:number
    let oWidth: number,
      oHeight: number,
      hasT: Boolean,
      hasB: Boolean,
      hasL: Boolean,
      hasR: Boolean

    MoveService.compDown$.pipe(takeUntil(this.unsub$)).subscribe(v => {
      initX = v.clientX
      initY = v.clientY
      if (this.dragStyles?.status) {
        v.stopPropagation()
        v.preventDefault()
      }
      left = this.dragStyles?.left
      top = this.dragStyles?.top
      alignX = this.dragStyles?.alignX=='left'?1:-1
      alignY = this.dragStyles?.alignY=='top'?1:-1
    })

    MoveService.compDown$.pipe(
      take(1),
      switchMap(() => lossmove$),
      map((v: MouseEvent) => ({
        x: Math.floor((v.clientX - initX) / this.DEFAULT_MOVE) * this.DEFAULT_MOVE * alignX,
        y: Math.floor((v.clientY - initY) / this.DEFAULT_MOVE) * this.DEFAULT_MOVE * alignY
      })),
      distinctUntilChanged((p: any, q: any) => p.x == q.x && p.y == q.t),
    ).subscribe(v => {
      this.dragStyles.left = left + v.x
      this.dragStyles.top = top + v.y
      let isDownward = this.dragStyles?.top - initY > 0
      let isRightward = this.dragStyles?.left - initX > 0

      this.showLineMove(isDownward, isRightward)
    })

    MoveService.pointerDown$.pipe(takeUntil(this.unsub$)).subscribe(({ e, p }) => {
      initX = e.clientX
      initY = e.clientY
      e.stopPropagation()
      e.preventDefault()
      left = this.dragStyles?.left
      top = this.dragStyles?.top
      oWidth = this.dragStyles?.width
      oHeight = this.dragStyles?.height
      alignX = this.dragStyles?.alignX=='left'?1:-1
      alignY = this.dragStyles?.alignY=='top'?1:-1

      if(alignX==-1){
        hasL = !/l/.test(p)
        hasR = !/r/.test(p)
      }else{
        hasL = /l/.test(p)
        hasR = /r/.test(p)
      }
      if(alignY==-1){
        hasT = !/t/.test(p)
        hasB = !/b/.test(p)
      }else{
        hasT = /t/.test(p)
        hasB = /b/.test(p)
      }
      // hasT = /t/.test(p)
      // hasB = /b/.test(p)
      // hasL = /l/.test(p)
      // hasR = /r/.test(p)
    })

    MoveService.pointerDown$.pipe(
      take(1),
      switchMap(() => lossPointerMove$),
      map((v: MouseEvent) => ({
        x: Math.floor((v.clientX - initX) / this.DEFAULT_POINT_MOVE) * this.DEFAULT_POINT_MOVE * alignX,
        y: Math.floor((v.clientY - initY) / this.DEFAULT_POINT_MOVE) * this.DEFAULT_POINT_MOVE * alignY
      })),
      distinctUntilChanged((p: any, q: any) => p.x == q.x && p.y == q.t),
    ).subscribe(v => {
      this.dragStyles.width = oWidth + (hasL ? -v.x : hasR ? v.x : 0)
      this.dragStyles.height = oHeight + (hasT ? -v.y : hasB ? v.y : 0)
      this.dragStyles.left = left + (hasL ? v.x : 0)
      this.dragStyles.top = top + (hasT ? v.y : 0)

      let isDownward = this.dragStyles?.top - initY > 0
      let isRightward = this.dragStyles?.left - initX > 0

      this.showLineSize(isDownward, isRightward)
    })
    this.mouseup$.pipe(takeUntil(this.unsub$)).subscribe(v => {
      this.hideLine()
    })
  }

  destory(){
    this.unsub$.next()
    this.unsub$.complete()
  }
  /**
   * 隐藏线
   */
  hideLine() {
    Object.keys(MoveService.lineStatus).forEach(line => {
      MoveService.lineStatus[line] = false
    })
  }

  /**
   * 显示线
   * curY - startY > 0, curX - startX > 0
   */
  showLineMove(isDownward, isRightward) {

    const curCompStyle = this.getComponentRotatedStyle(MoveService.curComp.styles)
    const curCompHalfwidth = curCompStyle.width / 2
    const curCompHalfheight = curCompStyle.height / 2

    this.hideLine()
    const needToShow = []
    MoveService.siblingComp.forEach(comp => {
      const compStyles = this.getComponentRotatedStyle(comp.styles)
      if(compStyles.alignX == curCompStyle.alignX && compStyles.alignY == curCompStyle.alignY){
        const { top, left, bottom, right } = compStyles
        const compHalfheight = compStyles.height / 2
        const compHalfwidth = compStyles.width / 2

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
            isNearly: this.isNearly(curCompStyle.top + curCompHalfheight, top + compHalfheight),
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
            dragShift: left - curCompStyle.width,
            lineShift: left,
            type: "left",
          },
          {
            isNearly: this.isNearly(curCompStyle.left + curCompHalfwidth, left + compHalfwidth),
            line: 'yc',
            dragShift: left + compHalfwidth - curCompHalfwidth,
            lineShift: left + compHalfwidth,
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
            dragShift: right - curCompStyle.width,
            lineShift: right,
            type: "left",
            // sizeDragShift: curCompStyle.left - right + curCompStyle.right
          }
        ]
        
        conditions.forEach(item => {
          if (item.isNearly) {
            MoveService.curComp.styles[item.type] = item.dragShift
            needToShow.push(item.line)
            MoveService.lineStyle[item.line][item.type] = item.lineShift
          }
        })
      }
    })
    if (needToShow.length > 0) {
      this.chooseTheTureLineMove(needToShow, isDownward, isRightward)
    }
  }
  showLineSize(isDownward, isRightward) {

    const curCompStyle = this.getComponentRotatedStyle(MoveService.curComp.styles)
    // const curCompHalfwidth = curCompStyle.width / 2
    // const curCompHalfheight = curCompStyle.height / 2

    this.hideLine()
    const needToShow = []
    MoveService.siblingComp.forEach(comp => {
      const compStyles = this.getComponentRotatedStyle(comp.styles)
      if(compStyles.alignX == curCompStyle.alignX && compStyles.alignY == curCompStyle.alignY){
        const { top, left, bottom, right } = compStyles
        // const compHalfheight = compStyles.height / 2
        // const compHalfwidth = compStyles.width / 2

        const conditions = [
          {
            isNearly: this.isNearly(curCompStyle.top, top),
            line: 'xt',
            lineShift: top,
            type: "top",
            // 大小修改时
            height: curCompStyle.height + curCompStyle.top - top,
            sizeDragShift: top
          },
          {
            isNearly: this.isNearly(curCompStyle.bottom, top),
            line: 'xt',
            lineShift: top,
            type: "top",
            height: curCompStyle.height + top - curCompStyle.bottom,
          },
          // {
          //   isNearly: this.isNearly(curCompStyle.top + curCompHalfheight, top + compHalfheight),
          //   line: 'xc',
          //   lineShift: top + compHalfheight,
          //   type: "top",
          // },
          {
            isNearly: this.isNearly(curCompStyle.top, bottom),
            line: 'xb',
            lineShift: bottom,
            type: "top",
            height: curCompStyle.height + curCompStyle.top - bottom,
            sizeDragShift: bottom
          },
          {
            isNearly: this.isNearly(curCompStyle.bottom, bottom),
            line: 'xb',
            lineShift: bottom,
            type: "top",
            height: curCompStyle.height - curCompStyle.bottom + bottom,
            sizeDragShift: curCompStyle.bottom - curCompStyle.height
          },

          {
            isNearly: this.isNearly(curCompStyle.left, left),
            line: 'yl',
            lineShift: left,
            type: "left",
            width: curCompStyle.width + curCompStyle.left - left,
            sizeDragShift: left
          },
          {
            isNearly: this.isNearly(curCompStyle.right, left),
            line: 'yl',
            lineShift: left,
            type: "left",
            width: curCompStyle.width + left - curCompStyle.right
          },
          // {
          //   isNearly: this.isNearly(curCompStyle.left + curCompHalfwidth, left + compHalfwidth),
          //   line: 'yc',
          //   lineShift: left + compHalfwidth,
          //   type: "left",
          // },
          {
            isNearly: this.isNearly(curCompStyle.left, right),
            line: 'yr',
            lineShift: right,
            type: "left",
            width: curCompStyle.width + curCompStyle.left - right,
            sizeDragShift: right
          },
          {
            isNearly: this.isNearly(curCompStyle.right, right),
            line: 'yr',
            lineShift: right,
            type: "left",
            width: curCompStyle.width - curCompStyle.right + right,
          }
        ]
        
        conditions.forEach(item => {
          if (item.isNearly) {
            let k = item.type=='top'? 'height': 'width'
            if(item[k]!==undefined){
              MoveService.curComp.styles[k] = item[k]
            }
            if(item.sizeDragShift!==undefined){
              MoveService.curComp.styles[item.type] = item.sizeDragShift
            }
            needToShow.push(item.line)
            MoveService.lineStyle[item.line][item.type] = item.lineShift
          }
        })
      }
    })
    if (needToShow.length > 0) {
      this.chooseTheTureLineSize(needToShow, isDownward, isRightward)
    }
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
  chooseTheTureLineMove(needToShow, isDownward, isRightward) {
    // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
    // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示
    if (isRightward) {
      if (needToShow.includes('yr')) {
        MoveService.lineStatus.yr = true
      } else if (needToShow.includes('yc')) {
        MoveService.lineStatus.yc = true
      } else if (needToShow.includes('yl')) {
        MoveService.lineStatus.yl = true
      }
    } else {
      if (needToShow.includes('yl')) {
        MoveService.lineStatus.yl = true
      } else if (needToShow.includes('yc')) {
        MoveService.lineStatus.yc = true
      } else if (needToShow.includes('yr')) {
        MoveService.lineStatus.yr = true
      }
    }

    if (isDownward) {
      if (needToShow.includes('xb')) {
        MoveService.lineStatus.xb = true
      } else if (needToShow.includes('xc')) {
        MoveService.lineStatus.xc = true
      } else if (needToShow.includes('xt')) {
        MoveService.lineStatus.xt = true
      }
    } else {
      if (needToShow.includes('xt')) {
        MoveService.lineStatus.xt = true
      } else if (needToShow.includes('xc')) {
        MoveService.lineStatus.xc = true
      } else if (needToShow.includes('xb')) {
        MoveService.lineStatus.xb = true
      }
    }
  }
  chooseTheTureLineSize(needToShow, isDownward, isRightward) {
    // 如果鼠标向右移动 则按从右到左的顺序显示竖线 否则按相反顺序显示
    // 如果鼠标向下移动 则按从下到上的顺序显示横线 否则按相反顺序显示
    if (isRightward) {
      if (needToShow.includes('yr')) {
        MoveService.lineStatus.yr = true
      }
      if (needToShow.includes('yc')) {
        MoveService.lineStatus.yc = true
      }
      if (needToShow.includes('yl')) {
        MoveService.lineStatus.yl = true
      }
    } else {
      if (needToShow.includes('yl')) {
        MoveService.lineStatus.yl = true
      }
      if (needToShow.includes('yc')) {
        MoveService.lineStatus.yc = true
      }
      if (needToShow.includes('yr')) {
        MoveService.lineStatus.yr = true
      }
    }

    if (isDownward) {
      if (needToShow.includes('xb')) {
        MoveService.lineStatus.xb = true
      }
      if (needToShow.includes('xc')) {
        MoveService.lineStatus.xc = true
      }
      if (needToShow.includes('xt')) {
        MoveService.lineStatus.xt = true
      }
    } else {
      if (needToShow.includes('xt')) {
        MoveService.lineStatus.xt = true
      }
      if (needToShow.includes('xc')) {
        MoveService.lineStatus.xc = true
      }
      if (needToShow.includes('xb')) {
        MoveService.lineStatus.xb = true
      }
    }
  }

  static lineStatus = {
    xt: false,
    xc: false,
    xb: false,
    yl: false,
    yc: false,
    yr: false,
  }
  static lineStyle = {
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