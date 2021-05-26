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
    if (this.map && val) {
      this._mapCenter = val;
      this.map.setCenter(val);
    }
  }
  get mapCenter() {
    return this._mapCenter
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
  
}
