import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'src/app/shared/directive/g2chart.directive';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent implements OnInit {

  @Input() data = [];
  @Input() axis = ''
  @Input() type: ChartType = 'interval'
  constructor() { }

  ngOnInit(): void {
  }

}
