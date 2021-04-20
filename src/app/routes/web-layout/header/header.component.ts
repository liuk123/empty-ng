import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/biz/services/user/user.service';
import { Menu } from 'src/app/core/model/menu.model';
import { User } from 'src/app/core/model/user.model';
import { CommonService } from 'src/app/core/services/common.service';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() menus: Menu[];
  userInfo: User;
  title=environment.systemName
  constructor(
    private commonSrv: CommonService,
    private userSrv:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.commonSrv.userEvent.subscribe(v=>this.userInfo = v);
  }

  logout(){
    this.userSrv.logout().subscribe(res=>{
      if(res.isSuccess()){
        this.commonSrv.reLoadUserInfo({})
        this.router.navigate(['./blog/home'])
      }
    });

  }
}
