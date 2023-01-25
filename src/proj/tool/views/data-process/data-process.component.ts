import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';
import { ObjectUtilService } from '../../service/object-util.service';
import { BtnDialogComponent } from './btn-dialog/btn-dialog.component';

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

  options = [
    {
      title: '转换',
      children: [
        {
          title: 'JSON.parse',
          inputType: ['String'],
          returnType: ['Array', 'Object'],
          fn:(data)=>{
            return JSON.parse(data)
          },
          desc: 'json转对象或数组'
        },
        {
          title: 'JSON.stringify',
          inputType: ['Array', 'Object'],
          returnType: ['String'],
          fn:(data)=>{
            return JSON.stringify(data)
          },
          desc: '对象或数组转json字符转'
        },
        {
          title: '正则-Array',
          inputType: ['String'],
          returnType: ['Array'],
          formData:[
            {
              code: 'regStr',
              label: '正则',
              desc:'请输入正则表达式',
              value: null
            }
          ],
          fn:(data, {regStr})=>{
            const reg = new RegExp(regStr,'g')
            const arr=[]
            let temArr=null
            while((temArr = reg.exec(data))!==null){
              arr.push(temArr)
            }
            return arr
          },
          desc: '请输入正则表达式'
        },{
          title: '正则-替换',
          inputType: ['String'],
          returnType: ['String'],
          formData:[
            {
              code: 'regStr',
              label: '正则',
              desc:'请输入正则表达式',
              value: null
            },{
              code: 'value',
              label: '替换为',
              desc:'请输入替换内容',
              value: null
            }
          ],
          fn:(data, {regStr, value})=>{
            const reg = new RegExp(regStr,'g')
            return data.replace(reg, value)
          },
          desc: '正则表达式替换'
        },{
          title: 'join',
          inputType: ['Array'],
          returnType: ['String'],
          formData:[
            {
              code: 'value',
              label: '分割符',
              desc:'请输入分割符',
              value: null
            }
          ],
          fn:(data, {value})=>{
            return data.join(value)
          },
          desc: 'join array转string'
        },{
          title: 'split',
          inputType: ['String'],
          returnType: ['Array'],
          formData:[
            {
              code: 'value',
              label: '切割字符',
              desc:'请输入分割符',
              value: null
            }
          ],
          fn:(data, {value})=>{
            return data.split(value)
          },
          desc: 'join String转Array'
        }
      ]
    },
    {
      title: '数据处理',
      children: [
        {
          title: 'filter',
          inputType: ['Array'],
          returnType: ['Array'],
          formData:[
            {
              code: 'fnbody',
              label: '函数体',
              desc:'请输入(v,index)=>{函数体}',
              value: null
            }
          ],
          fn:(data, {fnbody})=>{
            return (new Function('data',`return data.filter((item,index)=>{${fnbody}})`))(data)
          },
          desc: '请输入filter函数体部分'
        },{
          title: 'map',
          inputType: ['Array'],
          returnType: ['Array'],
          formData:[
            {
              code: 'fnbody',
              label: '函数体',
              desc:'请输入(v,index)=>{函数体}',
              value: null
            }
          ],
          fn:(data, {fnbody})=>{
            return (new Function('data',`return data.map((item,index)=>{${fnbody}})`))(data)
          },
          desc: '请输入map函数体部分'
        }
      ]
    }
  ]
  processData = []

  validateForm!: FormGroup;
  get processList() {
    return this.validateForm.get('processList') as FormArray
  }

  constructor(
    private util: UtilService,
    private fb: FormBuilder,
    private messageSrv: MessageUtilService,
    private objectUtil: ObjectUtilService,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      processList: this.fb.array([])
    });
  }
  // 路由守卫调用
  isFormDirty() {
    return this.validateForm.dirty
  }
  addItem({form,data}) {
    this.processList.push(this.fb.group(form))
    this.processData.push({...data})
  }
  removeItem(i){
    this.processList.removeAt(i)
    this.processData.splice(i,1)
  }
  copy(data) {
    this.util.copyToClipboard(data)
  }
  returnFn(data){
    return (new Function(`return ${data}`))()
  }

  /**
   * 流程
   * 正则查找--替换--map--filter--find
   */
  processMap(v, i, inputType) {
    let ret = null;
    let formItem = this.processList.value[i]
    let optionItem = this.objectUtil.findItem(this.options, v=>v.title == formItem.name)
    if(!optionItem.inputType.some(value=>inputType.includes(value))){
      this.messageSrv.error(`${optionItem.title}接收数据格式错误`)
    }
    if(i<this.processList.length-1){
      ret = this.processMap(optionItem.fn(v,formItem), ++i, optionItem.returnType)
      return ret
    }else{
      return optionItem.fn(v,formItem)
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
    let str = JSON.stringify(this.processList.value)
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
    if(!(obj instanceof Object)){
      this.messageSrv.error('请输入正确的JSON格式')
      return null
    }
    this.clearProcessList()
    obj.forEach(v=>{
      let tem = this.objectUtil.findItem(this.options, val=>val.title == v.name)
      if(tem){
        this.processData.push(tem)
        this.processList.push(this.fb.group(v))
      }

    })
  }
  clearProcessList(){
    this.processList.clear()
    this.processData = []
  }

  opendialog(title, params){
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: BtnDialogComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzComponentParams: {
        params: params
      },
      nzFooter: null,
    })
    modal.afterClose.subscribe(v=>{
      if(v){
        let value={name: v.title}
        v.formData?.forEach(item=>{
          value[item.code]= item.value
        })
        
        this.addItem({form:value, data:v})
      }
    })
  }
}
