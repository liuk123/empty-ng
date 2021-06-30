import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/core/services/http-util.service';

@Injectable()
export class MapService {

  baseUrl: string = '/api/';
  constructor(
    private http: HttpClient,
  ) {}

  get5GData(){
    const url = `../../assets/mapdata/5g.csv`;
    return this.http.get(url, { responseType: 'text' });
  }
  get4GData(){
    const url = `../../assets/mapdata/4g.csv`;
    return this.http.get(url, { responseType: 'text' });
  }
  getGeoJson(url){
    return this.http.get(url, { responseType: 'json' });
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
  dealCsvToJson(csvData) {
    const arr = csvData.split(/\r\n/)
    const titles = arr[0].split(',')
    const len = arr.length
    const tem = new Array(len-2)
    for (let i = 1; i < len; i++) {
      if(arr[i]){
        const valueString = arr[i].split(',')
        tem[i-1] = titles.reduce((a, b, index) => {
          a[b] = valueString[index]
          return a
        }, {})
      }
    }
    return tem
  }
}
