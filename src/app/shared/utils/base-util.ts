import { Injectable } from "@angular/core";

@Injectable()
export class BaseUtilService {
  constructor() {}

  getDataType(o) {
    return Object.prototype.toString.call(o)
  }

  isObject(o) {
    return this.getDataType(o) === '[object Object]'
  }
  isArray(o) {
    return this.getDataType(o) === '[object Array]'
  }
  isString(o) {
    return this.getDataType(o) === '[object String]'
  }
  isNumber(o){
    return this.getDataType(o) === '[object Number]'
  }
  isDate(o) {
    return this.getDataType(o) === '[object Date]'
  }
  isFunction(o) {
    return this.getDataType(o) === '[object Function]'
  }
  isBoolean(o) {
    return this.getDataType(o) === '[object Boolean]'
  }
  isNull(o){
    return this.getDataType(o) === '[object Null]'
  }
  isUndefind(o){
    return this.getDataType(o) === '[object Undefined]'
  }
  isSymbol(o){
    return this.getDataType(0) === '[object Symbol]'
  }
  isRegExp(o){
    return this.getDataType(0) === '[object RegExp]'
  }
  isMap(o){
    return this.getDataType(0) === '[object Map]'
  }
  isSet(o){
    return this.getDataType(0) === '[object Set]'
  }

  isEmptyObject(o) {
    if(this.isObject(o)){
      for (let key in o) {return false;}
      return true;
    }else{
      return false;
    }
  }
}