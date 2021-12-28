import { Injectable } from '@angular/core';
import { Menu, BreadcrumbMenu } from '../../model/common/menu.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UtilService } from 'src/app/shared/utils/util';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  constructor(
    private http: HttpClient,
    private util: UtilService
  ){}

  topMenusId = Symbol()
  private _menus: Menu[] = [];
  get menus(){
    return this._menus
  }
  set menus(data){
    if(data){
      this._menus = this.util.setTree(data)
    }
  }
  breadcrumbMenus: BreadcrumbMenu[];

  private menuSource = new Subject<Menu[]>();
  menuEvent = this.menuSource.asObservable();

  private breadcrumbSource = new Subject<BreadcrumbMenu[]>();
  breadcrumbEvent = this.breadcrumbSource.asObservable();

  setBreadcrumb(value){
    const routerStr = value.search(/\?|#/) != -1 ? value.slice(0, value.search(/\?|#/)) : value.slice(0)
    this.breadcrumbMenus = []
    this.setBreadcrumbItem(this.menus, routerStr)
    this.breadcrumbSource.next(this.breadcrumbMenus);
  }
  
  setBreadcrumbItem(data, routerStr:string, childrenList=[]){
    if(data instanceof Array){
      for(let i=0; i<data.length; i++){
        let tem = this.setBreadcrumbItem(data[i], routerStr, data)
        if(tem){
          return tem
        }
      }
    }else if(data instanceof Object){
      if(data.route === routerStr){
        this.breadcrumbMenus.unshift({
          id: data.id,
          title: data.title,
          type: data.type,
          route: data.route,
          link: data.link,
          children: childrenList.filter(v=>v.id !== data.id)
        })
        return data
      }else{
        let tem = this.setBreadcrumbItem(data.children, routerStr)
        if(tem){
          this.breadcrumbMenus.unshift({
            id: data.id,
            title: data.title,
            type: data.type,
            children: childrenList.filter(v=>v.id !== data.id)
          })
          return tem
        }
      }
    }
  }

  loadMenuData(){
    // return this.http.get('assets/data/menu1.json')
    const url = `/menu/`;
    return this.http.get(url);
  }
}
