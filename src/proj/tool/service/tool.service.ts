import { Injectable } from '@angular/core'
import { BaseUtilService } from 'src/app/shared/utils/base-util'

@Injectable()
export class ToolService extends BaseUtilService {
  constructor() {super()}


  /**
   * 颜色(RGB)转16位
   * @param r 
   * @param g 
   * @param b 
   * @returns 
   */
  private toHex = (n: number) => `${n > 15 ? '' : 0}${n.toString(16)}`
  
  rgbToHex(r, g, b, a=1) {
    return `#${this.toHex(r)}${this.toHex(g)}${this.toHex(b)}${a === 1 ? '' : this.toHex(Math.floor(a * 255))}`
  }
  /**
   * 16位转RGB
   * @param color 
   * @returns 
   */
  hexToRgb(hex):Number[] {
    let alpha = false,
    h = hex.startsWith('#')?hex.slice(1):hex;
    if (h.length === 3) h = `${h[0]}${h[0]}${h[1]}${h[1]}${h[2]}${h[2]}`;
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    if(alpha){
      return [
        h >>> 24,
        (h & 0x00ff0000) >>> 16,
        (h & 0x0000ff00) >>> 8,
        Math.floor((h & 0x000000ff)/255*100+0.5)/100
      ]
    }else{
      return [
        h >>> 16,
        (h & 0x00ff00) >>> 8,
        (h & 0x0000ff)
      ]
    }
  }

  /**
   * 驼峰命名转下划线
   * @param data 
   */
  humpToUnderline(str){
    let ret = ""
    for(let i=0;i<str.length;i++){
      let c=str.charCodeAt(i)
      if(c>=65 && c<=90){
        ret += '_'+String.fromCharCode(c+32)
      }else{
        ret +=str[i]
      }
    }
    return ret
  }
  /**
   * 下划线转驼峰命名
   * @param data 
   */
  underlineTohump(str){
    let ret = ""
    for(let i=0;i<str.length;i++){
      if(str[i]=='_'){
        let next = str.charCodeAt(i+1)
        if(next>=97&&next<=122){
          ret += String.fromCharCode(next-32)
          i++
        }else{
          ret +=str[i]  
        }
      }else{
        ret +=str[i]
      }
    }
    return ret
  }

  /**
   * 大小写切换
   * @param str 
   * @returns 
   */
  switchCase(str){
    let ret = ""
    for(let i=0;i<str.length;i++){
      let c=str.charCodeAt(i)
      if(c>=65 && c<=90){
        ret += String.fromCharCode(c+32)
      }else if(c>=97&&c<=122){
        ret +=String.fromCharCode(c-32)
      }else{
        ret +=str[i]
      }
    }
    return ret
  }
  /**
   * 首字母大写
   * @param str 
   * @returns 
   */
  firstCodeUpCase(str:string){
    if(this.isString(str)){
      return str.charAt(0).toUpperCase()+str.slice(1)
    }
    return null
  }

  /**
   * object转class
   * {"user": "liuk123"}
   * @param data 
   */
  generateClass(data){
    let str = 'export class Name{\n constructor(\n'
    Object.keys(data).forEach(key=>{
      let type = Object.prototype.toString.call(data[key]).slice(8,-1)
      str+=`  public ${key}?: ${type},\n`
    })
    str += ` ){}\n}`
    return str
  }
  /**
   * object递归转class
   * @param data 
   * @returns 
   */
  deepGenerateClass(data){
    let arr = []
    let ret = this.deepGenerateClassItem(data, arr)
    return ret + '\n\n' + arr.join('\n')
  }
  private deepGenerateClassItem(data, arr, name=null){
    if(this.isArray(data)){
      let ret = this.deepGenerateClassItem(data[0], arr, name)
      return ret
    }else if(this.isObject(data)){
      let str='export class '+(this.firstCodeUpCase(name)??'Name')+'{\n constructor(\n'
      Object.keys(data).forEach(key=>{
        let type = Object.prototype.toString.call(data[key]).slice(8,-1)
        if(type == 'Object'){
          let value = this.deepGenerateClassItem(data[key], arr , key)
          if(value){
            str+=`  public ${key}?: ${this.firstCodeUpCase(key)},\n`
            arr.push(value)
          }else{
            str+=`  public ${key}?: ${type},\n`  
          }
        }else if(type == 'Array'){
          let value = this.deepGenerateClassItem(data[key], arr , key)
          if(value){
            str+=`  public ${key}?: ${this.firstCodeUpCase(key)}[],\n`
            arr.push(value)
          }else{
            str+=`  public ${key}?: ${type},\n`  
          }
        }else{
          str+=`  public ${key}?: ${type},\n`
        }
      })
      str += ` ){}\n}`
      return str
    }
  }

  /**
   * object转interface
   * @param data 
   */
  generateInterface(data){
    let str = 'export interface Name{\n'
    Object.keys(data).forEach(key=>{
      let type = Object.prototype.toString.call(data[key]).slice(8,-1)
      str+=`  ${key}?: ${type},\n`
    })
    str += `}`
    return str
  }
  /**
   * object递归转interface
   * @param data 
   * @returns 
   */
  deepGenerateInterface(data){
    let arr = []
    let ret = this.deepGenerateInterfaceItem(data, arr)
    return ret + '\n\n' + arr.join('\n')
  }
  private deepGenerateInterfaceItem(data, arr, name=null){
    if(this.isArray(data)){
      let ret = this.deepGenerateInterfaceItem(data[0], arr, name)
      return ret
    }else if(this.isObject(data)){
      let str='export interface '+(this.firstCodeUpCase(name)??'Name')+'{\n'
      Object.keys(data).forEach(key=>{
        let type = Object.prototype.toString.call(data[key]).slice(8,-1)
        if(type == 'Object'){
          let value = this.deepGenerateInterfaceItem(data[key], arr , key)
          if(value){
            str+=`  ${key}?: ${this.firstCodeUpCase(key)},\n`
            arr.push(value)
          }else{
            str+=`  ${key}?: ${type},\n`  
          }
        }else if(type == 'Array'){
          let value = this.deepGenerateInterfaceItem(data[key], arr , key)
          if(value){
            str+=`  ${key}?: ${this.firstCodeUpCase(key)}[],\n`
            arr.push(value)
          }else{
            str+=`  ${key}?: ${type},\n`  
          }
        }else{
          str+=`  ${key}?: ${type},\n`
        }
      })
      str += `}`
      return str
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
  dealExcelToJson(data) {
    const arr = data.split('\n')
    const titles = arr[0].split('\t')
    const len = arr.length
    const tem = new Array(len-2)
    for (let i = 1; i < len; i++) {
      if(arr[i]){
        const valueString = arr[i].split('\t')
        tem[i-1] = titles.reduce((a, b, index) => {
          a[b] = valueString[index]
          return a
        }, {})
      }
    }
    return tem
  }
}
