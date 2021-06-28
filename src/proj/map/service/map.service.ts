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
}
