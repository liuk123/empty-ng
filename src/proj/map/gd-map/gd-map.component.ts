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

  _mapCenter: number[] = [116.397428, 39.90923]
  @Input() set mapCenter(val) {
    this._mapCenter = val;
    if (this.map && val) {
      this.map.setCenter(val);
    }
  }
  get mapCenter() {
    return this._mapCenter
  }
  @Input() set heatData(v) {
    if(v!==undefined && this.map){
      if (!this.layer['heat']) {
        this.initHeatMap(this.map)
      }
      let me = this
      this.layer['heat'].setData(v, {
        lnglat: function (obj) {
          let value = obj.value
          return [value['lng'], value['lat']]
        },
        type: 'csv',
        value: 'value'
      })
      this.layer['heat'].render()
    }
  }

  map = null
  layer = []
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
    })
  }

  initGdMap(){
    return new AMap.Map(this.mapContainer.nativeElement, {
      resizeEnable: true,
      zooms: [3, 18],
      zoom: 13,
      viewMode: '3D',
      center: this.mapCenter,
    })
  }
  initLoca(map){
    return new Loca.Container({
      map:map
    })
  }
  initHeatMap(map) {
    
  }
  
}
