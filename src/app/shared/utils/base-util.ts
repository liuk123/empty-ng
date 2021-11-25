import { Injectable } from "@angular/core";

@Injectable()
export class BaseUtilService {
  constructor() {}

  getDataType(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
  }

  isObject(o) {
    return this.getDataType(o) === 'Object';
  }
  isArray(o) {
    return this.getDataType(o) === 'Array';
  }
  isString(o) {
    return this.getDataType(o) === 'String';
  }
  isNumber(o){
    return this.getDataType(o) === 'Number';
  }
  isDate(o) {
    return this.getDataType(o) === 'Date';
  }
  isFunction(o) {
    return this.getDataType(o) === 'Function';
  }
  isBoolean(o) {
    return this.getDataType(o) === 'Boolean';
  }
  isNull(o){
    return this.getDataType(o) === 'Null';
  }
  isUndefind(o){
    return this.getDataType(o) === 'Undefined';
  }
}