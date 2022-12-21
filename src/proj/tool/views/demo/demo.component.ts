import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HtmlParserService } from 'src/app/core/services/htmlparser.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {
  @ViewChild('inputEl', { read: ElementRef, static: true })
  inputEl: ElementRef

  inputValue = null
  resultValue = null

  processOption = [
    {
      name: 'filter',
      paramsType: 'Array',
      returnType: 'Array',
      params: ['item', 'index', 'data'],
      fn: "return item/index",
      children:[] // 可嵌套循环调取
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
      name: '正则-array',
      paramsType: 'string',
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
  uuid() {
    console.log(this.util.UUIDGenerator())
  }

  parser() {
    let htmlstr = ``
    let i = htmlstr.indexOf('<body>')
    let lasti = htmlstr.lastIndexOf('</body>')
    if (i > 0) {
      htmlstr = htmlstr.slice(i, lasti + 7)
    }
    let obj = this.htmlPaser.htmlParser(htmlstr)
    this.jsUtil.findItem(obj, v => {
      if (v.attributes.some(val => val.value == 'HotItem-content')) {
        console.log(v)
      }
    })
    console.log(obj)
  }

  /**
   * 流程
   * 正则查找--替换--map--filter--find
   * tree--findItem 
   */
  processMap(v,i) {
    let ret = null, tem = null;
    let item = this.processList.value[i]
    tem = new Function(
      item.value.params.join(','),
      item.fnBody?item.value.fn.replace('fnBody', item.fnBody):item.value.fn)(v, item.inputStr)
    console.log(item.value.name,tem)
    if(i<this.processList.length-1){
      ret = this.processMap(tem,++i)
      return ret
    }else{
      return tem
    }
    
  }
  run() {
    let ret = this.processMap(this.inputValue, 0)
    console.log('结果：',ret)
    this.resultValue = ret
  }
}
