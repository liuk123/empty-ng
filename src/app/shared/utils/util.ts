import { Injectable } from '@angular/core'
import { from, fromEvent } from 'rxjs'
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
  // debounce(callback, time = 800) {
  //   let timer = null
  //   return function (...args) {
  //     if (time) {
  //       clearTimeout(timer)
  //     }
  //     if (args.length == 0) {
  //       clearTimeout(timer)
  //       time = null
  //     } else {
  //       timer = setTimeout(() => { callback.apply(this, args) }, time)
  //     }
  //   }
  // }

  /**
   * 节流 多次触发，n秒内只执行一次，稀释函数的执行频率
   * @param callback 
   * @param time 
   */
  // throttle(callback, time = 800) {
  //   let flag = true
  //   return (...args) => {
  //     if (!flag) return
  //     flag = false
  //     setTimeout(() => {
  //       callback.apply(this, args)
  //       flag = true
  //     }, time)
  //   }
  // }

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
      mergeMap((v: any) => {
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

  parseQueryString(url=window.location.href) {
    let index = url.lastIndexOf('?')
    if(index === -1){
      return {}
    }
    let search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
      return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  }

  private FUNC_PREFIX = 'FUNCTIONSYMBOL123321_'
  // stringify(obj) {
  //   return JSON.stringify(obj, (k, v) => {
  //     if (this.isFunction(v)) {
  //       return this.FUNC_PREFIX + v.toString()
  //     }
  //     return v
  //   })
  // }
  stringify(v){
    if(this.isFunction(v)){
      return '"'+this.FUNC_PREFIX + v+'"'
    }else if(this.isArray(v)){
      let data = '['
      for (let i = 0; i < v.length; i++) {
        let tem = this.stringify(v[i])
        data+=''+tem+','
      }
      return data.slice(0,-1) + ']'
    }else if(this.isObject(v)){
      let data = '{'
      Object.keys(v).forEach(key => {
        data+= `"${key}":${this.stringify(v[key])},`
      })
      return data.slice(0,-1) + '}'
    }else if(this.isDate(v)){
      return v.toJson()
    }else if(this.isSymbol(v)){
      return 'null'
    }else if(this.isNumber(v)&&(Number.isNaN(v)||!Number.isFinite(v))){
      return 'null'
    }else if(this.isString(v)){
      return '"'+v+'"'
    }
    return v
  }
  parse(str) {
    return JSON.parse(str, (k, v) => {
      if (this.isString(v) && v.startsWith(this.FUNC_PREFIX)) {
        return new Function(`return ${v.replace(this.FUNC_PREFIX, '')}`)()
      }
      return v
    })
  }

  /**
   * 复制到剪切版
   */
  copyToClipboard(str) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

  /**
   * 获取元素到最顶端的距离
   * @param elem 
   * @returns 
   */
  getElementTop(elem) {
    var sum = elem.offsetTop;
    while ((elem = elem.offsetParent) != null) {
      sum += elem.offsetTop;
    }
    return sum;
  }
  /**
   * 生成 UUID
   * @returns 
   */
  UUIDGenerator() {
    return (<any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16))
  }

  /**
   * 编码
   * @param str 
   * @returns 
   */
  base64encode(str) {
    const base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let out, i, len;
    let c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
      c1 = str.charCodeAt(i++) & 0xff;
      if (i == len) {
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt((c1 & 0x3) << 4);
        out += "==";
        break;
      }
      c2 = str.charCodeAt(i++);
      if (i == len) {
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt((c2 & 0xF) << 2);
        out += "=";
        break;
      }
      c3 = str.charCodeAt(i++);
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
      out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
  }

  /**
   * 解码
   * @param str 
   * @returns 
   */
  base64decode(str) {
    const base64DecodeChars = new Array(
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
      52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
      -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
      -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

    let c1, c2, c3, c4;
    let i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
      /* c1 */
      do {
        c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
      } while (i < len && c1 == -1);
      if (c1 == -1)
        break;

      /* c2 */
      do {
        c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
      } while (i < len && c2 == -1);
      if (c2 == -1)
        break;

      out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

      /* c3 */
      do {
        c3 = str.charCodeAt(i++) & 0xff;
        if (c3 == 61)
          return out;
        c3 = base64DecodeChars[c3];
      } while (i < len && c3 == -1);
      if (c3 == -1)
        break;

      out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

      /* c4 */
      do {
        c4 = str.charCodeAt(i++) & 0xff;
        if (c4 == 61)
          return out;
        c4 = base64DecodeChars[c4];
      } while (i < len && c4 == -1);
      if (c4 == -1)
        break;
      out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
  }

  utf16to8(str) {
    var out, i, len, c;

    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if ((c >= 0x0001) && (c <= 0x007F)) {
        out += str.charAt(i);
      } else if (c > 0x07FF) {
        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
      } else {
        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
      }
    }
    return out;
  }

  utf8to16(str) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
      c = str.charCodeAt(i++);
      switch (c >> 4) {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
          // 0xxxxxxx
          out += str.charAt(i - 1);
          break;
        case 12: case 13:
          // 110x xxxx 10xx xxxx
          char2 = str.charCodeAt(i++);
          out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
          break;
        case 14:
          // 1110 xxxx 10xx xxxx 10xx xxxx
          char2 = str.charCodeAt(i++);
          char3 = str.charCodeAt(i++);
          out += String.fromCharCode(((c & 0x0F) << 12) |
            ((char2 & 0x3F) << 6) |
            ((char3 & 0x3F) << 0));
          break;
      }
    }

    return out;
  }

  strToBase64(str){
    return this.base64encode(this.utf16to8(str))
  }
  base64ToStr(str){
    return this.utf8to16(this.base64decode(str))
  }
}
