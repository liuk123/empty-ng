import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';

@Directive({
  selector: '[g2chart]'
})
export class G2chartDirective implements OnInit{
  @Input() g2chart: ChartType = 'interval'
  @Input() position = ''
  _data = []
  @Input() set data(val){
    if(val){
      this._data = val
      if(this.chart){
        this.chart.changeData(val)
      }
    }
  }
  get data(){
    return this._data
  }
  chart: Chart
  constructor(
    private ref: ElementRef) {}

  ngOnInit(){
    this.initChart()
  }
  initChart(){
    if(this.chart){return null}
    const ele = this.ref.nativeElement
    const box = ele.getBoundingClientRect()
    this.chart = new Chart({
      container: ele,
      width : box.width,
      height : box.height,
      renderer: 'svg'
    })
    this.chart.data(this.data)
    this.chart[this.g2chart]().position(this.position)
    this.chart.render()
  }
}
export type ChartType = 'point'
  |'path'
  |'line'
  |'area'
  |'interval'
  |'polygon'
  |'schema'
  |'heatmap'
