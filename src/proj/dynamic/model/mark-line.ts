import { Component, Input } from '@angular/core';
import { MoveService } from '../service/move.service';


@Component({
  selector: 'app-mark-line',
  template: `
  <div class="mark-line">
    <div
      class="line"
      *ngFor="let line of lines"
      [style.display]="lineStatus[line]?'block':'none'"
      [style.left.px]="lineStyle[line]?.left + data.left||0"
      [style.top.px]="lineStyle[line]?.top + data.top||0"
      [style.width]="lineStyle[line]?.width"
      [style.height]="lineStyle[line]?.height"
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

  lineStyle=MoveService.lineStyle
  lineStatus= MoveService.lineStatus
  constructor() {}
  @Input() data = null

  // 六条线
  lines= ['xt', 'xc', 'xb', 'yl', 'yc', 'yr']
}
