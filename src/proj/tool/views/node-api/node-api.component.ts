import { HttpResponse } from '@angular/common/http';
import { ApplicationRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AjaxService } from '../../service/ajax.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { Validators } from '@angular/forms';
import { filter, first, mergeMap, takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject, from, of, zip } from 'rxjs';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import invoiceData from '../../../../assets/data/baiduOCR/invoice.json'
import { LibUtilService } from 'src/app/shared/utils/lib-util';
import { ActivatedRoute } from '@angular/router';
import { MenuTree } from 'src/app/biz/model/common/menu.model';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.less']
})
export class NodeApiComponent implements OnInit, OnDestroy {
  @ViewChild('title', { read: ElementRef }) titleEl: ElementRef

  unsub$ = new Subject()

  resultValue: string

  categoryTree:MenuTree[] = [
    {
      title: '语言技术',
      type: 'sub',
      children: [
        {
          title: '文章摘要',
          route: '/tool/home/nodeapi/newsSummary',
          type: 'router'
        },
        {
          title: '评论观点抽取',
          route: '/tool/home/nodeapi/commentTag',
          type: 'router'
        },
      ]
    }, {
      title: '文字识别OCR',
      type: 'sub',
      children: [
        {
          title: '通用文字识别',
          route: '/tool/home/nodeapi/ocrImage',
          type: 'router'
        }, {
          title: '财务票据识别',
          route: '/tool/home/nodeapi/invoiceImage',
          type: 'router'
        }
      ]
    }, {
      title: '其他',
      type: 'sub',
      children: [
        {
          title: '获取网站favicon',
          route: '/tool/home/nodeapi/favicon',
          type: 'router'
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
          valide: [Validators.required],
        }, {
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
      actionName: 'getSummary'
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
          valide: [Validators.required],
        }, {
          controlType: 'dropdown',
          key: 'type',
          label: '类型',
          value: 7,
          options: [
            { name: '酒店', code: 1 },
            { name: 'KTV', code: 2 },
            { name: '丽人', code: 3 },
            { name: '美食餐饮', code: 4 },
            { name: '旅游', code: 5 },
            { name: '健康', code: 6 },
            { name: '教育', code: 7 },
            { name: '商业', code: 8 },
            { name: '房产', code: 9 },
            { name: '汽车', code: 10 },
            { name: '生活', code: 11 },
            { name: '购物', code: 12 },
            { name: '3C', code: 13 },
          ]
        }
      ],
      actionName: 'getCommentTag'
    }, {
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
          valide: [Validators.required],
        }
      ],
      actionName: 'downloadFavicon'
    }, {
      title: '文字识别OCR',
      code: 'ocrImage',
      formData: [
        {
          controlType: 'dropdown',
          key: 'language_type',
          label: '语言',
          value: 'CHN_ENG',
          options: [
            { name: '自动检测', code: 'auto_detect' },
            { name: '中英文混合', code: 'CHN_ENG' },
            { name: '英文', code: 'ENG' },
            { name: '日语', code: 'JAP' },
            { name: '韩语', code: 'KOR' },
            { name: '法语', code: 'FRE' },
            { name: '德语', code: 'GER' },
            { name: '俄语', code: 'RUS' },
            { name: '泰语', code: 'THA' },
            { name: '越南语', code: 'VIE' },
          ],
          valide: [],
        }, {
          controlType: 'radio',
          key: 'detect_direction',
          label: '检测图像朝向',
          value: false,
          options: [
            { name: '是', code: true },
            { name: '否', code: false },
          ],
          valide: [],
        }, {
          controlType: 'radio',
          key: 'type',
          label: '文件格式',
          value: 'image',
          options: [
            { name: '图片', code: 'image' },
            { name: 'pdf', code: 'pdf_file' },
            { name: 'OFD', code: 'ofd_file' },
          ],
          valide: [],
          children: {
            'pdf_file': [
              {
                controlType: 'textbox',
                type: 'number',
                key: 'pdf_file_num',
                label: 'PDF文件页码',
                value: 1,
                options: null,
              }
            ],
            'ofd_file': [
              {
                controlType: 'textbox',
                type: 'number',
                key: 'ofd_file_num',
                label: 'OFD文件页码',
                value: 1,
                options: null,
              }
            ]
          }
        },
        {
          controlType: 'file',
          key: 'fileData',
          label: '选取文件',
          value: null,
          options: null,
          valide: [Validators.required],
        }
      ],
      actionName: 'uploadFiles',
      dealResultName: 'dealOcrImage'
    }, {
      title: '财务票据识别',
      code: 'invoiceImage',
      formData: [
        {
          controlType: 'radio',
          key: 'verify_parameter',
          label: '验真',
          value: false,
          options: [
            { name: '是', code: true },
            { name: '否', code: false },
          ],
          valide: [],
        }, {
          controlType: 'radio',
          key: 'type',
          label: '文件格式',
          value: 'image',
          options: [
            { name: '图片', code: 'image' },
            { name: 'pdf', code: 'pdf_file' },
            { name: 'OFD', code: 'ofd_file' },
          ],
          valide: [],
          children: {
            'pdf_file': [
              {
                controlType: 'textbox',
                type: 'number',
                key: 'pdf_file_num',
                label: 'PDF文件页码',
                value: 1,
                options: null,
              }
            ],
            'ofd_file': [
              {
                controlType: 'textbox',
                type: 'number',
                key: 'ofd_file_num',
                label: 'OFD文件页码',
                value: 1,
                options: null,
              }
            ]
          }
        },
        {
          controlType: 'file',
          key: 'fileData',
          label: '选取文件',
          value: null,
          options: null,
          valide: [Validators.required],
        }
      ],
      actionName: 'uploadFiles',
      dealResultName: 'dealInvoiceExcelData',
      exportName: 'downloadExcel'
    }
  ]
  selOptionItem = null
  fileResData = {} // 数据返回结果-excel用缓存用
  trackByItem(index: number, item: File) { return item?.webkitRelativePath }
  constructor(
    private srv: AjaxService,
    private messageSrv: MessageUtilService,
    private appRef: ApplicationRef,
    public ds: DomSanitizer,
    private libSrv: LibUtilService,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(takeUntil(this.unsub$)).subscribe(v=>{
      let code = v.get('id')
      for(let i = 0; i< this.categoryTree.length; i++){
        for(let j = 0; j< this.categoryTree[i]?.children.length; j++){
          let v = this.categoryTree[i]?.children[j]
          if(v.route.endsWith(code)){
            v.active = true
            this.categoryTree[i].selected = true
          }
        }
      }
      this.selOptionItem = this.options.find(v=>v.code === code)??this.options[0]
      // this.scrollInto()
    })
  }
  ngOnDestroy(): void {
    this.unsub$.next(null)
    this.unsub$.complete()
  }

  copy(data) {
    this.libSrv.copyToClipboard(data)
    this.messageSrv.success('复制成功')
  }
  getDeepItem(data) {
    let ret = {}
    data.forEach(item => {
      if (item.children) {
        let keys = Object.keys(item.children)
        keys.forEach(key => {
          let obj = this.getDeepItem(item.children[key])
          ret = Object.assign(ret, obj)
        })
      }
      ret[item.key] = item.value
      return ret
    })
    return ret
  }
  clear(comp: FormGroupComponent, value: any[]) {
    let obj = this.getDeepItem(value)
    comp.validateForm.patchValue(obj)
    this.resultValue = null
    this.fileResData = {}
  }
  /**
     * 图片压缩-（速度优先-压缩，质量优先-原图）待完善。（修改图片大小）
     * @param w 
     * @param h 
     * @param quality 
     */
  private canvasToBlob(elem, w: number, h: number, quality: number, type): Observable<Blob> {
    return new Observable((observer) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = w
      canvas.height = h
      context.drawImage(elem, 0, 0, w, h)
      canvas.toBlob((b) => {
        observer.next(b)
        observer.complete()
      }, type, quality)
    })
  }
  selectNav(data) {
    if (data.type == 'sub') {
      data.selected = !data.selected
    }
  }
  scrollInto() {
    this.appRef.isStable.pipe(first(isStable => isStable === true)).subscribe(v => {
      this.titleEl.nativeElement.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    })
  }
  delItem(i, validateForm) {
    let values = validateForm.get('fileData')?.value
    
    delete this.fileResData[this.replaceSpecialChar(values[i].name)]
    values.splice(i, 1)
    validateForm.get('fileData').setValue(values)
  }
  run(data, optionItem) {
    this[optionItem.actionName]?.(data, optionItem)
  }
  getSafeUrl = (file) => {
    const url = window.URL.createObjectURL(file)
    return this.ds.bypassSecurityTrustUrl(url)
  }

  downloadFavicon(data) {
    let reg = new RegExp('^(ht|f)tp(s?)://[0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*(:(0-9)*)' + "*(/?)([a-zA-Z0-9-.?,'/\\+&amp;%$#_]*)?")
    let url = data?.url?.trim()
    if (!reg.test(url)) {
      this.messageSrv.warning('请输入正确网址格式，例:http://www.cicode.cn/blog/home')
      return null
    }
    let params = {
      url: url
    }
    this.srv.getFavicon(params).subscribe(v => {
      if (v instanceof HttpResponse) {
        let fileName = v.headers.get('content-disposition')
        this.libSrv.download(v.body, fileName.slice(fileName.indexOf('filename=') + 9))
      }
    })
  }
  getSummary(data) {
    this.srv.getBdData('newsSummary', data).subscribe(res => {
      if (res.isSuccess()) {
        this.resultValue = res.data.summary
      } else {
        this.messageSrv.warning(res.resultMsg)
      }
    })
  }
  getCommentTag(data) {
    this.srv.getBdData('commentTag', data).subscribe(res => {
      if (res.isSuccess()) {
        this.resultValue = JSON.stringify(res.data.items)
      } else {
        this.messageSrv.warning(res.resultMsg)
      }
    })
  }
  readFile(file: File, readerType = 'readAsDataURL'): Observable<{ fileBase64: string, name: string }> {
    return new Observable((observer) => {
      let reader = new FileReader();
      reader[readerType](file);
      reader.onload = (e) => {
        observer.next({
          fileBase64: e.target.result as string,
          name: file.name
        })
        observer.complete()
      }
    })
  }
  replaceSpecialChar(str:string) {
    return str.replace(/[\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\=|\+|\;|\:|\'|\"|\\|\||\,|\<|\.|\>|\/|\?|\[|\]|\{|\}]/g, '')
  }
  /**
   * 读取文件base64
   * @param data 
   * @returns 
   */
  getFileBase64(data) {
    return from(data as File[]).pipe(
      filter(v => !(this.replaceSpecialChar(v.name) in this.fileResData)),
      mergeMap(v => this.readFile(v))
    )

  }
  uploadFiles(data, optionItem) {
    let ret = ''
    this.getFileBase64(data.fileData).pipe(
      mergeMap(v => zip(
        this.srv.getBdData(optionItem.code, { ...data, [data.type]: v.fileBase64, fileData: null }),
        of(v.name))
      )
    ).subscribe({
      next: ([res,name]) => {
        ret += name + '=================\n'
        let d = this[optionItem.dealResultName](res.data.words_result)
        this.fileResData[this.replaceSpecialChar(name)] = d
        ret += d
        this.messageSrv.success(`${name}：处理成功`)
      },
      error: () => { },
      complete: () => {
        this.resultValue = ret
      }
    })
  }
  /**
   * ocrImage-文字通用识别处理
   * @param data 
   * @returns
   */
  dealOcrImage(data, name:string) {
    return data.map(v=>v.words)
  }
  /**
   * 数组或对象返回字符串
   * @param data 
   * @returns 
   */
  toText=(data:any)=>{
    let ret = ''
    if(Array.isArray(data)){
      data.forEach(v=>{
        ret += this.toText(v)
      })
    }else if(data instanceof Object){
      Object.keys(data).forEach(k=>{
        ret += '\n' + k + ': ' + this.toText(data[k])
      })
    }else{
      ret = data
    }
    return ret
  }
  /**
   * 财务税票处理-把返回数据设置成excel数组
   * @param data 
   * @returns 
   */
  dealInvoiceExcelData(arr:any[]) {
    let ret = {}
    arr.forEach((value)=>{
      let invoiceItem = invoiceData.invoice.find(v=>v.code==value.type)?.children
      let resultObj = value.result
      let rows = []
      Object.keys(invoiceItem).forEach((key)=>{
        resultObj[key].forEach((val,index)=>{
          if(rows[index] === undefined){
            rows[index] = {}
          }
          rows[index][invoiceItem[key]] = val?.word
        })
      })
      if(!(value.type in ret)){
        ret[value.type] = []
      }
      ret[value.type] = [...ret[value.type], ...rows]
    })
    return ret
  }
  test(){
    let res = [
      {
        "result": {
          "AmountInWords": [
            {
              "word": "叁仟玖佰玖拾圆整"
            }
          ],
          "InvoiceNumConfirm": [
            {
              "word": "06256007"
            }
          ],
          "CommodityEndDate": [],
          "CommodityStartDate": [],
          "CommodityVehicleType": [],
          "CommodityPrice": [
            {
              "row": "1",
              "word": "273.796407795"
            },
            {
              "row": "2",
              "word": "201.282135922"
            },
            {
              "row": "3",
              "word": "3134.92233009"
            },
            {
              "row": "4",
              "word": "415090"
            }
          ],
          "InvoiceTag": [
            {
              "word": "其他"
            }
          ],
          "NoteDrawer": [
            {
              "word": "管理员"
            }
          ],
          "SellerAddress": [
            {
              "word": "凌云路东西建村嘉苑商场西区负一楼18637529567"
            }
          ],
          "CommodityNum": [],
          "SellerRegisterNum": [
            {
              "word": "92410411MA44PT0DXD"
            }
          ],
          "MachineCode": [
            {
              "word": "499938234399"
            }
          ],
          "Remarks": [],
          "SellerBank": [
            {
              "word": "农行平顶山新华区支行焦店分理处162317010400027"
            }
          ],
          "CommodityTaxRate": [
            {
              "row": "1",
              "word": "3%"
            },
            {
              "row": "2",
              "word": "3%"
            },
            {
              "row": "3",
              "word": "39"
            },
            {
              "row": "4",
              "word": "39"
            }
          ],
          "ServiceType": [
            {
              "word": "日用品食品"
            }
          ],
          "TotalTax": [
            {
              "word": "116.21"
            }
          ],
          "InvoiceCodeConfirm": [
            {
              "word": "041001800104"
            }
          ],
          "CheckCode": [],
          "InvoiceCode": [
            {
              "word": "041001800104"
            }
          ],
          "InvoiceDate": [
            {
              "word": "2018年05月17日"
            }
          ],
          "PurchaserRegisterNum": [
            {
              "word": "114104116897462152"
            }
          ],
          "InvoiceTypeOrg": [
            {
              "word": "河南增值税普通发票"
            }
          ],
          "OnlinePay": [
            {
              "word": "0"
            }
          ],
          "Password": [
            {
              "word": "03*-+9>01-+4*>7/0535531<7+31-3-868<-1*4+10>85<753995595-1/10><<8<07504+1+18<1+23/>+-*/<+150-1201-0+60666016-+8+-"
            }
          ],
          "Agent": [
            {
              "word": "否"
            }
          ],
          "AmountInFiguers": [
            {
              "word": "3990.00"
            }
          ],
          "PurchaserBank": [],
          "Checker": [],
          "City": [],
          "TotalAmount": [
            {
              "word": "3873.79"
            }
          ],
          "CommodityAmount": [
            {
              "row": "1",
              "word": "873.79"
            },
            {
              "row": "2",
              "word": "291.26"
            },
            {
              "row": "3",
              "word": "2135.92"
            },
            {
              "row": "4",
              "word": "572.82"
            }
          ],
          "PurchaserName": [
            {
              "word": "温河区番牧局"
            }
          ],
          "CommodityType": [],
          "Province": [
            {
              "word": "河南省"
            }
          ],
          "InvoiceType": [
            {
              "word": "普通发票"
            }
          ],
          "SheetNum": [
            {
              "word": "第二联：发票联"
            }
          ],
          "PurchaserAddress": [],
          "InvoiceNumDigit": [],
          "CommodityTax": [
            {
              "row": "1",
              "word": "26.21"
            },
            {
              "row": "2",
              "word": "8.74"
            },
            {
              "row": "3",
              "word": "64.08"
            },
            {
              "row": "4",
              "word": "17.18"
            }
          ],
          "CommodityPlateNum": [],
          "CommodityUnit": [
            {
              "row": "1",
              "word": "张"
            },
            {
              "row": "2",
              "word": "肥"
            },
            {
              "row": "3",
              "word": "套"
            },
            {
              "row": "4",
              "word": "个"
            }
          ],
          "Payee": [],
          "CommodityName": [
            {
              "row": "1",
              "word": "*家具*办公桌"
            },
            {
              "row": "2",
              "word": "*家具*办公"
            },
            {
              "row": "3",
              "word": "*家具*沙发、茶几"
            },
            {
              "row": "4",
              "word": "*家具*文件柜"
            }
          ],
          "SellerName": [
            {
              "word": "洛河区新活力办公家具经销部"
            }
          ],
          "InvoiceNum": [
            {
              "word": "06256007"
            }
          ]
        },
        "top": 48,
        "left": 0,
        "probability": 0.7630230784,
        "width": 666,
        "type": "vat_invoice",
        "height": 424
      },{
        "result": {
          "AmountInWords": [
            {
              "word": "叁仟玖佰玖拾圆整"
            }
          ],
          "InvoiceNumConfirm": [
            {
              "word": "06256007"
            }
          ],
          "CommodityEndDate": [],
          "CommodityStartDate": [],
          "CommodityVehicleType": [],
          "CommodityPrice": [
            {
              "row": "1",
              "word": "273.796407795"
            },
            {
              "row": "2",
              "word": "201.282135922"
            },
            {
              "row": "3",
              "word": "3134.92233009"
            },
            {
              "row": "4",
              "word": "415090"
            }
          ],
          "InvoiceTag": [
            {
              "word": "其他"
            }
          ],
          "NoteDrawer": [
            {
              "word": "管理员"
            }
          ],
          "SellerAddress": [
            {
              "word": "凌云路东西建村嘉苑商场西区负一楼18637529567"
            }
          ],
          "CommodityNum": [],
          "SellerRegisterNum": [
            {
              "word": "92410411MA44PT0DXD"
            }
          ],
          "MachineCode": [
            {
              "word": "499938234399"
            }
          ],
          "Remarks": [],
          "SellerBank": [
            {
              "word": "农行平顶山新华区支行焦店分理处162317010400027"
            }
          ],
          "CommodityTaxRate": [
            {
              "row": "1",
              "word": "3%"
            },
            {
              "row": "2",
              "word": "3%"
            },
            {
              "row": "3",
              "word": "39"
            },
            {
              "row": "4",
              "word": "39"
            }
          ],
          "ServiceType": [
            {
              "word": "日用品食品"
            }
          ],
          "TotalTax": [
            {
              "word": "116.21"
            }
          ],
          "InvoiceCodeConfirm": [
            {
              "word": "041001800104"
            }
          ],
          "CheckCode": [],
          "InvoiceCode": [
            {
              "word": "041001800104"
            }
          ],
          "InvoiceDate": [
            {
              "word": "2018年05月17日"
            }
          ],
          "PurchaserRegisterNum": [
            {
              "word": "114104116897462152"
            }
          ],
          "InvoiceTypeOrg": [
            {
              "word": "河南增值税普通发票"
            }
          ],
          "OnlinePay": [
            {
              "word": "0"
            }
          ],
          "Password": [
            {
              "word": "03*-+9>01-+4*>7/0535531<7+31-3-868<-1*4+10>85<753995595-1/10><<8<07504+1+18<1+23/>+-*/<+150-1201-0+60666016-+8+-"
            }
          ],
          "Agent": [
            {
              "word": "否"
            }
          ],
          "AmountInFiguers": [
            {
              "word": "3990.00"
            }
          ],
          "PurchaserBank": [],
          "Checker": [],
          "City": [],
          "TotalAmount": [
            {
              "word": "3873.79"
            }
          ],
          "CommodityAmount": [
            {
              "row": "1",
              "word": "873.79"
            },
            {
              "row": "2",
              "word": "291.26"
            },
            {
              "row": "3",
              "word": "2135.92"
            },
            {
              "row": "4",
              "word": "572.82"
            }
          ],
          "PurchaserName": [
            {
              "word": "温河区番牧局"
            }
          ],
          "CommodityType": [],
          "Province": [
            {
              "word": "河南省"
            }
          ],
          "InvoiceType": [
            {
              "word": "普通发票"
            }
          ],
          "SheetNum": [
            {
              "word": "第二联：发票联"
            }
          ],
          "PurchaserAddress": [],
          "InvoiceNumDigit": [],
          "CommodityTax": [
            {
              "row": "1",
              "word": "26.21"
            },
            {
              "row": "2",
              "word": "8.74"
            },
            {
              "row": "3",
              "word": "64.08"
            },
            {
              "row": "4",
              "word": "17.18"
            }
          ],
          "CommodityPlateNum": [],
          "CommodityUnit": [
            {
              "row": "1",
              "word": "张"
            },
            {
              "row": "2",
              "word": "肥"
            },
            {
              "row": "3",
              "word": "套"
            },
            {
              "row": "4",
              "word": "个"
            }
          ],
          "Payee": [],
          "CommodityName": [
            {
              "row": "1",
              "word": "*家具*办公桌"
            },
            {
              "row": "2",
              "word": "*家具*办公"
            },
            {
              "row": "3",
              "word": "*家具*沙发、茶几"
            },
            {
              "row": "4",
              "word": "*家具*文件柜"
            }
          ],
          "SellerName": [
            {
              "word": "洛河区新活力办公家具经销部"
            }
          ],
          "InvoiceNum": [
            {
              "word": "06256007"
            }
          ]
        },
        "top": 48,
        "left": 0,
        "probability": 0.7630230784,
        "width": 666,
        "type": "vat_invoice",
        "height": 424
      }
    ]
    let d = this.dealInvoiceExcelData(res)
    console.log(this.toText(d))
    this.exportMergesExcel(d)
  }
  downloadExcel(data){
    this.exportMergesExcel(this.fileNameGroupByType(data))
  }
  fileNameGroupByType(data){
    let ret = {}
    Object.keys(data).forEach(namekey=>{
      Object.keys(data[namekey]).forEach(typeKey=>{
        if(!(typeKey in ret)){
          ret[typeKey] = []
        }
        // data[namekey][typeKey].forEach(v=>{
        //   v['图片名称'] = namekey
        // })
        ret[typeKey] = [...ret[typeKey], ...data[namekey][typeKey]]
      })
    })
    return ret
  }
  /**
   * 导出文件 按照type分表 合并单元格
   * @param data 
   */
  exportMergesExcel(data){
    let option = {}
    Object.keys(data).forEach(sheetkey=>{
      let merges=[]
      for(let i = 0, len = data[sheetkey].length; i<len; i++){
        Object.keys(data[sheetkey][i]).forEach((key,keyIndex)=>{
          let t=null
          for(let j = i+1; j < len; j++){
            if(key in data[sheetkey][j]){
              if(i+1 !== j){
                t = {s: {r:i+1, c:keyIndex}, e: {r:j, c:keyIndex}}
              }
              break
            }else if(j==len-1){
              t = {s: {r:i+1, c:keyIndex}, e: {r:len, c:keyIndex}}
            }
          }
          if(t){
            merges.push(t)
          }
        })
      }
      option[sheetkey] = {'!merges': merges}
    })
    
    this.libSrv.transferJSONData(data, option).subscribe(v=>{
      this.libSrv.download(v, 'excel.xlsx')
    })
  }
}
