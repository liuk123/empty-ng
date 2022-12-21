import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HtmlParserService } from 'src/app/core/services/htmlparser.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-data-process',
  templateUrl: './data-process.component.html',
  styleUrls: ['./data-process.component.less']
})
export class DataProcessComponent implements OnInit {

  @ViewChild('inputEl', { read: ElementRef, static: true })
  inputEl: ElementRef

  inputValue = null
  resultValue = null

  processOption = [
    {
      name: 'JSON.parse',
      paramsType: 'String',
      returnType: 'Array',
      params: ['data'],
      fn: `return JSON.parse(data)`,
      inputStr: null,
      fnBody: null,
      desc: 'string转数组对象'
    },
    {
      name: 'JSON.stringify',
      paramsType: 'Array',
      returnType: 'String',
      params: ['data'],
      fn: `return JSON.stringify(data)`,
      inputStr: null,
      fnBody: null,
      desc: '数组对象转string'
    },
    {
      name: 'filter',
      paramsType: 'Array',
      returnType: 'Array',
      params: ['data', 'inputStr'],
      fn: `return data.filter(v=>fnBody)`,
      inputStr: null,
      fnBody: 'Number(v[0])>10',
      desc: '请输入filter的函数体'
    },
    {
      name: 'map',
      paramsType: 'Array',
      returnType: 'Array',
      params: ['data', 'inputStr'],
      fn: `return data.map(v=>fnBody)`,
      inputStr: null,
      fnBody: 'v[0]',
      desc: '请输入map的函数体'
    },
    {
      name: '正则return array',
      paramsType: 'String',
      returnType: 'Array',
      params: ['item','regStr'],
      fn: `const reg = new RegExp(regStr,'g')
        const arr=[]
        let temArr=null
        while((temArr = reg.exec(item))!==null){
          arr.push(temArr)
        }
        return arr`,
      inputStr: '[0-9]+',
      desc: '请输入正则表达式'
    }
  ]

  validateForm!: FormGroup;
  get processList() {
    return this.validateForm.get('processList') as FormArray
  }

  constructor(
    private util: UtilService,
    private htmlPaser: HtmlParserService,
    private jsUtil: JsUtilService,
    private fb: FormBuilder,
    private messageSrv: MessageUtilService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      processList: this.fb.array([])
    });
  }
  setInputValue(i){
    (this.processList.controls[i] as FormGroup).controls.inputStr.setValue(this.processList.value[i].value.inputStr);
    (this.processList.controls[i] as FormGroup).controls.fnBody.setValue(this.processList.value[i].value.fnBody)
  }
  // 路由守卫调用
  isFormDirty() {
    return this.validateForm.dirty
  }
  addItem() {
    this.processList.push(this.fb.group({
      value: null,
      inputStr: null,
      fnBody: null,
    }))
  }
  removeItem(i){
    this.processList.removeAt(i)
  }
  copy(data) {
    this.util.copyToClipboard(data)
  }

  /**
   * 流程
   * 正则查找--替换--map--filter--find
   */
  processMap(v, i, paramsType) {
    let ret = null, tem = null;
    let item = this.processList.value[i]
    if(item.value.paramsType!=paramsType){
      this.messageSrv.error(`${item.value.name}接收数据格式错误`)
    }
    tem = new Function(
      item.value.params.join(','),
      item.fnBody?item.value.fn.replace('fnBody', item.fnBody):item.value.fn)(v, item.inputStr)
    console.log(item.value.name,tem)
    if(i<this.processList.length-1){
      ret = this.processMap(tem, ++i, item.value.returnType)
      return ret
    }else{
      return tem
    }
    
  }
  run() {
    let ret = this.processMap(this.inputValue, 0, 'String')
    console.log('结果：',ret)
    this.resultValue = ret
  }
}
