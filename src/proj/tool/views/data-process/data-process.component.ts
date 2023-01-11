import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
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
  importValue = null

  processOption = [
    {
      name: 'JSON.parse',
      paramsType: 'String',
      returnType: 'Array',
      params: ['data'],
      fn: `return JSON.parse(data)`,
      inputStr: null,
      inputStr1: null,
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
      inputStr1: null,
      fnBody: null,
      desc: '数组对象转string'
    },
    {
      name: 'filter',
      paramsType: 'Array',
      returnType: 'Array',
      params: ['data', 'inputStr'],
      fn: `return data.filter((v,index)=>{fnBody})`,
      inputStr: null,
      inputStr1: null,
      fnBody: 'Number(v)>10',
      desc: '请输入filter的函数体(v,index)'
    },
    {
      name: 'map',
      paramsType: 'Array',
      returnType: 'Array',
      params: ['data', 'inputStr'],
      fn: `return data.map((v,index)=>{fnBody})`,
      inputStr: null,
      inputStr1: null,
      fnBody: 'v[0]',
      desc: '请输入map的函数体(v,index)'
    },
    {
      name: '正则-array',
      paramsType: 'String',
      returnType: 'Array',
      params: ['data','regStr'],
      fn: `const reg = new RegExp(regStr,'g')
        const arr=[]
        let temArr=null
        while((temArr = reg.exec(data))!==null){
          arr.push(temArr)
        }
        return arr`,
      inputStr: '[0-9]+',
      inputStr1: null,
      desc: '请输入正则表达式'
    },
    {
      name: '正则-替换',
      paramsType: 'String',
      returnType: 'String',
      params: ['data', 'inputStr', 'inputStr1'],
      fn: `
        const reg = new RegExp(inputStr,'g')
        return data.replace(reg,inputStr1)
      `,
      inputStr: '[0-9]+',
      inputStr1: '',
      fnBody: null,
      desc: '请分别输入正则表达式和替换对象'
    },
    {
      name: 'Array-join',
      paramsType: 'Array',
      returnType: 'String',
      params: ['data', 'inputStr'],
      fn: `return data.join(inputStr)`,
      inputStr: '',
      inputStr1: null,
      fnBody: null,
      desc: '请输入分隔符'
    }
  ]

  validateForm!: FormGroup;
  get processList() {
    return this.validateForm.get('processList') as FormArray
  }

  constructor(
    private util: UtilService,
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
    (this.processList.controls[i] as FormGroup).controls.inputStr1.setValue(this.processList.value[i].value.inputStr1);
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
      inputStr1: null,
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
      item.fnBody?item.value.fn.replace('fnBody', item.fnBody):item.value.fn)(v, item.inputStr,item.inputStr1)
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
  /**
   * 导出配置
   * @param data 
   */
  exportData(){
    let ret = this.processList.value.map(v=>({
      name: v.value.name,
      inputStr: v.inputStr,
      inputStr1: v.inputStr1,
      fnBody: v.fnBody
    }))
    let str = JSON.stringify(ret)
    this.importValue = str
    this.copy(str)
  }
  /**
   * 导入配置
   */
  importData(data){
    let obj
    try{
      obj=JSON.parse(data)
    }catch (e){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    if(!(data instanceof Object)){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    this.processList.clear()
    obj.forEach(v=>{
      this.processList.push(this.fb.group({
        inputStr: v.inputStr,
        inputStr1: v.inputStr1,
        fnBody: v.fnBody,
        value: this.processOption.find(item => item.name === v.name)
      }))
    })
  }
  clearProcessList(){
    this.processList.clear()
  }
}
