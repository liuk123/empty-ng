import { Injectable } from '@angular/core'
import { from, fromEvent} from 'rxjs'
import { filter, first, last, mergeMap, tap } from 'rxjs/operators'
import { BaseUtilService } from './base-util'

@Injectable()
export class UtilService extends BaseUtilService {
  constructor() { super() }

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
   */
  hexToRgb(color) {
    var t: any = {},
      bits = (color.length == 4) ? 4 : 8,
      mask = (1 << bits) - 1
    color = Number("0x" + color.substr(1))
    if (isNaN(color)) {
      return null
    }
    ['r', 'g', 'b'].forEach(function (x) {
      var c = color & mask
      color >>= bits
      t[x] = bits == 4 ? 17 * c : c
    })
    t.a = 1
    return t
  }

  /**
   * 一个对象数组分成三分
   * @param data []
   * @param columns 3 分成几列
   */
  columnsArr = (data: any[], columns: number, titleHeight = 2) => {
    let heightArr = new Array(columns).fill(0)
    let temArr = []
    for (let i = 0; i < data.length; i++) {
      let minIndex = 0
      for (let a = 0; a < heightArr.length; a++) {
        if (heightArr[minIndex] > heightArr[a]) {
          minIndex = a
        }
      }
      if (temArr[minIndex]) {
        temArr[minIndex].push(data[i])
      } else {
        temArr[minIndex] = [data[i]]
      }
      if (data[i].children) {
        heightArr[minIndex] += (data[i].children.length + titleHeight)
      } else {
        heightArr[minIndex] += (0 + titleHeight)
      }
    }
    return temArr
  }

  /**
   * 输入数组，返回树结构
   * @param data {id,pid,children}[] 数组
   * @param topId 顶级id 默认为null
   * @returns 树结构
   */
  setTree(data, topId = null) {
    if (topId == null) {
      topId = Symbol()
    }
    const temObj = {}
    for (let i = 0; i < data.length; i++) {
      const key = data[i].pid || topId as any
      if (temObj[key]) {
        temObj[key].push(data[i])
      } else {
        temObj[key] = [data[i]]
      }
    }
    let t = this.setTreeItem(temObj[topId], temObj)
    return t
  }
  private setTreeItem(item, obj) {
    if (item) {
      for (let i = 0; i < item.length; i++) {
        item[i].children = obj[item[i].id] || null
        this.setTreeItem(item[i].children, obj)
      }
      return item
    }
  }

  /**
   * 防抖 多次触发后只执行一次 
   * fn() 如果fu参数为空，清空timer
   * @param callback 
   * @param time 
   */
  debounce(callback, time = 800) {
    let timer = null
    return function (...args) {
      if (time) {
        clearTimeout(timer)
      }
      if (args.length == 0) {
        clearTimeout(timer)
        time = null
      } else {
        timer = setTimeout(() => { callback.apply(this, args) }, time)
      }
    }
  }

  /**
   * 节流 多次触发，n秒内只执行一次，稀释函数的执行频率
   * @param callback 
   * @param time 
   */
  throttle(callback, time = 800) {
    let flag = true
    return (...args) => {
      if (!flag) return
      flag = false
      setTimeout(() => {
        callback.apply(this, args)
        flag = true
      }, time)
    }
  }

  /**
   * 动态插入script
   * @param dynamicScripts 
   * @returns
   */
  dynamicLoadScript(dynamicScripts: string[]) {
    let scriptSrc = Array.from(document.getElementsByTagName("script")).map(v => v.getAttribute('src'))
    return from(dynamicScripts).pipe(
      filter(v => !scriptSrc.includes(v)),
      tap(v => console.log('加载script：' + v)),
      mergeMap((v:any)=>{
        let node = document.createElement('script')
        node.src = v
        node.type = 'text/javascript'
        document.head.appendChild(node)
        return fromEvent(node, 'load').pipe(first())
      }),
      last()
    )
  }
  /**
   * 文件下载
   * @param data 文件数据
   * @param fileName 文件名
   */
  download(data, fileName) {
    const blob = new Blob([data])
    const url = window.URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = fileName
    anchor.click()
    anchor.remove()
    window.URL.revokeObjectURL(url)
  }

  //json转base64
  jsonToBase64(str) {
    let c1 = null, c2 = null, c3 = null
    let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    let i = 0,
      len = str.length,
      string = ''

    while (i < len) {
      c1 = str.charCodeAt(i++) & 0xff
      if (i == len) {
        string += base64EncodeChars.charAt(c1 >> 2)
        string += base64EncodeChars.charAt((c1 & 0x3) << 4)
        string += "=="
        break
      }
      c2 = str.charCodeAt(i++)
      if (i == len) {
        string += base64EncodeChars.charAt(c1 >> 2)
        string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4))
        string += base64EncodeChars.charAt((c2 & 0xF) << 2)
        string += "="
        break
      }
      c3 = str.charCodeAt(i++)
      string += base64EncodeChars.charAt(c1 >> 2)
      string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4))
      string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6))
      string += base64EncodeChars.charAt(c3 & 0x3F)
    }
    return string
  }

  base64ToJson(string) {
    let b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    let b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
    string = String(string).replace(/[\t\n\f\r ]+/g, "")
    if (!b64re.test(string))
      throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.")
    string += "==".slice(2 - (string.length & 3))
    let bitmap = null
    let result = null
    let r1 = null
    let r2 = null
    let i = 0
    for (; i < string.length;) {
      bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12 |
        (r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)))

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
        r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
          String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255)
    }
  }

  parseQueryString(url) {
    url = url == null ? window.location.href : url
    let search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
      return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  }

  private FUNC_PREFIX = 'FUNCTIONSYMBOL_'
  stringify(obj){
    return JSON.stringify(obj, (k,v)=>{
      if(this.isFunction(v)){
        return `${this.FUNC_PREFIX}${v}`
      }
      return v
    })
  }
  parse(str){
    return JSON.parse(str, (k,v)=>{
      if(this.isString(v) && v.startsWith(this.FUNC_PREFIX)){
        return new Function(`return ${v.replace(this.FUNC_PREFIX, '')}`)()
      }
      return v
    })
  }
}
