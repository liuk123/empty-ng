import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartType } from 'src/app/shared/directive/g2chart.directive';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit {

  @Input() data=null;
  @Input() type: ChartType = 'interval'
  constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("changes",changes)
  // }

  ngOnInit(): void {
  }

}
