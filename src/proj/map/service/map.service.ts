import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { HttpUtilService } from 'src/app/core/services/http-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';

@Injectable()
export class MapService {

  baseUrl: string = '/api/';
  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
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
  /**
   * 创建组件
   * @param viewContainerRef 
   * @param questions form配置
   * @param fn 点击渲染按钮执行的操作
   */
  createEditComponent(viewContainerRef,questions,fn){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormGroupComponent)
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.params = questions;
    componentRef.instance.span = 1
    componentRef.instance.okText = '渲染'
    componentRef.instance.submitEmit.subscribe(fn)
  }
}
