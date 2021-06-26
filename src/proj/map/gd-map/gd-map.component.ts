import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';
declare var AMap: any;
declare var Loca: any;

@Component({
  selector: 'app-gd-map',
  templateUrl: './gd-map.component.html',
  styleUrls: ['./gd-map.component.less']
})
export class GdMapComponent implements OnInit {

  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef

  private _mapCenter: number[] = [116.397428, 39.90923]
  @Input() set mapCenter(val) {
    if(val){
      this._mapCenter = val;
      if (this.map) {
        this.map.setCenter(val);
      }
    }
  }
  get mapCenter() {
    return this._mapCenter
  }
  private _heatData: any[]
  @Input() set heatData(val) {
    // if(val){
    //   this._heatData = val
    //   if(this.layers['heat']){
    //     this.layers['heat'].setData(val, {
    //       lnglat: function (obj) {
    //         let value = obj.value
    //         return [value['lng'], value['lat']]
    //       },
    //       type: 'csv',
    //       value: 'value'
    //     })
    //     this.layers['heat'].render()
    //   }
    // }
  }
  get heatData() {
    return this._heatData
  }

  private _polyLineData = new Map<string,object>()
  @Input() set polyLineData(val:{name:string, data:any[]}[]){
    if(Array.isArray(val) && val.length>0){
      if(this.map){
          this.drawPolyLine({data: val})
      }
      val.forEach(({name,data})=>{
        this._polyLineData.set(name, data)
      })
    }
  }


  map = null
  layers = new Map<string, {name:string, isShow:boolean, data:any, type:string}>()
  dynamicLoadScript$

  dynamicScripts = [
    "https://webapi.amap.com/maps?v=2.0&key=a3a64d85f4fa1df7fae8cf06d4efb993&plugin=Map3D,AMap.DistrictSearch",
    "https://webapi.amap.com/loca?v=2.0.0&key=a3a64d85f4fa1df7fae8cf06d4efb993"
  ]
  constructor(
    public util: UtilService
  ) {}

  ngOnInit(): void {
    this.dynamicLoadScript$ = this.util.dynamicLoadScript(this.dynamicScripts)
    this.dynamicLoadScript$.subscribe(v=>{
      this.map = this.initGdMap()
      // console.log(Array.from(this._polyLineData))
      // this.drawPolyLine({data: Array.from(this._polyLineData)})
      // for(let [name,data] of this._polyLineData){
        
      // }
    })
  }
  /**
   * 划线
   * @param name 划线名称
   * @param data 数据
   * @param isShow 是否显示
   */
  drawPolyLine({data: lines, isShow=true}){
    let polylines = []
    for(let {name, data} of lines){
      if(this.layers.has(name)){
        this.map.remove(this.layers.get(name).data)
      }
      let polyline = new AMap.Polyline({
        path: data,
        strokeColor: "#3366FF",
        strokeWeight: 5,
        strokeStyle: "solid",
      });
      this.layers.set(name,{name, isShow, type:'polyLine', data:polyline})
      polylines.push(polyline)
    }
    
    this.map.add(polylines)
  }
  /**
   * 初始化地图
   * @returns Map
   */
  initGdMap(){
    return new AMap.Map(this.mapContainer.nativeElement, {
      resizeEnable: true,
      zooms: [3, 18],
      zoom: 13,
      viewMode: '3D',
      center: this.mapCenter,
    })
  }
  initHeatMap(map) {
    
  }
  
}
