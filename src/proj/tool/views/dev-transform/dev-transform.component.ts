import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';
import { ToolService } from '../../service/tool.service';

@Component({
  selector: 'app-dev-transform',
  templateUrl: './dev-transform.component.html',
  styleUrls: ['./dev-transform.component.less']
})
export class DevTransformComponent implements OnInit {

  inputValue='165,62,218,0.5'
  resultValue=null
  constructor(private util: UtilService,
    private toolSrv:ToolService) { }

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
    this.resultValue = this.toolSrv.generateClass(data)
  }
  /**
   * object递归转class
   * @param data 
   * @returns 
   */
  deepGenerateClass(data){
    this.resultValue = this.toolSrv.deepGenerateClass(data)
  }
  /**
   * object转interface
   * @param data 
   */
  generateInterface(data){
    this.resultValue = this.toolSrv.generateInterface(data)
  }
  /**
   * object递归转interface
   * @param data 
   * @returns 
   */
  deepGenerateInterface(data){
    this.resultValue = this.toolSrv.deepGenerateInterface(data)
  }
  /**
   * 驼峰命名转下划线
   * @param data 
   */
  humpToUnderline(str){
    this.resultValue = this.toolSrv.humpToUnderline(str)
  }
  /**
   * 下划线转驼峰命名
   * @param data 
   */
  underlineTohump(str){
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
