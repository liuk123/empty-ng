import { Component, OnInit } from '@angular/core';
import { MapService } from '../service/map.service';

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.less']
})
export class MapHomeComponent implements OnInit {

  heatData
  markerData
  fileList = {
    selected: '',
    ids: [],
    entities: {}
  }
  fileData = []
  titleOption = []

  polyLineData = [{
    name: 'linea',
    data: [[116.455731, 39.913268], [116.455903, 39.906553], [116.465537, 39.90647], [116.465301, 39.913433], [116.455709, 39.913317]]
  }]
  constructor(
    private srv: MapService
  ) { }

  ngOnInit(): void {
    // this.srv.getGeoJson('https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_house_order.json').subscribe(v=>{
    //   this.heatData = v
    // })
    setTimeout(() => {
      this.polyLineData = [{
        name: 'linea',
        data: [[116.352985, 39.913849], [116.352492, 39.907414], [116.359358, 39.907447], [116.359916, 39.913866], [116.352942, 39.913816]]
      },
      {
        name: 'lineb',
        data: [[116.415745, 39.988951], [116.417161, 39.968463], [116.419093, 39.968529], [116.418234, 39.989049], [116.415831, 39.988918]]
      }]
    }, 5000)
  }
  readerFile(ev) {
    this.heatData = this.dealCsvToGeoJson(ev.data)
  }
  progress(ev) {
    console.log(ev)
  }

  dealCsvToGeoJson(csvData) {
    const arr = csvData.split(/\r\n/)
    const titles = arr[0].split(',')
    const len = arr.length
    const tem = new Array(len-2)
    for (let i = 1; i < len; i++) {
      if(arr[i]){
        const valueString = arr[i].split(',')
        const obj = titles.reduce((a, b, index) => {
          a[b] = valueString[index]
          return a
        }, {})
        tem[i-1] = {
          type: "Feature",
          properties: obj,
          geometry: {
            type: "Point",
            coordinates: [obj.longitude, obj.latitude]
          },
        }
      }
    }
    return {
      type: "FeatureCollection",
      features: tem,
    }
  }
}
