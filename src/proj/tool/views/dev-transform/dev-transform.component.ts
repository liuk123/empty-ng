import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-dev-transform',
  templateUrl: './dev-transform.component.html',
  styleUrls: ['./dev-transform.component.less']
})
export class DevTransformComponent implements OnInit {

  inputValue=null
  resultValue=null
  constructor(private util: UtilService) { }

  ngOnInit(): void {
  }

  copy(data){
    this.util.copyToClipboard(data)
  }
  clear(){
    this.inputValue = null
    this.resultValue = null
  }
  uuid() {
    this.resultValue = this.util.UUIDGenerator()
  }
  /**
   * 生成class
   * @param data 
   */
  generateClass(data){
    data=JSON.parse(data)
    if(!this.util.isObject(data)){
      return null
    }
    let str = 'export class User{\n constructor(\n'
    Object.keys(data).forEach(key=>{
      let type = Object.prototype.toString.call(data[key]).slice(8,-1)
      str+=`  public ${key}?: ${type},\n`
    })
    str += ` ){}\n}`
    this.resultValue = str
  }
  /**
   * 生成interface
   * @param data 
   */
  generateInterface(data){
    interface Authority{
      id: number,
      name: string,
      url: string,
      [propName:string]: any
    }
  }
  /**
   * 驼峰命名转下划线
   * @param data 
   */
  humpToUnderline(data){

  }
  /**
   * 下划线转驼峰命名
   * @param data 
   */
  underlineTohump(data){

  }

}
