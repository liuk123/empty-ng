import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation } from '../model/navigation';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation-bookmark',
  templateUrl: './navigation-bookmark.component.html',
  styleUrls: ['./navigation-bookmark.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBookmarkComponent implements OnInit {

  categoryData = []
  categoryTree = []
  data: Navigation[] = [
    {
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACU0lEQVQ4jZWS3U/SURzGv+f8Xnh/CRVUMJhogK/DtFytNau/r4tu2loX9Ve0btpsWRoKEyVQovAFElARkR/8Dud8Txe1ttq68Nlz+TwXz2cP4eercB2pEvm1C8zsp9azTpd9LDy6nc7fWZ7L7RYBYGrmVmp9e34hcXRQvWp3lpbndYtGpRCaSmPxiEJJfrd4/0FycyMbDPm9Xlf6c/bhyuJOJu9y2UNjAVWhUgiKgpu93tf9skSRSEQ21jILi/GTSq3daidvx9dWN2fmJjrtzo9KnZk9FJxKFKpCohNBhZJiobx0dzqb3hseHnC77TuZwvK92UKu5HRaR0YGVIVIFFQiZ6ZZLh1LxOhkMJ36MjM33qidXbU707Pjm+u7sfhN48qon5wxs4fIKQquUBmOBCiFcqkyn4zmc9+G/B6X05rPfU8uTpb2Dx0OSyDgVShIwSmiYIwdH9allOGIP5ctxeKhs8aF0enG4sFspjgeHTGM7mmjyRhDFKS594r8gSz/A58ASAACAKCCEP/EiOq0+KYEa7FmAQB0z6RiGzTP87LfAgCKyFFwFOKXGWO20ZWXr98Vq3awhqTmP7oYev7ijW30ETMZCkFRCESByCVyxH7XMBDUrU8fKocHPVMaPXFSraQ+vudIDcNA7JN65hkAgJRACEh52TY63BdMPDYu67W9twTk4MQTpy9YLazaoOZ220lt6+nvuQRAQrfLGo3WebOt6+rQoIcQ0jhtmWbf63H4/TdsNl2V4q+3ahoZ8DmcDp0q1GbVAUBTvUKgbtF0jUjkPwG2vVJFCft6aQAAAABJRU5ErkJggg==",
      "title": "douban.fM",
      "descItem": "豆瓣FM",
      "link": "https://douban.fm",
      "type": "link"
    },
    {
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC3ElEQVQ4jVWTTWucZRiFz3k+3ndsMB+LGBHcVdxYf4ABbUUDAcFQmRkbZ5I0ECm4KSrWRQR/gNCtlNKPickkRFoXliD4AZVCcV3cdOOmi7TaWmvIzLzPcx8XmUI8q3tzweFwXwQAASQgAKiaizPOc1nCG9nyFEh5x12CN53yBXbXfj7MEMM8mpsbf/bI+HmQbQ/6yjIEGCQSZPQeJiUAV9z9fz/lj9uPAYACiLm5sTwy/r33cbo/6FUUDZAXSQAgQEAm0JVF6ZSqW1T/PXS79x0B5drYee/DdH/Qz2UoYlHEsohFKEP0ZYwegAPoCVh/0BuwKKcrhXMEFKrGwlsiFpEzIvlA0h0DDCAdkCH1PPm2STWRLjrvcn9/Jd79/eqXgAv0XPZFwVwNdnzSCrcv3cOh7J+cb4ci3vE+fAKoyCmfKbY6F/uND1qrL7/yWpBwwlKqcpXOhe31e+nUYsOce8aB/yinV3PKvwH8g8F/VvX2WuXWxmZqtusuhCsyPXQmez5nM2XtaXa2RAjv0PvPfVFcczGerH27vpOZaqk3OFNubWymRqvhYlxLZkyWJwLIKgRfVrDTvLbzBYAFAEjN1oJCOK3jxwO63/xEwPrNdt3F2MnZokki6YMn/8wpTxWhWE3zSy8x+F9cxe/YvdipGu3JJxMTY6PAX+kAXstm0SybJz3BXWfAr6EsnWS34dyL8qGVcnUUADJsb/T69YepOf/uUzibCSSCDwRxKxC8bGZ3/frl1cPrq750bBB5Ir3f3nM+XHgKE3CUskmmrK8JAL16/WgMI7NZ+W+QjuKkd/zIgOckBQGFSZkkZarKslZWg97VYrOzFASwB2RzWIlHRo9hfx8gkVOCSdJBoczhWZZlmdLgduy5s0OhhpVnZkZs8oWvJCx7oKjMpKGhPPhAZMgodZ48fvDx+I0bj4ae/F9nnWq/afQfCno9C1Mwo3d+F9BN0S7FjbUfDjP/AXGkiR7J5HLdAAAAAElFTkSuQmCC",
      "title": "街声",
      "descItem": "音乐人梦想的起点",
      "link": "https://streetvoice.cn",
      "type": "link"
    },
    {
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAZlBMVEVHcExRl7l0qMNPk7WtydlIjrNuo8C/1OFenLwAAFxooL4AKH2uy9v///8AZ5sAcaEAbZ7d6fCjw9XW5e3N3+gpgapvor/D1+M+ia8AX5bl7/Szzt17qsWLs8oae6ZcmLny9/oUeaXSM1akAAAADXRSTlMAr9qj3KLU/pYe7iXiyfEDKgAAALRJREFUGJVNj9tywzAIRGnrVPIkC+hu2bKd/P9PltbtTPcNWOAskenuJ+cmP9Ov3lKry1Jbul31+1pYTPwKnz/z0FWUWXUA5rmnkOKRQ9h4A/JMPgEsDBQ5AOfpcQYMVYeoZjkncmVHZjnxZN1zceQWAUR3YNE4rPGonDF4i4g9cJ3IN67IEovt5N48zemwF7HwiliPZPgfa98Q+PtKX28X+oldRdAudPMkDAv3/AtHNP+L/wVO/A32O5ZvAAAAAABJRU5ErkJggg==",
      "title": "无解音乐网",
      "descItem": "独立音乐网络社区",
      "link": "https://www.wooozy.cn/",
      "type": "link"
    },
    {
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACAklEQVQ4jW2Sv09aURTHv/feh+89Sw2vSA01b2iNRE2dHBw0cXtBUKP/gia6GRcTR2YlDroxuzmY6OoipoP/gGlMFGpDS4KBChR4wD23Aw+R2DOdM3zP9/z4MHyDFwpg/cn/gr+peU/WKbt5v6DTVYEkMTAAggkOTpI4uGDiVYtOMIDAGXc+OEoqKMiWJElzgTlqk2zJlzm1ngMQt+IJO/HoPmbd7O7n3ZAWilmx89J5oVlI/k62qAUGgQ0wMBD27L3V4KrBjIWhhZIsZWvZsiqP6WNnxbP7xv2D+6CgwKABUFDgiJiRg9yBE3AyjcyEObGf29ff6fFA/LRwCgLEm5Fccgf5oJ/7AYwOjKa+pmzdHtFGLqYuKrKyndl+aj6BvwgYBBPFdrFK1bqq51v54x/HhmHM+mfTlbRSqk71ngMDU6Rc5a5/XA8PhMeN8XQ5PemftE1759MO5ajUKt38ven/A8Nh7rAmaxEzcvnn8qRwshJacSxnWBtespaiVtTHfJ1Lsh4aLqAh+SWZ+JmY8c9c/bqCgVQktfl9ExIwvKUFNgAAhOXQ8lZ4a/79fDQQtTTLNu3F4GIsENN9+vTQ9F3jrklN76yegXKzbva2fvvcfr6uXK8F16pUPcofmdwUTDCwzrNfjSQB6nLKAdlFpgPF2z9wwZnwsCYQ530gS3g4/QOUF9ctotagJQAAAABJRU5ErkJggg==",
      "title": "听蛙",
      "descItem": "音乐电台在线收听",
      "link": "https://www.itingwa.com/",
      "type": "link"
    },
    {
      "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFklEQVQ4jbVTzWsTQRR/bya7afOh6KVeCy32YE/xJkIUPClBqJNsNkX8A0S9eSkIeqse6s1TwUqSTbeSYg6BgrDQS0FDxY+crdAEiqE0tttkdz48mJpPRAQfDDO8ee/N7/fjNwD/Ocg/dTHGIj1n+qfawKhkm9JTKcNc5Khe2Pn8xw4S+bcQ8Y1l1UCJrYDCimHOP+w0YzweH3oQO0uNyKt0Mn2T6NoKF3y5kM896KGlu5oWDvm+xF6utm2L7gxGAWyRSCSmQuHotpLwlBDYkVJdA8D3EsWeIGQLGWOTuq43stlsc2gQY5QBnCVUfx2NRi67rgs+5wsH+4GljY1XRwAAyBibpDTwSCL5tFfffe44Du9AoAAgkobxmACdQoQPHNVbO5erAADEYjGtUqlwBACYmzOndR1fEkrPSSGe1eu7y47jtEbpk0qZBgDQZnO/VC6Xm30iGmbmia7pC1yIbY9799csa/Pk3jTn70qAe0qpotdyF4vFYuNE7d5dJZPp5Nj4WMH3/cbhj4OZUqn03cxkVhBpRnCRsqzsWi+iPpf9ErDwefr8zOlIJHwVFAYvzM7e0jT9TrvlXlldtcqMMVqtVn/TQuiPLp20+S4Q0C4iInie96XdkjfW161vMODIQWep66Z5JiTgNgCOCyEOJQAnhB4Hg3AJAL4O1A//haNa7TgyMbGpJJR9TogKokd9f6ffZN34Cd0W6FikFzTMAAAAAElFTkSuQmCC",
      "title": "VirtOcean",
      "descItem": "Sea and ocean sounds noise generator",
      "link": "https://virtocean.com/",
      "type": "link"
    }
  ]

  trackByNavigation(index: number, item: Navigation) { return item.title }
  trackByNavigationItem(index: number, item: Navigation) { return item.title }
  
  constructor(
    private srv: NavigationService,
    private util: UtilService,
    private jsutil: JsUtilService,
    private cf: ChangeDetectorRef,
    private el: ElementRef,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private message: MessageUtilService,
  ) { }

  ngOnInit(): void {
    this.getBookMarkCategory()
    
  }

  selectNav(data){
    if(data.pid == null){
      this.getBookmarkCategoryByPid(data.id)  
    }else{
      this.scrollInto(data)
    }
  }
  scrollInto(data){
    let elem = this.el.nativeElement.querySelector(`#${data.title}`)
    if(elem){
      elem.scrollIntoView({ block: 'start', inline: 'nearest' });
    }
    
  }
  getBookMarkCategory(){
    this.srv.getBookmarkCategory().subscribe(res=>{
      if(res.isSuccess()){
        this.categoryData = res.data.map(v=>({
          ...v,
          selected: false
        }))
        this.categoryTree = this.util.setTree(this.categoryData)
        console.log(this.categoryTree)
        this.cf.markForCheck()
      }
    })
  }
  getBookmarkCategoryByPid(id){
    this.srv.getBookmarkCategoryByPid(id).subscribe(res=>{
      if(res.isSuccess()){
        this.data = res.data
        this.cf.markForCheck()
      }
    })
  }

  /**
   * 导航分类添加编辑
   * @param title 
   * @param data 
   */
   showCategoryDialog(title, data = {}) {
    let params = [
      {
        key: 'id',
        label: 'id',
        value: data['id'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'hidden',
      }, {
        key: 'title',
        label: '名称',
        value: data['title'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'icon',
        label: '图标',
        value: data['icon'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'sort',
        label: '排序',
        value: data['sort'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'pid',
        label: '父级',
        value: data['pid'] ? data['pid'] : null,
        valide: [],
        controlType: 'dropdown',
        type: 'default',
        options: this.categoryData.filter(v=>v.pid===null).map(v => ({ name: v.title, code: v.id }))
      }
    ]
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params: params,
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.saveBookmarkCategory(component.validateForm.value)
      }
    })
  }
  /**
   * 导航添加编辑
   * @param title 
   * @param data 
   */
  showItemDialog(title, data = {}, pdata = {}) {
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params: [
          {
            key: 'id',
            label: 'id',
            value: data['id'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'hidden',
          }, {
            key: 'title',
            label: '名称',
            value: data['title'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'link',
            label: '地址',
            value: data['link'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'icon',
            label: '图标',
            value: data['icon'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'navCategoryId',
            label: '分类',
            value: pdata['id'] ? pdata['id'] : null,
            valide: [],
            controlType: 'dropdown',
            type: 'default',
            options: this.categoryData.map(v => ({ name: v.title, code: v.id }))
          }
        ],
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.saveBookmarkItem(component.validateForm.value)
      }
    })

  }

  saveBookmarkItem(data){
    this.srv.saveBookmarkItem(data).subscribe(res => {
      if(res.isSuccess()){
        this.message.info(res.resultMsg)
        if(data.id!=null){
          let item = this.jsutil.findItem(this.categoryData,(item)=>item.id == data.id, {mapObject:['navList','children']})
          item = Object.assign(item,data)
          this.cf.markForCheck()
        }else{
          this.getBookMarkCategory()
        }
        
      }
    })
  }
  saveBookmarkCategory(data){
    this.srv.saveBookmarkCategory(data).subscribe(res => {
      if(res.isSuccess()){
        this.message.info(res.resultMsg)
        if(data.id!=null){
          let item = this.categoryData.find(v=>v.id == data.id)
          item = Object.assign(item,data)
          this.cf.markForCheck()
        }else{
          this.getBookMarkCategory()
        }
      }
    })
  }

}

