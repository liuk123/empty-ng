import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';
import { ObjectUtilService } from '../../service/object-util.service';
import { RadioDialogComponent } from './radio-dialog/radio-dialog.component';

@Component({
  selector: 'app-data-process',
  templateUrl: './data-process.component.html',
  styleUrls: ['./data-process.component.less']
})
export class DataProcessComponent implements OnInit {

  // @ViewChild('inputEl', { read: ElementRef, static: true })
  // inputEl: ElementRef

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
            return this.objectUtil.parse(data)
          },
          desc: 'json转对象或数组',
          md:''
        },
        {
          title: 'JSON.stringify',
          inputType: ['Array', 'Object'],
          returnType: ['String'],
          fn:(data)=>{
            // let tem = this.objectUtil.parse(data)
            return JSON.stringify(data)
          },
          desc: '对象或数组转json字符转',
          md:''
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
          desc: '请输入正则表达式',
          md:''
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
              value: ''
            }
          ],
          fn:(data, {regStr, value})=>{
            const reg = new RegExp(regStr,'g')
            return data.replace(reg, value)
          },
          desc: '正则表达式替换',
          md:''
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
            // let tem = this.objectUtil.parse(data)
            return data.join(value)
          },
          desc: 'join array转string',
          md:''
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
          desc: 'join String转Array',
          md:''
        }
      ]
    },
    {
      title: 'array处理',
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
            // let tem = this.objectUtil.parse(data)
            return (new Function('data',`return data.filter((v,index)=>{${fnbody}})`))(data)
          },
          desc: '请输入filter函数体部分',
          md:'(v,index)=>{函数体}   \n 必须有return 参数v和index'
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
            // let tem = this.objectUtil.parse(data)
            return (new Function('data',`return data.map((v,index)=>{${fnbody}})`))(data)
          },
          desc: '请输入map函数体部分',
          md:'(v,index)=>{函数体}   \n 必须有return 参数v和index'
        }
      ]
    },
    {
      title: 'tree处理',
      children: [
        {
          title: '去空格',
          inputType: ['Array', 'Object'],
          returnType: ['Array', 'Object'],
          fn:(data)=>{
            // let tem = this.objectUtil.parse(data)
            return this.objectUtil.trim(data)
          },
          desc: '删除前后空格',
          md:''
        },{
          title: '删除空属性',
          inputType: ['Array', 'Object'],
          returnType: ['Array', 'Object'],
          fn:(data)=>{
            // let tem = this.objectUtil.parse(data)
            return this.objectUtil.delNull(data)
          },
          desc: '删除空属性',
          md:'\'\',[],{},null,undefined,NaN'
        },{
          title: '删除',
          inputType: ['Array', 'Object'],
          returnType: ['Array', 'Object'],
          formData:[
            {
              code: 'inputValue',
              label: '条件',
              desc:'[{id:1},{id:3},{id:5,pid:6}]',
              value: null
            }
          ],
          fn:(data, {inputValue})=>{
            let input = this.objectUtil.parse(inputValue)
            // let temData= this.objectUtil.parse(data)
            return this.objectUtil.rmSomeObj(data, input)
          },
          desc: '删除符合条件的所有元素',
          md: "输入  \n```\n[{id:1,name: '111'},{id:2,name: '111'},{id:2,name: '112'},{id:3,name: '111'},]\n```  \n 条件  \n```\n[{id:1}, {id: 2, name: '111'}]\n```  \n 输出  \n```\n[{\"id\":2,\"name\":\"112\"},{\"id\":3,\"name\":\"111\"}]\n```"
        },{
          title: '数组组成tree',
          inputType: ['Array'],
          returnType: ['Array'],
          fn:(data)=>{
            // let tem = this.objectUtil.parse(data)
            return this.objectUtil.setTree(data)
          },
          desc: '{id,pid,children}[] 数组',
          md:"把含有id和pid的数组，转换成tree结构数据  \n输入  \n ```\n[{name:'liuk', id: 1, pid: 2}, {name:'男', id: 2}] \n```   \n输出  \n ```\n[{\"name\":\"男\",\"id\":2,\"children\":[{\"name\":\"liuk\",\"id\":1,\"pid\":2,\"children\":null}]}]\n```"
        },{
          title: '替换属性',
          inputType: ['Array', 'Object'],
          returnType: ['Array', 'Object'],
          formData:[
            {
              code: 'inputValue',
              label: '参数',
              desc:'{inputValue: "value"}  把inputValue替换为value',
              value: null
            }
          ],
          fn:(data, {inputValue})=>{
            let input = this.objectUtil.parse(inputValue)
            // let temData= this.objectUtil.parse(data)
            return this.objectUtil.replaceObjKey(data, input)
          },
          desc: '替换树中的属性',
          md: "输入`[{a:1,children1:[{b:{v:12}}]}]` 参数`{v:'aad'}`, 输出 `[{\"a\":1,\"children1\":[{\"b\":{\"aad\":12}}]}]`"
        },{
          title: 'tree中Number处理',
          inputType: ['Array', 'Object'],
          returnType: ['Array', 'Object'],
          formData:[
            {
              code: 'fnbody',
              label: '函数体',
              desc:'请输入(v)=>{函数体}',
              value: null
            }
          ],
          fn:(data, {fnbody})=>{
            // let temData= this.objectUtil.parse(data)
            let fn = new Function('v', fnbody)
            return this.objectUtil.oparateTree(data, {numfn: fn})
          },
          desc: 'tree中Number处理',
          md: "输入:`{input:12}`\n  条件 `return v*10+'px'`\n  输出 `{\"input\":\"120px\"}`"
        },{
          title: 'tree中String处理',
          inputType: ['Array', 'Object'],
          returnType: ['Array', 'Object'],
          formData:[
            {
              code: 'fnbody',
              label: '函数体',
              desc:'请输入(v)=>{函数体}',
              value: null
            }
          ],
          fn:(data, {fnbody})=>{
            // let temData= this.objectUtil.parse(data)
            let fn = new Function('v', fnbody)
            return this.objectUtil.oparateTree(data, {strfn: fn})
          },
          desc: 'tree中String处理',
          md: "输入:`{input:\"a\"}`\n  条件 `return v.toUpperCase()`\n  输出 `{\"input\":\"A\"}`"
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
    this.messageSrv.success('复制成功')
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
    if(!optionItem.inputType.some(value=>!inputType||inputType.includes(value))){
      this.messageSrv.warning(`${optionItem.title}接收数据格式错误`)
    }
    if(i<this.processList.length-1){
      ret = this.processMap(optionItem.fn(v,formItem), ++i, optionItem.returnType) 
    }else{
      ret = optionItem.fn(v,formItem)
    }
    console.log(formItem.name+ '：',ret)
    return ret
  }
  run() {
    let ret = this.processMap(this.inputValue, 0, 'String')
    let tem = null
    if(this.objectUtil.isArray(ret)||this.objectUtil.isObject(ret)){
      tem = JSON.stringify(ret)
    }
    this.resultValue = tem??ret
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
      this.messageSrv.warning('请输入正确的JSON格式')
      return null
    }
    if(!(obj instanceof Object)){
      this.messageSrv.warning('请输入正确的JSON格式')
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
    this.modal.create({
      nzTitle: title,
      nzWidth: '60em',
      nzContent: RadioDialogComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
      nzData: {
        params: params
      },
      nzOnOk: (component: any) => {
        if(component.value){
          let value={name: component.value.title}
          component.value.formData?.forEach(item=>{
            value[item.code]= item.value
          })
          
          this.addItem({form:value, data:component.value})
        }
      }
    })
  }
}
