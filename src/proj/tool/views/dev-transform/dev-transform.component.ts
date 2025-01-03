import { Component, OnInit } from '@angular/core';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';
import { ObjectUtilService } from '../../service/object-util.service';
import { ToolService } from '../../service/tool.service';

@Component({
  selector: 'app-dev-transform',
  templateUrl: './dev-transform.component.html',
  styleUrls: ['./dev-transform.component.less']
})
export class DevTransformComponent implements OnInit {

  inputValue = null
  resultValue = null
  constructor(
    private util: UtilService,
    private toolSrv: ToolService,
    private objSrv: ObjectUtilService,
    private messageSrv: MessageUtilService
  ) { }

  ngOnInit(): void {
  }

  copy(data) {
    this.util.copyToClipboard(data)
    this.messageSrv.success('复制成功')
  }
  clear() {
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
  generateClass(data) {
    data = this.objSrv.parse(data)
    if (!(data instanceof Object)) {
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.generateClass(data)
  }
  /**
   * object递归转class
   * @param data 
   * @returns 
   */
  deepGenerateClass(data) {
    data = this.objSrv.parse(data)
    if (!(data instanceof Object)) {
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.deepGenerateClass(data)

  }
  /**
   * object转interface
   * @param data 
   */
  generateInterface(data) {
    data = this.objSrv.parse(data)
    if (!(data instanceof Object)) {
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.generateInterface(data)

  }
  /**
   * object递归转interface
   * @param data 
   * @returns 
   */
  deepGenerateInterface(data) {
    data = this.objSrv.parse(data)
    if (!(data instanceof Object)) {
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.deepGenerateInterface(data)

  }
  /**
   * 驼峰命名转下划线
   * @param data 
   */
  humpToUnderline(str) {
    if (!this.util.isString(str)) {
      this.messageSrv.warning('请输入正确的字符串格式')
      return null
    }
    this.resultValue = this.toolSrv.humpToUnderline(str)
  }
  /**
   * 下划线转驼峰命名
   * @param data 
   */
  underlineTohump(str) {
    if (!this.util.isString(str)) {
      this.messageSrv.warning('请输入正确的字符串格式')
      return null
    }
    this.resultValue = this.toolSrv.underlineTohump(str)
  }
  switchCase(str) {
    if (!this.util.isString(str)) {
      this.messageSrv.warning('请输入正确的字符串格式')
      return null
    }
    this.resultValue = this.toolSrv.switchCase(str)
  }
  toLowerCase(str) {
    if (!this.util.isString(str)) {
      this.messageSrv.warning('请输入正确的字符串格式')
      return null
    }
    this.resultValue = str.toLowerCase()
  }
  toUpperCase(str) {
    if (!this.util.isString(str)) {
      this.messageSrv.warning('请输入正确的字符串格式')
      return null
    }
    this.resultValue = str.toUpperCase()
  }
  firstCodeUpCase(str) {
    this.resultValue = this.toolSrv.firstCodeUpCase(str)
  }

  /**
   * 颜色(RGB)转16位
   * @param str 
   */
  rgbToHex(str) {
    let input = str.trim().split(/(?<!,\s*)\s+|\n/)
    const reg = new RegExp('[0-9\.]+', 'g')
    
    let temArr = null
    let ret = []
    if(input.length>0){
      input.forEach((val,index) =>{
        const arr = []
        while ((temArr = reg.exec(val)) !== null) {
          arr.push(Number(temArr))
        }
        ret[index] = this.toolSrv.rgbToHex(arr[0], arr[1], arr[2], arr[3])

      })
    }
   
    this.resultValue = ret.join('\n')
  }
  /**
   * 16位转RGB
   * @param hex 
   */
  hexToRgb(hex) {
    let input = hex.split(/[\s\n]/)
    let ret = []
    if(input.length>0){
      input.forEach((val,index)=>{
        ret[index] = this.toolSrv.hexToRgb(val).join(',')
      })
    }
    this.resultValue = ret.join('\n')
  }


  /**
   * excel转json
   * @param data 
   * @returns 
   */
  crvToJson(data) {
    let ret = this.toolSrv.dealExcelToJson(data)
    this.resultValue = JSON.stringify(ret)
  }

  /**
  * 转义特殊字符
  * @param str 
  * @returns 
  */
  escapeRegExp(str) {
    this.resultValue = str.replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\=|\+|\;|\:|\'|\"|\\|\||\,|\<|\.|\>|\/|\?|\[|\]|\{|\}]/g, '\\$&')
  }
  stringfyQueryString(data) {
    data = this.objSrv.parse(data)
    if (!(data instanceof Object)) {
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    this.resultValue = this.toolSrv.stringfyQueryString(data)
  }
  parseQueryString(url) {
    this.resultValue = JSON.stringify(this.toolSrv.parseQueryString(url))
  }
  deepFlatten(url) {
    this.resultValue = this.toolSrv.deepFlatten(url)
  }

  /**
   * 去空格
   * @param data 
   */
  trim(data){
    data = this.objSrv.parse(data)
    if (!(data instanceof Object)) {
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    this.resultValue = JSON.stringify(this.objSrv.trim(data))
  }

  /**
   * 删除空属性 '',[],{},null,undefined，NaN
   * @param data 
   */
  delNull(data){
    data = this.objSrv.parse(data)
    if (!(data instanceof Object)) {
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    this.resultValue = JSON.stringify(this.objSrv.delNull(data))
  }

}
