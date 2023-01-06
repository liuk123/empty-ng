import { Component, OnInit } from '@angular/core';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';
import { ToolService } from '../../service/tool.service';

@Component({
  selector: 'app-dev-transform',
  templateUrl: './dev-transform.component.html',
  styleUrls: ['./dev-transform.component.less']
})
export class DevTransformComponent implements OnInit {

  inputValue=null
  resultValue=null
  constructor(
    private util: UtilService,
    private toolSrv:ToolService,
    private messageSrv:MessageUtilService
  ) { }

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
   * object转class
   * {"user": "liuk123"}
   * @param data 
   */
  generateClass(data){
    try{
      data=JSON.parse(data)
    }catch (e){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    if(!this.util.isObject(data)){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.generateClass(data)
  }
  /**
   * object递归转class
   * @param data 
   * @returns 
   */
  deepGenerateClass(data){
    try{
      data=JSON.parse(data)
      
    }catch (e){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    if(!this.util.isObject(data)){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.deepGenerateClass(data)
    
  }
  /**
   * object转interface
   * @param data 
   */
  generateInterface(data){
    try{
      data=JSON.parse(data)
    }catch (e){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    if(!this.util.isObject(data)){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.generateInterface(data)
    
  }
  /**
   * object递归转interface
   * @param data 
   * @returns 
   */
  deepGenerateInterface(data){
    try{
      data=JSON.parse(data)
    }catch (e){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    if(!this.util.isObject(data)){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.deepGenerateInterface(data)
    
  }
  /**
   * 驼峰命名转下划线
   * @param data 
   */
  humpToUnderline(str){
    if(this.util.isString(str)){
      this.messageSrv.error('请输入正确的字符串格式')
      return null
    }
    this.resultValue = this.toolSrv.humpToUnderline(str)
  }
  /**
   * 下划线转驼峰命名
   * @param data 
   */
  underlineTohump(str){
    if(this.util.isString(str)){
      this.messageSrv.error('请输入正确的字符串格式')
      return null
    }
    this.resultValue = this.toolSrv.underlineTohump(str)
  }

  /**
   * 颜色(RGB)转16位
   * @param str 
   */
  rgbToHex(str){
    const reg = new RegExp('[0-9\.]+','g')
    const arr=[]
    let temArr=null
    while((temArr = reg.exec(str))!==null){
      arr.push(Number(temArr))
    }
    this.resultValue = this.toolSrv.rgbToHex(arr[0],arr[1],arr[2],arr[3])
  }
  /**
   * 16位转RGB
   * @param hex 
   */
  hexToRgb(hex){
    this.resultValue = this.toolSrv.hexToRgb(hex).join(',')
  }
}
