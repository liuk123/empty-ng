import { Injectable } from "@angular/core";
import { BaseUtilService } from "./base-util";

@Injectable()
export class JsUtilService extends BaseUtilService {
  constructor() { super() }

  /**
   * 深度克隆
   * @param {*} data 
   */
  clone(data,fn=null) {
    if (this.isDate(data)) {
      return new Date().setTime(data.getTime());
    } else if (this.isObject(data)) {
      let newdata = {};
      Object.keys(data).forEach(key => {
        let tem = this.clone(data[key],fn);
        newdata[key] = tem;
      })
      if(fn){
        return fn(newdata)
      }
      return newdata;
    } else if (this.isArray(data)) {
      let newdata = [];
      for (let i = 0; i < data.length; i++) {
        let tem = this.clone(data[i],fn)
        newdata.push(tem);
      }
      return newdata
    } else {
      return data;
    }
  }
  /**
   * 根据id 找相应的对象（寻找到一个，结束遍历）
   * @param data Object Array
   * @param id 
   * @returns Object
   */
  findItem(data, fn, options={mapObject:['children']}) {
    if (this.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        let tem = this.findItem(data[i], fn, options)
        if (tem) {
          return tem
        }
      }
    } else if (this.isObject(data)) {
      if (fn(data)) {
        return data
      }
      if(options.mapObject){
        for(let j=0; j<options.mapObject.length; j++){
          let tem = this.findItem(data[options.mapObject[j]], fn, options)
          if (tem) {
            return tem
          }
        }
      }else{
        const keys = Object.keys(data)
        for(let j=0; j<keys.length; j++){
          let tem = this.findItem(data[keys[j]], fn, options)
          if (tem) {
            return tem
          }
        }
      }
    }
  }

  /**
   * 遍历树，修改所有复合条件的树
   * @param data 
   * @param fn 
   * @returns 
   */
  loopTree(data, fn, options={mapObject:['children']}){
    if (this.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        this.loopTree(data[i], fn, options)
      }
    } else if (this.isObject(data)) {
      fn(data)
      if(options.mapObject){
        for(let j=0; j<options.mapObject.length; j++){
          this.loopTree(data[options.mapObject[j]], fn, options)
        }
      }else{
        const keys = Object.keys(data)
        for(let j=0; j<keys.length; j++){
          this.loopTree(data[keys[j]], fn, options)
        }
      }
    }
  }

  /**
   * 对象是否相同
   * @param val1 
   * @param val2 
   * @returns 
   */
  isSame(val1,val2){
    if(this.isArray(val1) && this.isArray(val2)){
      if(val1.length!==val2.length){
        return false
      }
      return val1.every(value=>val2.some(v=>this.isSame(value, v)))
    }else if(this.isObject(val1) && this.isObject(val2)){
      let keys1=Object.keys(val1), keys2=Object.keys(val2)
      if(keys1.length!==keys2.length){
        return false
      }
      for(let i=0,len=keys1.length; i<len; i++){
        if(!this.isSame(val1[keys1[i]], val2[keys1[i]])){
          return false
        }
      }
      return true
    }else if(this.isMap(val1) && this.isMap(val2)){
      if(val1.size !== val2.size){
        return false
      }
      let keys = val1.keys()
      for(let i=0,len=val1.size; i<len; i++){
        let key = keys.next().value
        if(!this.isSame(val1.get(key),val2.get(key))){
          return false
        }
      }
      return true
    }else if(this.isSet(val1) && this.isSet(val2)){
      if(val1.size !== val2.size){
        return false
      }
      return this.isSame(Array.from(val1),Array.from(val2))
    }else if(this.isDate(val1) && this.isDate(val2)){
      return val1.getTime() == val2.getTime()
    }else if(val1===val2){
      return true
    }else{
      return false
    }
  }

  /**
   * 序列化对象  对象转url参数
   * @param {*} obj 
   */
  stringfyQueryString(obj) {
    if (!obj) return false;
    let pairs = [];
    for (let key in obj) {
      let value = obj[key];
      if (value instanceof Array) {
        for (let i = 0; i < value.length; ++i) {
          pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
        }
        continue;
      }
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return pairs.join('&');
  }

  /**
   * url参数转对象
   * @param {*} url 
   */
  parseQueryString(url) {
    url = url == null ? window.location.href : url
    let search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
      return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
  }

   /**
   * 平铺数组
   * @param {*} arr 
   */
   deepFlatten(arr) {
    return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.deepFlatten(v) : v), []);
  }

  /**
   * 去掉数组中相同的元素 filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
   * @param {*} arr 
   */
  filterNonUnique(arr) {
    return arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
  }

  /**
   * 对象替换key
   * @param {*} data 
   * @param {*} obj 
   */
  replaceObjKey(data, obj) {
    if (this.isObject(data)) {
      let newdata = {};
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if(obj[key]!=null && obj[key]!=''){
            newdata[obj[key]] = this.replaceObjKey(data[key], obj);
          } else {
            newdata[key] = this.replaceObjKey(data[key], obj);
          }
        }
      }
      return newdata;
    } else if (this.isArray(data)) {
      let newdata = [];
      for (let i = 0; i < data.length; i++) {
        newdata.push(this.replaceObjKey(data[i], obj));
      }
      return newdata;
    } else {
      return data;
    }
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
}