import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(private http: HttpClient) { }

  get4GCsvData() {
    return this.http.get('../assets/data/4g.csv', { responseType: 'text' })
  }
  get5GCsvData() {
    return this.http.get('../assets/data/5g.csv', { responseType: 'text' })
  }
  getHeatMapData(){
    return this.http.get('//a.amap.com/Loca/static/mock/sh_road_heat.json')
  }
}
