import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';
import { ConfigService } from 'src/app/core/services/config.service';

export type ChartType = 'point'
  |'path'
  |'line'
  |'area'
  |'interval'
  |'polygon'
  |'schema'
  |'heatmap'

@Directive({
  selector: '[g2chart]'
})
export class G2chartDirective implements OnInit, OnDestroy{
  @Input() g2chart: ChartType = 'interval'
  @Input() position = ''
  @Input() padding = [16,8,32,32]
  private _data = []
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
  resizeObserver = null
  constructor(
    private ref: ElementRef) {}

  ngOnInit(){
    if(ConfigService.Config.isBrowser){
      this.initChart()
    }
  }
  ngOnDestroy(): void {
    if(ConfigService.Config.isBrowser){
      this.chart?.destroy()
      this.resizeObserver?.disconnect()
    }
  }
  initChart(){
    if(this.chart){return null}
    const ele = this.ref.nativeElement
    this.chart = new Chart({
      container: ele,
      autoFit: true,
      renderer: 'svg',
      padding: this.padding
    })
    this.chart.data(this.data)
    this.chart[this.g2chart]().position(this.position)
    this.chart.render()

    this.resizeObserver = new ResizeObserver(entries => {
      this.chart.forceFit()
    })
    this.resizeObserver.observe(ele)
  }
}
