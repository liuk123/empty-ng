import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'
import { CheckForUpdateService } from './core/services/check-for-update';
import { HttpUtilService } from './core/services/http-util.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    checkForUpdateService:CheckForUpdateService,
    private http: HttpUtilService,
    private userSrv: UserService,
  ) {}
  
  ngOnInit(){
    console.log('是否是生产环境'+environment.production)
    this.http.get(`/api/user/currentUser`).subscribe(v=>{
      if(v&&v.data){
        this.userSrv.reLoadUserInfo(v.data)
      }
    })
    
  }
}
