import { Injectable } from '@angular/core'
import { JsUtilService } from 'src/app/shared/utils/js-util'

@Injectable()
export class ObjectUtilService extends JsUtilService {

  constructor() {super()}

  /**
   * 去空格(字符串)
   * @param {*} data 
   */
  trim(data) {
    return this.oparateTree(data, {
      strfn: (v) => v.trim()
    });
  }
  /**
   * 删除空属性 '',[],{},null,undefined，NaN
   * @param {*} data 
   */
  delNull(data) {
    return this.oparateTree(data, null, (v) => {
      if (this.isEmptyObject(v) ||
        v?.length==0 ||
        isNaN(v) ||
        v==null||v=='') {
      return true
    } else {
      return false
    }
    });
  }

  /**
   * 删除(符合要求的所有对象)
   * @param {arr} data 
   * @param {*} arr [{id:1},{id:3},{id:5,pid:6}]
   */
  rmSomeObj(data, condition) {
    if (this.isArray(condition)) {
      let tem = condition.map(v => Object.keys(v));
      return this.oparateTree(data, null, (v) => {
        if (this.isObject(v) &&
          tem.some((val, i) => val.every(subval => v[subval] == condition[i][subval]))
        ) {
          return true
        } else {
          return false
        }
      });
    } else {
      let tem = Object.keys(condition);
      return this.oparateTree(data, null, (v) => {
        if (this.isObject(v) && tem.every(val => v[val] == condition[val])
        ) {
          return true
        } else {
          return false
        }
      });
    }

  }

  /**
   * 
   * @param {any} data 
   * @param {strfn: '',numfn: ''} callbackobj
   * @param {callback} del  return true =>删除 return false=>不删除
   */
  oparateTree(data, callbackobj:any = {}, del=null) {
    if (this.isDate(data)) {
      return new Date().setTime(data.getTime());
    } else if (this.isObject(data)) {
      let newdata = {};
      Object.keys(data).forEach(key=>{
        let tem = this.oparateTree(data[key], callbackobj, del);
        if (this.isFunction(del) && !del(tem) || !this.isFunction(del)) {
          newdata[key] = tem;
        }
        tem = null;
      })
      return newdata;
    } else if (this.isArray(data)) {
      let newdata = [];
      for (let i = 0; i < data.length; i++) {
        let tem = this.oparateTree(data[i], callbackobj, del)
        if (this.isFunction(del) && !del(tem) || !this.isFunction(del)) {
          newdata.push(tem);
        }
        tem = null
      }
      return newdata
    } else if (typeof data == 'string') {
      if (this.isFunction(callbackobj?.strfn)) {
        return callbackobj.strfn(data);
      } else {
        return data;
      }

    } else if (typeof data == 'number') {
      if (this.isFunction(callbackobj?.numfn)) {
        return callbackobj.numfn(data);
      } else {
        return data;
      }
    } else {
      return data;
    }
  }


  
}
