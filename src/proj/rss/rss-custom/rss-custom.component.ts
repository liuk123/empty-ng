import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IndexDBService } from 'src/app/core/services/indexDB.service';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { RssService } from '../services/rss.service';
import { zip } from 'rxjs';

class RssUrl {
  [propName: string]: any
  constructor(
    public id: Number,
    public title: String,
    public link: String,
    public category: String,
    public sort: Number,
    public createTime: Time,
    public status: Boolean,
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
    public createTime: Time,
  ){}
}

@Component({
  selector: 'app-rss-custom',
  templateUrl: './rss-custom.component.html',
  styleUrls: ['./rss-custom.component.less']
})
export class RssCustomComponent implements OnInit, OnDestroy {
  db:IDBDatabase=null
  urlData: RssUrl[]=[]

  constructor(
    private dbSrv: IndexDBService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private srv: RssService

  ){}
  ngOnInit(): void {
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
  ngOnDestroy(): void {
    this.dbSrv.closeDB(this.db)
  }

  getData(){
    zip(
      this.dbSrv.getAllData(this.db, 'rssUrl'),
      this.dbSrv.getAllData(this.db, 'rssItem')
    ).subscribe(([urlData, rssList])=>{
      let obj = {}
      rssList.forEach(v=>{
        if(!(v.pid in obj)){
          obj[v.pid] = []
        }
        obj[v.pid].push(v)
      })
      this.urlData = urlData.map(v=>({
        ...v,
        list: obj[v.id]
      }))
      console.log(this.urlData)
    })
  }
  putUrlData(data){
    return this.dbSrv.add(this.db, 'rssUrl', data)
  }
  delUrlItem(id){
    this.dbSrv.deleteDB(this.db, 'rssUrl', id).subscribe(v=>{
      this.urlData= this.urlData.filter(v=>v.id!==id)
    })
  }

  getRssData(pid){
    this.dbSrv.cursorGetDataByIndex(this.db, 'rssItem', 'pid', pid).subscribe(v=>{
      let item = this.urlData.find(v=>v.id == pid)
      item.list = v
    })
  }
  putRssData(data){
    this.dbSrv.update(this.db, 'rssItem', data).subscribe()
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
        let obj={}
        const value = component.validateForm.value
        Object.keys(value).forEach(key=>{
          if(value[key]){
            obj[key]=value[key]
          }
        })
        this.putUrlData([{
          ...obj,
          createTime: new Date()
        }]).subscribe((id:number)=>{
          if(this.urlData.every(v=>v.id!==id)){
            this.urlData.push({
              ...value,
              id: id
            })
          }
        })
      }
    })
  }
  fetchRssData(data){
    let now = new Date()
    let subTime = now.setHours(now.getHours()-2) - data.createTime
    // if(subTime>0){
      this.srv.getCustomRss({url:data.link}).subscribe(res=>{
        this.putRssData(res.data.map(v=>({
          ...v,
          pid: data.id
        })))
      })
    // }
  }
}
