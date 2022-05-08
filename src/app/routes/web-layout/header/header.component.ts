import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/biz/services/common/user.service';
import { Menu } from 'src/app/biz/model/common/menu.model';
import { User } from 'src/app/biz/model/common/user.model';
import {environment} from 'src/environments/environment'
import { MenuService } from 'src/app/biz/services/common/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  menus: Menu[];
  userInfo: User;
  title=environment.systemName
  constructor(
    private userSrv:UserService,
    private router: Router,
    private menuSrv: MenuService
  ) { }

  ngOnInit(): void {
    this.menuSrv.menuEvent.subscribe(v => {
      this.menus = v
    })
    this.userSrv.userEvent.subscribe(v=>{
      this.userInfo = v
    });
  }

  logout(){
    this.userSrv.logout().subscribe(res=>{
      if(res.isSuccess()){
        this.userSrv.reLoadUserInfo(null)
        this.menuSrv.loadNoUserMenuData().subscribe(res=>{
          this.menuSrv.setMenus(res)
          this.router.navigate(['./blog/home'])
        })
        
      }
    });

  }
}
