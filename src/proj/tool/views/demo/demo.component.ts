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
      params: ['item', 'index', 'data'],
      fn: "return item/index",
      children:[]
    },
    {
      name: '正则-array',
      paramsType: 'string',
      returnType: 'Array',
      params: ['item'],
      fn: "return item/1",
      condition:{
        reg: ''
      },
      children:[]
    },
    {
      name: '正则-string',
      paramsType: 'string',
      returnType: 'string',
      params: ['item'],
      fn: "return item/1",
      condition:{
        reg: ''
      },
      children:[]
    },
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
  // 路由守卫调用
  isFormDirty() {
    return this.validateForm.dirty
  }
  addItem() {
    this.processList.push(this.fb.group({
      name: 'map'
    }))
    // this.validateForm.markAsPristine()
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
  processMap(v) {
    let result = v
    this.processOption.forEach(item => {
      result = new Function(item.params.join(','), item.fn)(result)
    })
    return result
  }
  regRex() {
    let ret = this.processMap(this.inputValue)
    console.log(ret)
  }
}
