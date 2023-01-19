import { Injectable } from '@angular/core'
import { BaseUtilService } from 'src/app/shared/utils/base-util'

@Injectable()
export class ObjectUtilService extends BaseUtilService {

  private go = true

  constructor() {super()}

  /**
   * 去空格(字符串)
   * @param {*} data 
   */
  trim(data) {
    return this.encodeData(data, {
      strfn: (v) => v.trim()
    });
  }

  /**
   * 删除空属性 '',[],{},null,undefined，NaN
   * @param {*} data 
   */
  delNull(data) {
    return this.encodeData(data, null, (v) => {
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
   * 删除空属性并且去空格
   * @param {*} data 
   */
  delNullAndTrim(data) {
    return this.encodeData(data, {
      strfn: (v) => v.trim()
    }, (v) => {
      if (this.isEmptyObject(v) ||
        v?.length==0 ||
        isNaN(v) ||
        v==null||v=='') {
      return true
    } else {
      return false
    }
    })
  }

  /**
   * 深度克隆
   * @param {*} data 
   */
  clone(data) {
    return this.encodeData(data);
  }

  /**
   * 克隆object 继承原来的原型链
   * @param {*} data 
   */
  cloneObj(data) {
    let originProto = Object.getPrototypeOf(data);
    return Object.assign(Object.create(originProto), data);
  }

  /**
   * 删除(符合要求的所有对象)
   * @param {arr} data 
   * @param {*} arr [{id:1},{id:3},{id:5,pid:6}]
   */
  rmSomeObj(data, condition) {
    if (this.isArray(condition)) {
      let tem = condition.map(v => Object.keys(v));
      return this.encodeData(data, null, (v) => {
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
      return this.encodeData(data, null, (v) => {
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
   * 删除一条(修改原数组)
   * @param {arr} data
   * @param {id:1,pid:2} obj/arr
   */
  removeOneObj(data, condition) {
    if (this.isArray(condition)) {
      condition = this.clone(condition);
    } else {
      condition = [condition];
    }
    this.go = true;
    this.operateOneObj(data, condition, (v, i) => {
      v.splice(i, 1)
    });
    return data;
  }
  /**
   * 删除所有 (修改原数组)
   * @param {arr} data 
   * @param {*} arr [{id:1},{id:3},{id:5,pid:6}]
   */
  removeSomeObj(data, condition) {
    if (!this.isArray(condition)) {
      condition = [condition];
    }
    this.go = true;
    this.operateSomeObj(data, condition, (v, i) => {
      v.splice(i, 1)
    });
    return data;
  }


  /**
   * 添加一条 (平级)
   * @param {*} data 
   * @param {*} obj 
   * @param {arr/obj} newData 
   */
  addOneObj(data, condition, newData) {
    if (this.isArray(condition)) {
      condition = this.clone(condition);
    } else {
      condition = [condition];
    }
    this.go = true;
    this.operateOneObj(data, condition, (v, i) => {
      if (this.isArray(newData)) {
        v.splice(i + 1, 0, ...newData)
      } else {
        v.splice(i + 1, 0, newData)
      }
    });
    return data;
  }
  /**
   * 添加多条 (平级)
   * @param {*} data 
   * @param {*} obj 
   * @param {arr/obj} newData 
   */
  addSomeObj(data, condition, newData) {
    if (!this.isArray(condition)) {
      condition = [condition];
    }
    this.go = true;
    this.operateSomeObj(data, condition, (v, i) => {
      if (this.isArray(newData)) {
        v.splice(i + 1, 0, ...newData)
      } else {
        v.splice(i + 1, 0, newData)
      }
    });
    return data;
  }


  /**
   * 对数组的操作 - 增删改查(修改第一条复核条件的)
   * @param {*} data
   * @param {*} obj 
   * @param {*} fn 
   */
  operateOneArr(data, condition, fn) {
    if (this.isArray(condition)) {
      condition = this.clone(condition);
    } else {
      condition = [condition];
    }
    this.go = true;
    this.operateOneObj(data,condition,(v,i) => {
      fn(v,i)
    });//v，父元素
    return data;
  }
  operateSomeArr(data, condition, fn) {
    if (!this.isArray(condition)) {
      condition = [condition];
    }
    this.go = true;
    this.operateSomeObj(data,condition,(v,i) => {
      fn(v,i)
    });//v，父元素
    return data;
  }


    /**
   * 添加一条符合条件的数据(内部使用)
   * @param {*} data 
   * @param {arr} condition 
   */
  operateOneObj(data, condition, fn) {
    if (!this.go) {
      return false;
    }
    if (this.isObject(data)) {
      for (let key in data) {
        this.operateOneObj(data[key], condition, fn)
      }
    } else if (this.isArray(data)) {
      for (let i = data.length - 1; i >= 0; i--) {
        if (condition.length == 0) {
          this.go = false;
          return false;
        }
        if (this.isObject(data[i])) {
          for (let j = condition.length - 1; j >= 0; j--) {
            let isSame = true;
            for (let key in condition[j]) {
              if (data[i][key] !== condition[j][key]) {
                isSame = false;
                break;
              }
            }
            if (isSame) {
              fn(data, i);
              condition.splice(j, 1);
              break;
            }
          }
        }
        this.operateOneObj(data[i], condition, fn)
      }
    }
    return null
  }

  operateSomeObj(data, condition, fn) {
    if (!this.go) {
      return false;
    }
    if (this.isObject(data)) {
      for (let datakey in data) {
        this.operateSomeObj(data[datakey], condition, fn)
      }
    } else if (this.isArray(data)) {
      for (let i = data.length - 1; i >= 0; i--) {
        if (condition.length == 0) {
          this.go = false;
          return false;
        }
        if (this.isObject(data[i])) {
          for (let j = condition.length - 1; j >= 0; j--) {
            let isSame = true;
            for (let key in condition[j]) {
              if (data[i][key] !== condition[j][key]) {
                isSame = false;
                break;
              }
            }
            if (isSame) {
              fn(data, i);
              break;
            }
          }
        }
        this.operateSomeObj(data[i], condition, fn)
      }
    }
    return null
  }


  /**
   * 
   * @param {any} data 
   * @param {strfn: '',numfn: ''} callbackobj
   * @param {callback} del  return true =>删除 return false=>不删除
   */
  encodeData(data, callbackobj:any = {}, del=null) {
    // if (callbackobj == null) callbackobj = {}

    if (this.isDate(data)) {
      return new Date().setTime(data.getTime());
    } else if (this.isObject(data)) {
      let newdata = {};
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let tem = this.encodeData(data[key], callbackobj, del);
          if (this.isFunction(del) && !del(tem) || !this.isFunction(del)) {
            newdata[key] = tem;
          }
          tem = null;
        }
      }
      return newdata;
    } else if (this.isArray(data)) {
      let newdata = [];
      for (let i = 0; i < data.length; i++) {
        let tem = this.encodeData(data[i], callbackobj, del)
        if (this.isFunction(del) && !del(tem) || !this.isFunction(del)) {
          newdata.push(tem);
        }
        tem = null

      }
      return newdata
    } else if (typeof data == 'string') {
      if (this.isFunction(callbackobj.strfn)) {
        return callbackobj.strfn(data);
      } else {
        return data;
      }

    } else if (typeof data == 'number') {
      if (this.isFunction(callbackobj.numfn)) {
        return callbackobj.numfn(data);
      } else {
        return data;
      }
    } else {
      return data;
    }
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
          // if (!this.isBlank(obj[key])) {
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
   * 打乱数组排序
   * @param {} arr 
   */
  shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }
}
