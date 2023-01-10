import { Component, OnInit } from '@angular/core';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';
declare const XLSX;

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.less']
})
export class ExcelComponent implements OnInit {

  resultValue = null
  constructor(
    private util: UtilService,
    private messageSrv: MessageUtilService
    ) { }
  ngOnInit(): void {
    this.init()
  }
  copy(data){
    this.util.copyToClipboard(data)
  }
  clear(){
    this.resultValue = null
  }
  readerFile(e){
    if(!XLSX){
      this.messageSrv.error('组件加载失败,请刷新页面重新加载。')
      return null;
    }
    this.messageSrv.info('正在处理')
    const ret = {}
    const workbook = XLSX.read(e.data, { type: 'binary' })
    const sheetList = workbook.SheetNames
    sheetList.forEach(key=>{
      const worksheet = workbook.Sheets[key]
      ret[key] = XLSX.utils.sheet_to_json(worksheet)

    })
    this.resultValue = JSON.stringify(ret)
    this.messageSrv.success('正在完成')
  }
  jsonToExcel(){
    this.messageSrv.info('正在开发中')
  }
  init(){
    this.util.dynamicLoadScript(['/assets/lib/xlsx.mini.min.js']).subscribe()
  }
}
