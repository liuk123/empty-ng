import { Injectable } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { defaultIfEmpty, filter, map, mapTo, take, tap, zipAll } from 'rxjs/operators';

@Injectable()
export class UtilService {
  constructor() { }

  /**
   * 获取颜色的数组
   * @param n number
   */
  getColors(n) {
    let r = 0;
    let colors = new Array(n);
    for (let i = 0; i < n; i++) {
      r -= Math.PI * 2 / -n
      colors[i]=
        '#' + (
          1 << 24 |
          Math.cos(r) * 127 + 128 << 16 |
          Math.cos(r + Math.PI * 2 / 3) * 127 + 128 << 8 |
          Math.cos(r + Math.PI * 4 / 3) * 127 + 128).toString(16).slice(1)
    }
    return colors;
  }

  /**
   * 一个对象数组分成三分
   * @param data []
   * @param columns 3 分成几列
   */
  columnsArr = (data: any[], columns, titleHeight = 2) => {
    let heightArr = new Array(columns).fill(0)
    let temArr = []
    for(let i=0; i<data.length; i++){
      let minIndex = 0;
      for(let a = 0; a < heightArr.length; a++){
        if(heightArr[minIndex]>heightArr[a]){
          minIndex = a
        }
      }
      if(temArr[minIndex]){
        temArr[minIndex].push(data[i])
      }else{
        temArr[minIndex]=[data[i]]
      }
      if(data[i].children){
        heightArr[minIndex]+=(data[i].children.length + titleHeight)
      }else{
        heightArr[minIndex]+=(0 + titleHeight)
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
  setTree(data, topId=null){
    if(topId==null){
      topId = Symbol()
    }
    const temObj = {}
    for(let i=0; i<data.length;i++){
      const key = data[i].pid||topId as any
      if(temObj[key]){
        temObj[key].push(data[i])
      }else{
        temObj[key]=[data[i]]
      }
    }
    let t = this.setTreeItem(temObj[topId], temObj)
    return t
  }
  private setTreeItem(item, obj){
    if(item){
      for(let i=0; i<item.length;i++){
        item[i].children = obj[item[i].id]||null
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
    let timer = null;
    return function(...args) {
      if(time){
        clearTimeout(timer);
      }
      if(args.length==0){
        time=null
      }else{
        timer = setTimeout(()=>{callback.apply(this, args)}, time);
      }
    }
  }

  /**
   * 节流 多次触发，n秒内只执行一次，稀释函数的执行频率
   * @param callback 
   * @param time 
   */
  throttle(callback, time = 800) {
    let flag = true;
    return (...args) => {
      if (!flag) return;
      flag = false;
      setTimeout(() => {
        callback.apply(this, args);
        flag = true;
      }, time);
    }
  }

  /**
   * 动态插入script
   * @param dynamicScripts 
   * @returns
   */
  dynamicLoadScript(dynamicScripts:string[]){
    return from(dynamicScripts).pipe(
      filter(v=> !Array.from(document.getElementsByTagName("script")).map(v=>v.getAttribute('src')).includes(v)),
      tap(v=>console.log('加载script：'+ v)),
      map(v=>{
        let node = document.createElement('script')
        node.src = v
        node.type = 'text/javascript';
        document.head.appendChild(node);
        return fromEvent(node, 'load')
      }),
      zipAll(),
      mapTo("LoadEnd"),
      defaultIfEmpty("LoadEnd"),
      take(1)
    )
  }
  /**
   * 文件下载
   * @param data 文件数据
   * @param fileName 文件名
   */
  download(data, fileName){
    const blob = new Blob([data])
    const url = window.URL.createObjectURL(blob)
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    anchor.remove();
    window.URL.revokeObjectURL(url)
  }
  
}