import { HttpResponse } from '@angular/common/http';
import { ApplicationRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';
import { AjaxService } from '../../service/ajax.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.less']
})
export class NodeApiComponent implements OnInit {
  @ViewChild('title', {read: ElementRef}) titleEl: ElementRef

  resultValue: string
  validateForm!: FormGroup;

  categoryTree=[
    {
      title: '文本处理',
      type: 'sub',
      children: [
        {
          title: '文章摘要',
          code: 'newsSummary',
          // type: 'router'
        },{
          title: '评论观点抽取',
          code: 'commentTag'
        },
      ]

    },{
      title: '其他',
      type: 'sub',
      children: [
        {
          title: '获取网站favicon',
          code: 'favicon'
        }
      ]

    }
  ]

  options = [
    {
      title: '文章概要',
      code: 'newsSummary',
      formData: [
        {
          type: 'textarea',
          code: 'content',
          label: '内容（必填）',
          value: null,
          option: null,
          valide:[Validators.required],
        },{
          type: 'input',
          code: 'title',
          label: '标题',
          value: null,
          option: null,
        },
        {
          type: 'number',
          code: 'max_summary_len',
          label: '最大长度',
          value: 200,
          option: null,
        }
      ],
      action: this.getSummary.bind(this)
    },
    {
      title: '评论观点抽取',
      code: 'commentTag',
      formData: [
        {
          type: 'textarea',
          code: 'text',
          label: '评论（必填）',
          value: null,
          option: null,
          valide:[Validators.required],
        },{
          type: 'select',
          code: 'type',
          label: '类型',
          value: 7,
          option:[
            {name: '酒店', value: 1},
            {name: 'KTV', value: 2},
            {name: '丽人', value: 3},
            {name: '美食餐饮', value: 4},
            {name: '旅游', value: 5},
            {name: '健康', value: 6},
            {name: '教育', value: 7},
            {name: '商业', value: 8},
            {name: '房产', value: 9},
            {name: '汽车', value: 10},
            {name: '生活', value: 11},
            {name: '购物', value: 12},
            {name: '3C', value: 13},
          ]
        }
      ],
      action: this.getCommentTag.bind(this)
    },{
      title: '获取网站favicon',
      code: 'favicon',
      formData: [
        {
          type: 'input',
          code: 'url',
          label: 'url（必填）',
          value: null,
          option: null,
          valide:[Validators.required],
        }
      ],
      action: this.downloadFavicon.bind(this)
    },
  ]
  selOptionItem=this.options[0]
  constructor(
    private util: UtilService,
    private jsUtil: JsUtilService,
    private srv: AjaxService,
    private messageSrv: MessageUtilService,
    private fb: FormBuilder,
    private appRef: ApplicationRef
  ) { }
  ngOnInit(): void {
    this.setItem(this.options[0].formData)
  }

  // 路由守卫调用
  isFormDirty() {
    return this.validateForm?.dirty
  }
  setItem(data) {
    let f = {}
    data.forEach(v=>{
      f[v.code]= [v.value, v.valide]
    })
    this.validateForm = this.fb.group(f)
  }

  copy(data) {
    this.util.copyToClipboard(data)
  }

  run() {
    Object.values(this.validateForm.controls).forEach(v=>{
      v.markAsDirty();
      v.updateValueAndValidity()
    })
    if(!this.validateForm.valid){
      return null
    }
    let formItem = this.validateForm.value
    this.selOptionItem.action(formItem)
  }


  downloadFavicon(data){
    let reg = new RegExp('^(ht|f)tp(s?)://[0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*(:(0-9)*)' + "*(/?)([a-zA-Z0-9-.?,'/\\+&amp;%$#_]*)?")
    let url = data?.url?.trim()
    if(!reg.test(url)){
      this.messageSrv.warning('请输入正确网址格式，例:http://www.cicode.cn/blog/home')
      return null
    }
    let params = {
      url: url
    }
    this.srv.getFavicon(params).subscribe(v=>{
      if(v instanceof HttpResponse){
        let fileName =v.headers.get('content-disposition')
        this.util.download(v.body, fileName.slice(fileName.indexOf('filename=')+9))
      }
    })
  }
  getSummary(data){
    this.srv.getBdData(data, 'newsSummary').subscribe(res=>{
      if(res.isSuccess()){
        this.resultValue = res.data.summary
      }else{
        this.messageSrv.warning(res.resultMsg)
      }
    })
  }
  getCommentTag(data){
    this.srv.getBdData(data, 'commentTag').subscribe(res=>{
      if(res.isSuccess()){
        this.resultValue = res.data.summary
      }else{
        this.messageSrv.warning(res.resultMsg)
      }
    })
  }
  selectNav(data){
    if(data.type=='sub'){
      data.selected=!data.selected
    }else{
      this.selOptionItem=this.options.find(v=>v.code===data.code)
      this.jsUtil.loopTree(this.categoryTree, (v)=>{
        if(v.type!=='sub'){
          v.active = v.code == this.selOptionItem.code
        }
      })
      this.scrollInto()
      this.setItem(this.selOptionItem.formData)
    }
  }
  scrollInto() {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      this.titleEl.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    })
  }
  
}
