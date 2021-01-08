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

  @Input() maxValue = 1;
  @Input() minValue = 0;
  map
  heatLayer
  pointLayer
  iconLayer
  _heatData = ''
  _pointData = ''
  _iconData = ''
  _mapCenter: number[] = [116.397428, 39.90923]
  @Input() set mapCenter(val) {
    this._mapCenter = val;
    if (this.map && this._mapCenter) {
      this.map.setCenter(this._mapCenter);
    }
  }
  get mapCenter() {
    return this._mapCenter
  }
  @Input() heatValue: string = 'value'
  @Input() pointValue: string = 'value'
  @Input() iconValue: string = 'value'
  @Input() set heatData(val) {
    this._heatData = val;
    if (!this.heatLayer && this.map) {
      this.initHeatMap(this.map)
    }
    if (val != null && val != '') {
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
  @Input() set pointData(val) {
    this._pointData = val;
    if (!this.pointLayer && this.map) {
      this.initPointMap(this.map)
    }
    if (val != null && val != '') {
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
  @Input() set iconData(val) {
    this._iconData = val;
    if (!this.iconLayer && this.map) {
      this.initIconMap(this.map)
    }
    if (val != null && val != '') {
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
      viewMode: '2D',
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
          0.1: '#87CEFA',
          0.3: '#90EE90',
          0.5: 'green',
          0.7: '#7CFC00',
          0.8: 'rgb(255, 255, 0)',
          0.9: '#ffea00',
          1.0: 'red'
        }
      }
    })

  }
  initPointMap(map) {
    const me = this;
    this.pointLayer = new Loca.RoundPointLayer({
      map: map,
    });
    this.pointLayer.setOptions({
      style: {
        radius: {
          key: me.pointValue,       // 映射字段
          scale: 'linear',  // 比例尺
          value: [3, 6], // 输出范围
          input: [this.minValue, this.maxValue]    // 输入范围
        },
        // radius: 6,
        color: function (data) {
          var item = data.value;
          var mag = item[me.pointValue];

          //覆盖率
          // if (mag > me.maxValue * 0.995) {
          //   return '#016DCE';
          // } else if (mag <= me.maxValue * 0.995 && mag >= me.maxValue * 0.99) {
          //   return '#09AA5A';
          // } else if (mag <= me.maxValue * 0.99 && mag >= me.maxValue * 0.95) {
          //   return '#FBFE03';
          // } else if (mag <= me.maxValue * 0.95 && mag >= me.maxValue * 0.9) {
          //   return '#FFB90A';
          // } else {
          //   return '#F90001';
          // }

          //驻留比
          // if (mag > me.maxValue * 0.99) {
          //   return '#016DCE';
          // } else if (mag <= me.maxValue * 0.99 && mag >= me.maxValue * 0.95) {
          //   return '#09AA5A';
          // } else if (mag <= me.maxValue * 0.95 && mag >= me.maxValue * 0.90) {
          //   return '#FBFE03';
          // } else if (mag <= me.maxValue * 0.9 && mag >= me.maxValue * 0.8) {
          //   return '#FFB90A';
          // } else {
          //   return '#F90001';
          // }

          //流量45g
          // if (mag > 300) {
          //   return '#016DCE';
          // } else if (mag <= 300 && mag >= 200) {
          //   return '#09AA5A';
          // } else if (mag <= 200 && mag >= 100) {
          //   return '#FBFE03';
          // } else if (mag <= 100 && mag >= 10) {
          //   return '#FFB90A';
          // } else {
          //   return '#F90001';
          // }

          //用户数
          if (mag > 2000) {
            return '#016DCE';
          } else if (mag <= 2000 && mag >= 1000) {
            return '#09AA5A';
          } else if (mag <= 1000 && mag >= 500) {
            return '#FBFE03';
          } else if (mag <= 500 && mag >= 100) {
            return '#FFB90A';
          } else {
            return '#F90001';
          }
        },
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
        size: 18,
      }
    });
  }
}
