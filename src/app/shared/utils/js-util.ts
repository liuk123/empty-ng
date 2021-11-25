import { Injectable } from "@angular/core";
import { BaseUtilService } from "./base-util";

@Injectable()
export class JsUtilService extends BaseUtilService {
  constructor() { super() }

  isEmptyObject(obj){
    return Reflect.ownKeys(obj).length === 0 && obj.constructor===Object
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
      Object.keys(data).forEach(key=>{
        let tem = this.clone(data[key]);
          newdata[key] = tem;
          tem = null;
      })
      return newdata;
    } else if (this.isArray(data)) {
      let newdata = [];
      for (let i = 0; i < data.length; i++) {
        let tem = this.clone(data[i])
          newdata.push(tem);
        tem = null
  
      }
      return newdata
    } else {
      return data;
    }
  }
}