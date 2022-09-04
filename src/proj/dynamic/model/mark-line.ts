import { Component } from '@angular/core';
import { MoveService } from '../service/move.service';


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
export class MarkLineComponent{

  lineStyle
  lineStatus
  constructor(moveSrv:MoveService) {
    this.lineStatus = moveSrv.lineStatus
    this.lineStyle = moveSrv.lineStyle
  }

  // 六条线
  lines= ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']
}
