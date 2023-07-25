import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IndexDBService } from 'src/app/core/services/indexDB.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { RssService } from '../services/rss.service';
import { zip } from 'rxjs';
import { last } from 'rxjs/operators';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { ConfigService } from 'src/app/core/services/config.service';

class RssUrl {
  [propName: string]: any
  constructor(
    public id: Number,
    public title: string,
    public link: string,
    public category: string,
    public sort: Number,
    public updateTime: Time,
    public loading: BooleanInput,
    public statusList: string[],
    public list: RssItem[]
  ){}
}
class RssItem {
  constructor(
    public id: Number,
    public title: String,
    public link: String,
    public descItem: String,
    public updateTime: Time,
  ){}
}

@Component({
  selector: 'app-rss-custom',
  templateUrl: './rss-custom.component.html',
  styleUrls: ['./rss-custom.component.less']
})
export class RssCustomComponent implements OnInit, OnDestroy {
  db:IDBDatabase=null
  categoryMap:Map<string, RssUrl[]> = new Map()
  categoryIndex:string = null
  categorys = []

  trackByCategorys(index: number, item: string) { return item }
  trackByRssUrl(index: number, item: RssUrl) { return item.id }
  trackByRssItem(index: number, item: RssItem) { return item.title }

  constructor(
    private dbSrv: IndexDBService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private srv: RssService,
    private messageSrv: MessageUtilService
  ){}
  ngOnInit(): void {
    if(ConfigService.Config.isBrowser){
      this.dbSrv.openDB('helloCicode', [
        {
          storeName:'rssUrl'
        },{
          storeName:'rssItem',
          keyPath: 'title',
          createIndex: [
            'pid',
            'pid',
            {unique: false}
          ]
        }
      ]).subscribe(v=>{
        this.db = v
        this.getData()
      })
    }
  }
  ngOnDestroy(): void {
    this.dbSrv.closeDB(this.db)
  }
  setCategorys(){
    this.categorys = Array.from(this.categoryMap.keys())
  }
  swithCategory(name){
    if(this.categoryIndex!==name){
      this.categoryIndex = name
    }
  }
  getData(){
    zip(
      this.dbSrv.getAllData(this.db, 'rssUrl'),
      this.dbSrv.getAllData(this.db, 'rssItem')
    ).subscribe(([resUrl, rssList])=>{
      let obj = {}
      rssList.forEach(v=>{
        if(!(v.pid in obj)){
          obj[v.pid] = []
        }
        obj[v.pid].push(v)
      })

      resUrl.forEach(v=>{
        if(!this.categoryMap.has(v.category)){
          this.categoryMap.set(v.category, [])
        }
        this.categoryMap.get(v.category).push({
          ...v,
          list: obj[v.id]
        })
      })
      this.categoryIndex = resUrl[0]?.category
      this.setCategorys()
      // this.urlData = urlData.map(v=>({
      //   ...v,
      //   list: obj[v.id]
      // }))
    })
  }
  putUrlData(data){
    return this.dbSrv.update(this.db, 'rssUrl', data)
  }
  delUrlItem(data){
    this.dbSrv.deleteDB(this.db, 'rssUrl', data.id).subscribe(v=>{
      let list = this.categoryMap.get(this.categoryIndex).filter(v=>v.id!==data.id)
      if(list.length==0){
        this.categoryMap.delete(data.category)
      }else{
        this.categoryMap.set(this.categoryIndex,this.categoryMap.get(this.categoryIndex).filter(v=>v.id!==data.id))
      }
      data.list?.forEach(v=>this.dbSrv.deleteDB(this.db, 'rssItem', v.title).subscribe())
      this.setCategorys()
      this.messageSrv.success('删除成功')
    })
  }
  clearRssItem(data){
    if(Array.isArray(data) && data.length>0){
      let arr = data.map(v=>this.dbSrv.deleteDB(this.db, 'rssItem', v.title))
      zip(...arr).subscribe(()=>{
        data.length=0
        this.messageSrv.success('清空成功')
      })
    }
  }

  getRssData(pid){
    this.dbSrv.cursorGetDataByIndex(this.db, 'rssItem', 'pid', pid).subscribe(v=>{
      let value = this.categoryMap.values()
      let item=null
      while((item = value.next())?.done==false){
        let tem = item.value?.find(v=>v.id == pid)
        if(tem){
          tem.list = v.sort((a,b)=>b.updateTime - a.updateTime)
          break
        }
      }
      // this.categoryMap.forEach(val=>{
      //   let item = val?.find(v=>v.id == pid)
      //   if(item){
      //     item.list = v
      //   }
      // })
    })
  }
  putRssData(data){
    this.dbSrv.update(this.db, 'rssItem', data).pipe(last()).subscribe(()=>{
      this.getRssData(data[0].pid)
    })
  }
  showAddDialog({title, data={}}){
    this.modal.create({ 
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzMaskClosable: false,
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
            key: 'category',
            label: '分类',
            value: data['category'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'sort',
            label: '排序',
            value: data['sort'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'number',
          }
        ],
        span: 1,
      },
      nzOnOk: (component: any) => {
        const value = component.validateForm.value
        if(value.id){
          this.putUrlData([{...value, updateTime: new Date()}]).subscribe((id:number)=>{
            let item = this.categoryMap.get(this.categoryIndex).find(v=>v.id===id)
            let oldCategoryItem = item.category
            Object.assign(item, value)
            if(oldCategoryItem!==item.category){
              this.categoryMap.set(item.category, this.categoryMap.get(oldCategoryItem))
              this.categoryMap.delete(oldCategoryItem)
            }
            this.setCategorys()
            if(!this.categoryIndex||!this.categorys.some(v=>v==this.categoryIndex)){
              this.categoryIndex=item.category
            }
            this.messageSrv.success('修改成功')
          })
        }else{
          delete value.id
          this.putUrlData([{...value, updateTime: new Date()}]).subscribe((id:number)=>{
            let item = {
              ...value,
              id: id
            }
            if(!this.categoryMap.has(item.category)){
              this.categoryMap.set(item.category, [])
              this.setCategorys()
              if(!this.categoryIndex){
                this.categoryIndex=item.category
              }
            }
            this.categoryMap.get(item.category).push(item)
            this.messageSrv.success('添加成功')
            this.fetchRssData(item)
          })
        }
      }
    })
  }
  fetchRssData(data){
    if(data.loading === true){
      return null
    }
    let now = new Date()
    let subTime = (new Date()).setHours(now.getHours()-4) - data.updateTime
    if(!data.updateTime || subTime>0 || !Array.isArray(data.list) || data.list.length==0){
      data.loading = true
      this.srv.getCustomRss({url:data.link}).subscribe(res=>{
        data.loading = false
        this.putRssData(res.data.map(v=>({
          ...v,
          pid: data.id,
          updateTime: now
        })))
        this.putUrlData([{...data, updateTime: now}]).subscribe(v=>{
          data.updateTime = now
        })
        this.messageSrv.success(data.title + ': 获取成功')
        
      },err=>{
        data.loading = false
      })
    }else{
      this.messageSrv.info(data.title + ': 已是最新')
    }
  }
  refreshAll(){
    this.categoryMap.get(this.categoryIndex)?.forEach(v=>{
      this.fetchRssData(v)
    })
  }
}
