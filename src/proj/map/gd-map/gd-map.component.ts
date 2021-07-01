import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';
declare var AMap: any;
declare var Loca: any;

export class GeoJson{
  constructor(
    public type: string,
    public geometry: {
      type: string,
      coordinates: [number,number]
    },
    public properties: Object,
  ){}
}
export class HeatStyle{
  constructor(
    
  ){}
}
@Component({
  selector: 'app-gd-map',
  templateUrl: './gd-map.component.html',
  styleUrls: ['./gd-map.component.less']
})
export class GdMapComponent implements OnInit {

  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef

  // 中心点
  private _mapCenter: number[] = [116.405467, 39.907761]
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

  // 热力图
  private _heatData: GeoJson
  @Input() set heatData(val) {
    this._heatData = val
    if(this.layers.has('heat')){
      this.setLocaData(this._heatData, 'heat')
    }
  }
  get heatData() {
    return this._heatData
  }
  private _heatStyle={}
  @Input() set heatStyle(val){
    if(val instanceof Object && Object.keys(val).length>0){
      this.setLocaStyle(val, 'heat')
    }
  }

  // 栅格图
  private _gridData: GeoJson
  @Input() set gridData(val) {
    this._gridData = val
    if(this.layers.has('grid')){
      this.setLocaData(this._gridData, 'grid')
    }
  }
  get gridData() {
    return this._gridData
  }
  private _gridStyle={}
  @Input() set gridStyle(val){
    if(val instanceof Object && Object.keys(val).length>0){
      this.setLocaStyle(val, 'grid')
    }
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

  //地图打点
  private _markerData = []
  @Input() set markerData(val){
    if(Array.isArray(val) && val.length>0){
      this._markerData = val
    }
    if(this.map){
      this.drawMarker({data: val})
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

      
      
      if(this._polyLineData.size>0){
        this.drawPolyLine({data: this._polyLineData})
      }
      
      this.initHeatMap(this.loca)
      this.initGridMap(this.loca)
      this.setLocaData(this._heatData, 'heat')
      this.setLocaData(this._gridData, 'grid')
      
      if(this._markerData.length>0){
        this.drawMarker({data: this._markerData})
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
      pitch:35,
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
    const layer = new Loca.HeatMapLayer({
      zIndex: 10,
      opacity: 1,
      visible: true,
      zooms: [2, 22],
    });
    loca.add(layer)
    this.layers.set('heat', layer)
  }

  /**
   * 初始化栅格图
   * @param loca local
   */
   initGridMap(loca) {
    const layer = new Loca.GridLayer({
      zIndex: 10,
      opacity: 1,
      visible: true,
      zooms: [2, 22],
    });
    loca.add(layer)
    this.layers.set('grid', layer)
  }
  /**
   * 设置local data
   * @param val GEOJSON
   * @param type heat|grid
   */
  setLocaData(val, type){
    let geoData = new Loca.GeoJSONSource({
      data: val || {},
    });
    this.layers.get(type).setSource(geoData)
  }
  setLocaStyle(val,type){
    this.layers.get(type).setStyle(val)
  }
  /**
   * 地图打点
   * @param data 
   */  
  drawMarker({data}){
    const len = data.length
    const markers = new Array(len);
    for(let i=0; i< len; i++){
      const item = data[i]
      if(!item.hasOwnProperty('icon')){
        item.icon = {
          url:'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          width:60,
          height:60,
        }
      }
      markers[i] = new AMap.Marker({
        position: [item.longitude, item.latitude],
        title: item.name,
        zIndex: item.zIndex||10,
        offset: new AMap.Pixel(-(item.icon.width / 2), -item.icon.height),
        icon: item.icon.url
      })
    }
    this.map.add(markers)
  } 
}
