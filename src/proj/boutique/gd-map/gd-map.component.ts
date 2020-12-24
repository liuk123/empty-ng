import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
declare var AMap: any;
declare var Loca: any;

@Component({
  selector: 'app-gd-map',
  templateUrl: './gd-map.component.html',
  styleUrls: ['./gd-map.component.less']
})
export class GdMapComponent implements OnInit {

  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef

  map
  heatLayer
  pointLayer
  iconLayer
  _heatData = ''
  _pointData = ''
  _iconData = ''
  _mapCenter: number[] = [116.397428, 39.90923]
  @Input() set mapCenter(val){
    this._mapCenter = val;
    if (this.map && this._mapCenter) {
      this.map.setCenter(this._mapCenter);
    }
  }
  @Input() heatValue: string = 'value'
  @Input() pointValue: string = 'value'
  @Input() iconValue: string = 'value'
  @Input() set heatData(val){
    this._heatData = val;
    if(!this.heatLayer && this.map){
      this.initHeatMap(this.map)
    }
    if(val !=null && val != ''){
      this.heatLayer.setData(val, {
        lnglat: function (obj) {
          var value = obj.value
          var lnglat = [value['lng'], value['lat']]
          return lnglat
        },
        type: 'csv',
        value: this.heatValue
      })
      this.heatLayer.render()
    }
  }
  @Input() set pointData(val){
    this._pointData = val;
    if(!this.pointLayer && this.map){
      this.initPointMap(this.map)
    }
    if(val !=null && val != ''){
      this.pointLayer.setData(val, {
        lnglat: function (obj) {
          var value = obj.value;
          var lnglat = [value['lng'], value['lat']];
          return lnglat;
        },
        type: 'csv',
        value: this.pointValue
      })
      this.pointLayer.render()
    }
  }
  @Input() set iconData(val){
    this._iconData = val;
    if(!this.iconLayer && this.map){
      this.initIconMap(this.map)
    }
    if(val !=null && val != ''){
      this.iconLayer.setData(val, {
        lnglat: function (obj) {
          var value = obj.value;
          var lnglat = [value['lng'], value['lat']];
          return lnglat;
        },
        type: 'csv',
        value: this.iconValue
      })
      this.iconLayer.render()
    }
  } 
  // MAPCENTER = [121.564862, 31.194251]

  constructor() { 
  }

  ngOnInit(): void {
    this.initGdMap()
  }
  initGdMap() {
    this.map = new AMap.Map(this.mapContainer.nativeElement, {
      resizeEnable: true,
      rotateEnable: true,
      pitchEnable: true,
      zooms: [3, 18],
      zoom: 11,
      isHotspot: false,
      viewMode: '3D',
      pitch: 56,
      buildingAnimation: true, // 楼块出现是否带动画
      expandZoomRange: true,
      center: this.mapCenter,
    })
  }
  initHeatMap(map) {
    this.heatLayer = new Loca.HeatmapLayer({
      map: map,
    })
    this.heatLayer.setOptions({
      style: {
        radius: 25,
        color: {
          0.2: '#87CEFA',
          0.3: '#90EE90',
          0.4: 'green',
          0.5: '#7CFC00',
          0.6: 'rgb(255, 255, 0)',
          0.7: '#ffea00',
          1.0: 'red'
        }
      }
    })

  }
  initPointMap(map) {
    this.pointLayer = new Loca.RoundPointLayer({
      map: map,
    });
    this.pointLayer.setOptions({
      style: {
        radius: {
          key: 'mag',       // 映射字段
          scale: 'linear',  // 比例尺
          value: [10, 100], // 输出范围
          input: [4, 8]    // 输入范围
        },
        color: '#07E8E4',
        opacity: 0.8,
        borderWidth: 1,
        borderColor: '#86FFFD'
      }
    });
  }
  initIconMap(map) {
    this.iconLayer = new Loca.IconLayer({
      map: map,
    });
    this.iconLayer.setOptions({
      source: function (res) {
        // var i = res.index;
        return './assets/icon/site.png';
      },
      style: {
          size: 28,
      }
    });
  }
}
