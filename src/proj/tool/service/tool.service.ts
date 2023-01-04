import { Injectable } from '@angular/core'
import { BaseUtilService } from 'src/app/shared/utils/base-util'

@Injectable()
export class ToolService extends BaseUtilService {
  constructor() {super()}

  /**
   * 获取颜色的数组
   * @param n number
   */
  getColors(n) {
    let r = 0
    let colors = new Array(n)
    for (let i = 0; i < n; i++) {
      r -= Math.PI * 2 / -n
      colors[i] =
        '#' + (
          1 << 24 |
          Math.cos(r) * 127 + 128 << 16 |
          Math.cos(r + Math.PI * 2 / 3) * 127 + 128 << 8 |
          Math.cos(r + Math.PI * 4 / 3) * 127 + 128).toString(16).slice(1)
    }
    return colors
  }
  /**
   * 随机颜色
   * @returns 
   */
  randomHexColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  /**
   * 颜色(RGB)转16位
   * @param r 
   * @param g 
   * @param b 
   * @returns 
   */
  rgbToHex(r, g, b) {
    return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
  }
  /**
   * 16位转RGB
   * @param color 
   * @returns 
   * hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
   * hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
   */
  hexToRgb(hex) {
    let alpha = false,
      h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
      'rgb' +
      (alpha ? 'a' : '') +
      '(' +
      (h >>> (alpha ? 24 : 16)) +
      ', ' +
      ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
      ', ' +
      ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
      (alpha ? `, ${h & 0x000000ff}` : '') +
      ')'
    );
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
   * 首字母大写
   * @param str 
   * @returns 
   */
  firstCodeUpCase(str:string){
    if(this.isString(str)){
      return str.charAt(0).toUpperCase()+str.slice(1)
    }
    return str
  }

  /**
   * object转class
   * {"user": "liuk123"}
   * @param data 
   */
  generateClass(data){
    data=JSON.parse(data)
    if(!this.isObject(data)){
      return null
    }
    let str = 'export class User{\n constructor(\n'
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
    data=JSON.parse(data)
    if(!this.isObject(data)){
      return null
    }
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
    data=JSON.parse(data)
    if(!this.isObject(data)){
      return null
    }
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
    data=JSON.parse(data)
    if(!this.isObject(data)){
      return null
    }
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
}
