import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Chart } from '@antv/g2';
import { UtilService } from 'src/app/shared/utils/util';

@Directive({
  selector: '[g2chart]'
})
export class G2chartDirective implements OnInit{
  @Input() g2chart: string = 'interval'
  @Input() position = ''
  _data = []
  @Input() set data(val){
    if(val && this.chart){
      this._data = val
      this.chart.changeData(val)
    }
  }
  get data(){
    return this._data
  }
  chart: Chart
  constructor(
    private ref: ElementRef,
    private util: UtilService) {}

  ngOnInit(){
    const ele = this.ref.nativeElement
    const box = ele.getBoundingClientRect()
    this.chart = new Chart({
      container: ele,
      width : box.width,
      height : box.height,
      renderer: 'svg'
    })
    this.chart[this.g2chart]().position(this.position).color({
      fields: [ 'genre' ],
      values:this.util.getColors(12)
    })
    this.chart.render()
  }
}
