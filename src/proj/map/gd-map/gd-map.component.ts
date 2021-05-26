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
  _heatData
  @Input() set heatData(val) {
    this._heatData = val;
    if (!this.layer['heat'] && this.map) {
      this.initHeatMap(this.map)
    }
    let me = this
    this.layer['heat'].setData(val, {
      lnglat: function (obj) {
        let value = obj.value
        return [value['lng'], value['lat']]
      },
      type: 'csv',
      value: 'value'
    })
    this.layer['heat'].render()
    
  }

  map = null
  layer = []

  dynamicScripts = [
    "https://webapi.amap.com/maps?v=1.4.15&key=a3a64d85f4fa1df7fae8cf06d4efb993&plugin=Map3D,AMap.DistrictSearch",
    "https://webapi.amap.com/loca?v=1.3.2&key=a3a64d85f4fa1df7fae8cf06d4efb993"
    ]
  constructor(
    public util: UtilService
  ) {}

  ngOnInit(): void {
    this.util.dynamicLoadScript(this.dynamicScripts).subscribe(v=>{
      console.log(v)
      this.map = this.initGdMap()
    })
  }

  initGdMap(){
    return new AMap.Map(this.mapContainer.nativeElement, {
      resizeEnable: true,
      rotateEnable: true,
      pitchEnable: true,
      zooms: [3, 18],
      zoom: 13,
      isHotspot: false,
      viewMode: '2D',
      pitch: 56,
      buildingAnimation: true, // 楼块出现是否带动画
      expandZoomRange: true,
      center: this.mapCenter,
    })
  }
  initHeatMap(map) {
    this.layer['heat'] = new Loca.HeatmapLayer({
      map: map,
    })
    this.layer['heat'].setOptions({
      style: {
        opacity: [0.1, 0.8],
        radius: 16,
        color: {
          0.1: 'red',
          0.3: '#ffea00',
          0.5: 'rgb(255, 255, 0)',
          0.7: '#7CFC00',
          0.8: 'green',
          0.9: '#90EE90',
          1.0: '#87CEFA'
        }
      }
    })

  }
  
}
