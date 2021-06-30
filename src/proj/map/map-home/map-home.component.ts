import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';
import { ElDirective } from 'src/app/shared/directive/el.directive';
import { MapService } from '../service/map.service';

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.less']
})
export class MapHomeComponent implements OnInit {

  @ViewChild(ElDirective) ele!: ElDirective
  heatData
  heatStyle
  markerData
  questions: FormBase<any>[]=[]
  keys: string[] = []

  polyLineData = [{
    name: 'linea',
    data: [[116.455731, 39.913268], [116.455903, 39.906553], [116.465537, 39.90647], [116.465301, 39.913433], [116.455709, 39.913317]]
  }]
  constructor(
    private srv: MapService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
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
    this.questions = [
      {
        key: 'radius',
        label: 'radius',
        value: 20,
        valide:[],
        controlType: 'textbox',
        type: 'number',
      },{
        key: 'value',
        label: 'value',
        value: 'value',
        valide:[],
        controlType: 'dropdown',
        options: Object.keys(this.heatData.features[0].properties).map(v=>({name:v, code: v}))
      },{
        key: 'height',
        label: 'height',
        value: 100,
        valide:[],
        controlType: 'textbox',
        type: 'number',
      },{
        key: 'unit',
        label: 'unit',
        value: 'px',
        valide:[],
        controlType: 'textbox',
        type: 'text',
      },
    ]
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormGroupComponent)
    const viewContainerRef = this.ele.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.params = this.questions;
    componentRef.instance.span = 1
    componentRef.instance.okText = '渲染'
    componentRef.instance.clearText = '清空'
    componentRef.instance.submitEmit.subscribe(v=>{
      console.log(v)
      this.heatStyle = {
        ...v,
        value: function (index, feature) {
          return Number(feature.properties.value);
        }
      }
    })
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
