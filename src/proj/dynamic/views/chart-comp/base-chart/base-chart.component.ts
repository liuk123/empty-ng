import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartType } from 'src/app/shared/directive/g2chart.directive';

@Component({
  selector: 'app-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.less']
})
export class BaseChartComponent implements OnInit {

  @Input() data=null;
  @Input() type: ChartType = 'interval'
  constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("changes",changes)
  // }

  ngOnInit(): void {
  }

}
