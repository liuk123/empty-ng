import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';
import { ToolService } from '../../service/tool.service';

@Component({
  selector: 'app-dev-transform',
  templateUrl: './dev-transform.component.html',
  styleUrls: ['./dev-transform.component.less']
})
export class DevTransformComponent implements OnInit {

  inputValue='{"user":"liuk123","div":{"dom":"block"},"children":[{"a":"123"}]}'
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

}
