import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ElDirective } from 'src/app/shared/directive/el.directive';
import { UtilService } from 'src/app/shared/utils/util';
import { MapService } from '../service/map.service';

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.less'],
  animations: [
    trigger('rightArrow', [
      state('true', style({ transform: 'translateX(0)' })),
      state('false', style({ transform: 'translateX(20rem)' })),
      transition('true => false', animate('300ms ease-out')),
      transition('false => true', animate('500ms ease-in')),
    ]),
  ]
})
export class MapHomeComponent implements OnInit {

  @ViewChild(ElDirective) ele!: ElDirective
  heatData
  heatStyle

  gridData
  gridStyle
  
  mapFileData
  mapFileName
  settingFileData
  settingFileName
  mapType

  downloadStyleData
  mapTypeOption=[
    {
      code: 'heat',
      label: '热力图',
      style:(voption)=> ([
        {
          key: 'value',
          label: 'value',
          value: 'value',
          valide:[],
          controlType: 'dropdown',
          options: voption
        },{
          key: 'radius',
          label: 'radius',
          value: 20,
          valide:[],
          controlType: 'textbox',
          type: 'number',
        },{
          key: 'gradient',
          label: 'gradient',
          value: "{\"0.5\":\"blue\",\"0.65\":\"rgb(117,211,248)\",\"0.7\":\"rgb(0, 255, 0)\",\"0.9\":\"#ffea00\",\"1.0\":\"red\"}",
          valide:[],
          controlType: 'textarea',
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
      ]),
      fn: (v)=>{
        this.downloadStyleData = v
        // 点击渲染按钮执行的操作
        this.heatData = this.mapFileData
        this.heatStyle = {
          ...v,
          value: (index, feature) => {
            return Number(feature.properties[v.value]);
          },
          gradient: v.gradient?JSON.parse(v.gradient):"{\"0.5\":\"blue\",\"0.65\":\"rgb(117,211,248)\",\"0.7\":\"rgb(0, 255, 0)\",\"0.9\":\"#ffea00\",\"1.0\":\"red\"}",
        }
      },
      clearFn: ()=>{
        this.heatStyle = null
        this.heatData = null
      }
    },
    {
      code: 'grid',
      label: '栅格图',
      style:(voption)=> ([
        {
          key: 'value',
          label: 'value',
          value: 'value',
          valide:[],
          controlType: 'dropdown',
          options: voption
        },{
          key: 'radius',
          label: 'radius',
          value: 20,
          valide:[],
          controlType: 'textbox',
          type: 'number',
        },{
          key: 'gap',
          label: 'gap',
          value: 0,
          valide: [],
          controlType: 'textbox',
          type: 'number',
        },{
          key: 'height',
          label: 'height',
          value: '100,500,1000,2000,3000,4000',
          valide: [],
          controlType: 'textbox',
          type: 'text',
        },{
          key: 'range',
          label: 'range',
          value: '10,40,60,80,90,100',
          valide: [],
          controlType: 'textbox',
          type: 'text',
        },{
          key: 'topColor',
          label: 'topColor',
          value: '#FAE200,#D27E37,#C53634,#C12B6E,#A92E9A,#67238A,#211A50,#18244E',
          valide:[],
          controlType: 'textbox',
          type: 'text',
        },{
          key: 'sideColor',
          label: 'sideColor',
          value: '#FAE200,#D27E37,#C53634,#C12B6E,#A92E9A,#67238A,#211A50,#18244E',
          valide:[],
          controlType: 'textbox',
          type: 'text',
        },{
          key: 'unit',
          label: 'unit',
          value: 'px',
          valide:[],
          controlType: 'textbox',
          type: 'text',
        },
      ]),
      fn: (v)=>{
        this.downloadStyleData = v
        // 点击渲染按钮执行的操作
        this.gridData = this.mapFileData
        let ranges =  v.range.split(',')
        
        let heights = v.height.split(',')
        let sideColors = v.sideColor.split(',')
        let topColors = v.topColor.split(',')
        let heightlen = heights.length-1
        let sideColorlen = sideColors.length-1
        let topColorlen = topColors.length-1
        this.gridStyle = {
          ...v,
          height: (index, feature)=>{
            let a = ranges.findIndex(val => Number(val) > Number(feature.coordinates[0].properties[v.value]))
            return Number(a!=-1?heights[a]:heights[heightlen])
          },
          sideColor: (index, feature)=>{
            let a = ranges.findIndex(val => Number(val) > Number(feature.coordinates[0].properties[v.value]))
            return a!=-1?sideColors[a]:sideColors[sideColorlen]
          },
          topColor: (index, feature)=>{
            let a = ranges.findIndex(val => Number(val) > Number(feature.coordinates[0].properties[v.value]))
            return a!=-1?topColors[a]:topColors[topColorlen]
          },
        }
      },
      clearFn: ()=>{
        this.gridData = null
        this.gridStyle = null
      }
    }
  ]

  markerData
  polyLineData = [{
    name: 'linea',
    data: [[116.455731, 39.913268], [116.455903, 39.906553], [116.465537, 39.90647], [116.465301, 39.913433], [116.455709, 39.913317]]
  }]

  isShowBox = true
  constructor(
    private srv: MapService,
    private utilSrv: UtilService
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
  switchMapType(e){
    const tem = this.mapTypeOption.find(v=>v.code == e)
    if(this.mapFileData){
      const questions = tem.style(Object.keys(this.mapFileData.features[0].properties).map(v=>({name:v, code: v})))
      const fn = tem.fn
      this.srv.createEditComponent(this.ele.viewContainerRef, questions, fn)
    }
  }

  mapReaderFile(ev) {
    this.mapFileData = this.srv.dealCsvToGeoJson(ev.data)
    this.mapFileName = ev.name
    if(this.mapType){
      this.switchMapType(this.mapType)
    }
  }
  clearLayer(){
    if(this.mapType){
      const t = this.mapTypeOption.find(v=>v.code == this.mapType)
      if(t){
        t.clearFn()
      }
    }
  }
  settingReaderFile(ev) {
    this.settingFileData = JSON.parse(ev.data)
    this.settingFileName = ev.name
    console.log(this.settingFileData)
    // this.srv.createEditComponent(this.ele.viewContainerRef, questions, fn)
  }
  progress(ev) {
    console.log(ev)
  }
  download(){
    if(this.downloadStyleData)
    this.utilSrv.download(JSON.stringify(this.downloadStyleData), '配置.json')
  }
}
