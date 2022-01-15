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
  clone(data) {
    if (this.isDate(data)) {
      return new Date().setTime(data.getTime());
    } else if (this.isObject(data)) {
      let newdata = {};
      Object.keys(data).forEach(key => {
        let tem = this.clone(data[key]);
        newdata[key] = tem;
      })
      return newdata;
    } else if (this.isArray(data)) {
      let newdata = [];
      for (let i = 0; i < data.length; i++) {
        let tem = this.clone(data[i])
        newdata.push(tem);
      }
      return newdata
    } else {
      return data;
    }
  }
  /**
   * 根据id 找相应的对象
   * @param data Object Array
   * @param id 
   * @returns Object
   */
  findItem(data, fn) {
    if (this.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        this.findItem(data[i], fn)
      }
    } else if (this.isObject(data)) {
      if (fn(data)) {
        return data
      }
      if (data.children) {
        this.findItem(data.children, fn)
      }
    }
  }

}