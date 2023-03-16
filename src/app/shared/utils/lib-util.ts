import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MessageUtilService } from "src/app/core/services/message-util.service";
import { UtilService } from "./util";
declare const XLSX
declare const html2canvas

@Injectable()
export class LibUtilService extends UtilService {
  constructor(
    private messageSrv: MessageUtilService) { super() }

  transferExcelData(data) {
    return this.dynamicLoadScript(['/assets/lib/xlsx.mini.min.js']).pipe(
      map(()=>{
        if(!XLSX){
          this.messageSrv.error('组件加载失败,请刷新页面重新加载。')
          return null;
        }
        this.messageSrv.info('正在处理')
        const ret = {}
        const workbook = XLSX.read(data, { type: 'binary' })
        const sheetList = workbook.SheetNames
        sheetList.forEach(key=>{
          const worksheet = workbook.Sheets[key]
          ret[key] = XLSX.utils.sheet_to_json(worksheet)
    
        })
        this.messageSrv.success('正在完成')
        return ret
      })
    )
  }

  transferJSONData(data){
    return this.dynamicLoadScript(['/assets/lib/xlsx.mini.min.js']).pipe(
      map(()=>{
        let workBook
        if(Array.isArray(data)){
          workBook = {
            SheetNames: ['Sheet1'],
            Sheets: {},
            Props: {}
          }
          workBook.SheetNames.forEach(name=>{
            workBook.Sheets[name] = XLSX.utils.json_to_sheet(data)
          })
        }else if(data instanceof Object){
          workBook = {
            SheetNames: Object.keys(data),
            Sheets: {},
            Props: {}
          }
          workBook.SheetNames.forEach(name=>{
            workBook.Sheets[name] = XLSX.utils.json_to_sheet(data[name])
          })
        }
        return new Blob([
          this.changeData(XLSX.write(workBook,{
              bookType: 'xlsx',
              bookSST: false, 
              type: 'binary'
            }))
        ],{type: 'application/octet-stream'})
      })
    )
  }
  private changeData(s){
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i){
      view[i] = s.charCodeAt(i) & 0xFF
    }
    return buf
  }

  html2canvas(dom, opt={}){
    return new Observable((observer)=>{
      this.dynamicLoadScript(['/assets/lib/html2canvas.min.js']).pipe(
        map(()=>{
          html2canvas(dom, {
            backgroundColor: null, //画出来的图片有白色的边框,不要可设置背景为透明色（null）
            useCORS: true,
            allowTaint: false,
            scale: window.devicePixelRatio, //设置放大的倍数
            ...opt
          }).then(canvas=>{
            observer.next(canvas.toDataURL('image/jpg'))
            observer.complete()
          })
        })
      ).subscribe()
    })
    
  }
  
}