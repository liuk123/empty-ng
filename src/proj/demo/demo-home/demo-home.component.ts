import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.less']
})
export class DemoHomeComponent implements OnInit {

  @ViewChild('chart', {static:true}) chartContainer:ElementRef

  data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 }
  ];

  constructor() { }

  ngOnInit(): void {
    const chart = new Chart({
      container: this.chartContainer.nativeElement,
      width : 600,
      height : 300,
      renderer: 'svg'
    })
    chart.data(this.data)
    chart.interval().position('genre*sold').color('genre')
    chart.render()
  }
}
