import { HttpResponse } from '@angular/common/http';
import { ApplicationRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';
import { AjaxService } from '../../service/ajax.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { filter, first, mergeMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, from, of, zip } from 'rxjs';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.less']
})
export class NodeApiComponent implements OnInit {
  @ViewChild('title', {read: ElementRef}) titleEl: ElementRef

  resultValue: string

  categoryTree=[
    {
      title: '语言技术',
      type: 'sub',
      children: [
        {
          title: '文章摘要',
          code: 'newsSummary'
        },
        {
          title: '评论观点抽取',
          code: 'commentTag'
        },
      ]
    },{
      title: '文字识别OCR',
      type: 'sub',
      children: [
        {
          title: '通用文字识别',
          code: 'ocrImage'
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
          controlType: 'textarea',
          key: 'content',
          label: '内容（必填）',
          value: null,
          options: null,
          valide:[Validators.required],
        },{
          controlType: 'textbox',
          type: 'text',
          key: 'title',
          label: '标题',
          value: null,
          options: null,
        },
        {
          controlType: 'textbox',
          type: 'number',
          key: 'max_summary_len',
          label: '最大长度',
          value: 200,
          options: null,
        }
      ],
      action: this.getSummary.bind(this)
    },
    {
      title: '评论观点抽取',
      code: 'commentTag',
      formData: [
        {
          controlType: 'textarea',
          key: 'text',
          label: '评论（必填）',
          value: null,
          options: null,
          valide:[Validators.required],
        },{
          controlType: 'dropdown',
          key: 'type',
          label: '类型',
          value: 7,
          options:[
            {name: '酒店', code: 1},
            {name: 'KTV', code: 2},
            {name: '丽人', code: 3},
            {name: '美食餐饮', code: 4},
            {name: '旅游', code: 5},
            {name: '健康', code: 6},
            {name: '教育', code: 7},
            {name: '商业', code: 8},
            {name: '房产', code: 9},
            {name: '汽车', code: 10},
            {name: '生活', code: 11},
            {name: '购物', code: 12},
            {name: '3C', code: 13},
          ]
        }
      ],
      action: this.getCommentTag.bind(this)
    },{
      title: '获取网站favicon',
      code: 'favicon',
      formData: [
        {
          controlType: 'textbox',
          type: 'text',
          key: 'url',
          label: 'url（必填）',
          value: null,
          options: null,
          valide:[Validators.required],
        }
      ],
      action: this.downloadFavicon.bind(this)
    },{
      title: '图片',
      code: 'ocrImage',
      formData: [
        {
          controlType: 'dropdown',
          key: 'language_type',
          label: '语言',
          value: 'CHN_ENG',
          options:[
            {name: '自动检测', code: 'auto_detect'},
            {name: '中英文混合', code: 'CHN_ENG'},
            {name: '英文', code: 'ENG'},
            {name: '日语', code: 'JAP'},
            {name: '韩语', code: 'KOR'},
            {name: '法语', code: 'FRE'},
            {name: '德语', code: 'GER'},
            {name: '俄语', code: 'RUS'},
            {name: '泰语', code: 'THA'},
            {name: '越南语', code: 'VIE'},
          ],
          valide:[],
        },{
          controlType: 'radio',
          key: 'detect_direction',
          label: '检测图像朝向',
          value: false,
          options:[
            {name: '是', code: true},
            {name: '否', code: false},
          ],
          valide:[],
        },{
          controlType: 'radio',
          key: 'type',
          label: '文件格式',
          value: 'image',
          options:[
            {name: '图片', code: 'image'},
            {name: 'pdf', code: 'pdf_file'},
          ],
          valide:[],
        },
        {
          controlType: 'file',
          key: 'fileData',
          label: '选取文件',
          value: null,
          options: null,
          valide:[Validators.required],
        }
      ],
      action: this.uploadFiles.bind(this)
    }
  ]
  selOptionItem=this.options[0]
  fileRetData= {}
  trackByItem(index: number, item: File) { return item.webkitRelativePath }
  constructor(
    private util: UtilService,
    private jsUtil: JsUtilService,
    private srv: AjaxService,
    private messageSrv: MessageUtilService,
    private fb: FormBuilder,
    private appRef: ApplicationRef,
    public ds: DomSanitizer
  ) { }
  ngOnInit(): void {
  }

  copy(data) {
    this.util.copyToClipboard(data)
    this.messageSrv.success('复制成功')
  }
  clear(formGroup){
    formGroup.resetForm()
    this.resultValue = null
    this.fileRetData = {}
  }

  run(data) {
    let params = {}
    Object.keys(data).forEach(key=>{
      if(data[key]!=null&&data[key]!==''){
        params[key] = data[key]
      }
    })
    this.selOptionItem.action(params)
  }
  getSafeUrl=(file)=>{
    const url = window.URL.createObjectURL(file)
    return this.ds.bypassSecurityTrustUrl(url)
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
    this.srv.getBdData('newsSummary', data).subscribe(res=>{
      if(res.isSuccess()){
        this.resultValue = res.data.summary
      }else{
        this.messageSrv.warning(res.resultMsg)
      }
    })
  }
  getCommentTag(data){
    this.srv.getBdData('commentTag', data).subscribe(res=>{
      if(res.isSuccess()){
        this.resultValue = JSON.stringify(res.data.items)
      }else{
        this.messageSrv.warning(res.resultMsg)
      }
    })
  }
  readFile(file, readerType='readAsDataURL'): Observable<{file: string, name: string}>{
    return new Observable((observer)=>{
      let reader = new FileReader();
      reader[readerType](file);
      reader.onload=(e)=>{
        observer.next({
          file: e.target.result as string,
          name: file.name
        })
        observer.complete()
      }
    })
  }
  replaceSpecialChar(str){
    return str.replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\=|\+|\;|\:|\'|\"|\\|\||\,|\<|\.|\>|\/|\?|\[|\]|\{|\}]/g,'')
  }
  getFileBase64(data){
    let list$ = from(data.fileData as File[]).pipe(
      filter(v=>!(this.replaceSpecialChar(v.name) in this.fileRetData))
    )
    return list$.pipe(
      mergeMap(v=>this.readFile(v))
    )
  }
  uploadFiles(data){
    let ret = ''
    this.getFileBase64(data).pipe(
      mergeMap(({file,name})=>{
        let params={
          language_type: data.language_type,
          detect_direction: data.detect_direction,
          [data.type]: encodeURI(file)
        }
        return zip(this.srv.getBdData('ocrImage', params), of(name))
      })
    ).subscribe(
      ([res,name])=>{
        if(res.isSuccess()){
          let d = ''
          res.data.words_result.forEach(v=>{
            d+=v.words+'\n'
          })
          
          this.fileRetData[this.replaceSpecialChar(name)] = d
          ret += name + '=================\n'
          ret += d
          this.messageSrv.success(`${name}：处理成功`)
        }else{
          this.messageSrv.warning(name, res.resultMsg)
        }
      },
      err=>{},
      ()=>{
        this.resultValue = ret
      }
    )
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
    }
  }
  scrollInto() {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      this.titleEl.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    })
  }
  delItem(i, validateForm){
    let value = validateForm.get('fileData')?.value
    value.splice(i,1)
    validateForm.get('fileData').setValue(value)
  }
}
