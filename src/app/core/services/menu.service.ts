import { Injectable } from '@angular/core';
import { Menu, BreadcrumbMenu } from '../model/menu.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  menus: Menu[] = [];
  breadcrumbMenus: BreadcrumbMenu[] = [];

  private itemSource = new Subject<BreadcrumbMenu[]>();
  routerEvent = this.itemSource.asObservable();

  setBreadcrumb(value){
    const breadcrumbStr = value.indexOf(";") != -1 ? value.slice(1, value.indexOf(";")).split('/') : value.slice(1).split('/')
    this.breadcrumbMenus = this.dealBreadcrumb(breadcrumbStr, 0, this.menus);
    this.itemSource.next(this.breadcrumbMenus);
  }

  dealBreadcrumb(links:string[], index:number, menu:Menu[]): BreadcrumbMenu[] {
    const breadcrumbMenus:BreadcrumbMenu[] = [];
    for (let menuItem of menu) {
      if (!menuItem.route &&
        links[index] == (menuItem.route.lastIndexOf('/')!=-1?menuItem.route.slice(menuItem.route.lastIndexOf('/')+1): menuItem.route)) {

        if (menuItem.type == "router") {
          breadcrumbMenus.push({
            title: menuItem.title,
            type: "router",
            route: menuItem.route,
            // children: this.addBreadcrumb(menu, menuItem.title)
          })
        } else if (menuItem.type == "link") {
          breadcrumbMenus.push({
            title: menuItem.title,
            type: "link",
            link: menuItem.link,
            // children: this.addBreadcrumb(menu, menuItem.title)
          })
        } else if (menuItem.type == "sub") {
          breadcrumbMenus.push({
            title: menuItem.title,
            type: "sub",
            route: menuItem.route,
            children: this.addBreadcrumb(menu, menuItem.title)
          })
        }
        if (links.length > index && Array.isArray(menuItem.children) && menuItem.children.length > 0) {
          this.dealBreadcrumb(links, index + 1, menuItem.children);
        }

      }
    }
    return breadcrumbMenus;
  }

  addBreadcrumb(menu, currenttitle?) {
    let tem = []
    for (let menuItem of menu) {
      if (menuItem.type == "router") {
        if (currenttitle && currenttitle != menuItem.title) {
          tem.push({
            title: menuItem.title,
            type: "router",
            route: menuItem.route,
          })
        }

      } else if (menuItem.type == "link") {
        tem.push({
          title: menuItem.title,
          type: "link",
          link: menuItem.link,
        })
      } else if (menuItem.type == "sub") {
        if (currenttitle && currenttitle != menuItem.title) {
          tem.push({
            title: menuItem.title,
            type: "sub",
            children: this.addBreadcrumb(menuItem.children, menuItem.title)
          })
        }
      }
    }
    return tem;
  }
}
