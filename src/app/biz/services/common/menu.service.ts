import { Injectable } from '@angular/core';
import { Menu, BreadcrumbMenu } from '../../model/common/menu.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  topMenusId = Symbol()
  private _menus: Menu[] = [];
  get menus(){
    return this._menus
  }
  set menus(data){
    if(data){
      const temObj = {}
      for(let i=0; i<data.length;i++){
        const key = data[i].pid||this.topMenusId as any
        if(temObj[key]){
          temObj[key].push(data[i])
        }else{
          temObj[key]=[data[i]]
        }
      }
      this._menus = this.setMemuItem(temObj[this.topMenusId], temObj)
    }
  }
  breadcrumbMenus: BreadcrumbMenu[];

  private menuSource = new Subject<Menu[]>();
  menuEvent = this.menuSource.asObservable();

  private breadcrumbSource = new Subject<BreadcrumbMenu[]>();
  breadcrumbEvent = this.breadcrumbSource.asObservable();

  setMemuItem(menuItem,menuObj){
    if(menuItem){
      for(let i=0; i<menuItem.length;i++){
        menuItem[i].children = menuObj[menuItem[i].id]||null
        this.setMemuItem(menuItem[i].children, menuObj)
      }
      return menuItem
    }
  }
  setBreadcrumb(value){
    const routerStr = value.indexOf(";") != -1 ? value.slice(0, value.indexOf(";")) : value.slice(0)
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
}
