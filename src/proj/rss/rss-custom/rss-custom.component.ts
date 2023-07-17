import { Time } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IndexDBService } from 'src/app/core/services/indexDB.service';

class RssUrl {
  [propName: string]: any
  constructor(
    public id: Number,
    public pid: Number,
    public title: String,
    public link: String,
    public category: String,
    public createTime: Time,
    public total: Number,
  ){}
}
class RssItem {
  constructor(
    public id: Number,
    public pid: Number,
    public title: String,
    public link: String,
    public sort: Number,
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
  urlDB:IDBDatabase = null
  urlData: RssUrl[]=null
  rssData: RssItem[]=null

  constructor(
    private dbSrv: IndexDBService
  ){}
  ngOnInit(): void {
    this.dbSrv.openDB('helloCicode', 'rssUrl').subscribe(v=>this.urlDB = v)
    this.dbSrv.openDB('helloCicode', 'rssItem').subscribe(v=>this.db = v)
  }
  ngOnDestroy(): void {
    this.dbSrv.closeDB(this.db)
  }

  getUrlData(){
    this.dbSrv.getAllData(this.urlDB, 'rssUrl').subscribe(v=>{
      this.urlData = v
    })
  }
  putUrlData(data){
    this.dbSrv.update(this.urlDB, 'rssUrl', data)
  }
  getRssData(){
    this.dbSrv.getAllData(this.urlDB, 'rssItem').subscribe(v=>{
      this.rssData = v
    })
  }
  putRssData(data){
    this.dbSrv.update(this.urlDB, 'rssItem', data)
  }

}
