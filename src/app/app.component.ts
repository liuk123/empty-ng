import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'
import { CheckForUpdateService } from './core/services/check-for-update';
import { CommonService } from './core/services/common.service';
import { HttpUtilService } from './core/services/http-util.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    checkForUpdateService:CheckForUpdateService,
    private http: HttpUtilService,
    private commonService: CommonService,
  ) {}
  
  ngOnInit(){
    console.log('是否是生产环境'+environment.production)
    this.http.get(`/api/user/currentUser`).subscribe(v=>{
      this.commonService.reLoadUserInfo(v.data)
    })
  }
}
