import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Menu } from 'src/app/core/model/menu.model';
import { User } from 'src/app/core/model/user.model';
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
    private userSrv:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userSrv.userEvent.subscribe(v=>this.userInfo = v);
  }

  logout(){
    this.userSrv.logout().subscribe(res=>{
      if(res.isSuccess()){
        this.userSrv.reLoadUserInfo({})
        this.router.navigate(['./blog/home'])
      }
    });

  }
}
