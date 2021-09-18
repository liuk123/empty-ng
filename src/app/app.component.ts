import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'
import { HttpUtilService } from './biz/services/common/http-util.service';
import { MenuService } from './biz/services/common/menu.service';
import { CheckForUpdateService } from './core/services/check-for-update';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    checkForUpdateService:CheckForUpdateService,
    http: HttpUtilService,
    menuService: MenuService
  ) {
    http.get('assets/data/menu.json').subscribe(v=>{
      menuService.menus = v.menus
    })
  }
  
  ngOnInit(){
    console.log('是否是生产环境'+environment.production)
  }
}
