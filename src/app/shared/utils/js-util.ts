import { Injectable } from "@angular/core";
import { BaseUtilService } from "./base-util";

@Injectable()
export class JsUtilService extends BaseUtilService {
  constructor() { super() }

  isEmptyObject(obj) {
    return this.isObject(obj) && Reflect.ownKeys(obj).length === 0
  }
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

}