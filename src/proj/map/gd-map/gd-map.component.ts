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

  private _mapCenter: number[] = [120.19660949707033, 30.234747338474293]
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
  //热力图
  private _heatData: any[]
  @Input() set heatData(val) {
    this._heatData = val
    if(this.layers.has('heat')){
      this.setHeatData(this._heatData)
    }
  }
  get heatData() {
    return this._heatData
  }

  private _polyLineData = new Map<string,object>()
  @Input() set polyLineData(val:{name:string, data:any[]}[]){
    if(Array.isArray(val) && val.length>0){
      val.forEach(({name,data})=>{
        this._polyLineData.set(name, data)
      })
      if(this.map){
        this.drawPolyLine({data: this._polyLineData})
      }
    }
  }


  map = null
  loca = null
  //地图上的所有图层
  layers = new Map<string, any>()

  dynamicScripts = [
    "https://webapi.amap.com/maps?v=2.0&key=a3a64d85f4fa1df7fae8cf06d4efb993&plugin=Map3D,AMap.DistrictSearch",
    "https://webapi.amap.com/loca?v=2.0.0&key=a3a64d85f4fa1df7fae8cf06d4efb993"
  ]
  constructor(
    public util: UtilService
  ) {}

  ngOnInit(): void {
    this.util.dynamicLoadScript(this.dynamicScripts).subscribe(v=>{
      this.map = this.initGdMap()
      this.loca = this.initLoca(this.map)

      this.initHeatMap(this.loca)
      if(this._polyLineData.size>0){
        this.drawPolyLine({data: this._polyLineData})
      }
      if(Object.keys(this._heatData).length>0){
        this.setHeatData(this._heatData)
      }
    })
  }
  /**
   * 划线
   * @param name 划线名称
   * @param data 数据
   * @param isShow 是否显示
   */
  drawPolyLine({data: lines}){
    let polylines = []
    for(let [name, data] of lines){
      if(this.layers.has(name)){
        this.map.remove(this.layers.get(name))
      }
      let polyline = new AMap.Polyline({
        path: data,
        strokeColor: "#3366FF",
        strokeWeight: 5,
        strokeStyle: "solid",
      });
      this.layers.set(name, polyline)
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
  /**
   * 初始化Loca
   * @param map 地图
   * @returns 
   */
  initLoca(map){
    return new Loca.Container({
      map: map
    })
  }
  /**
   * 初始化热力图
   * @param loca local
   */
  initHeatMap(loca) {
    const heatmap = new Loca.HeatMapLayer({
      zIndex: 10,
      opacity: 1,
      visible: true,
      zooms: [2, 22],
    });
    loca.add(heatmap)
    this.layers.set('heat', heatmap)
  }
  setHeatData(val){
    const geoData =  new Loca.GeoJSONSource({
      data: val,
    });
    this.layers.get('heat').setSource(geoData, {
      value: function (index, feature) {
        return feature.properties.count;
      },
    })
  }
  
}
