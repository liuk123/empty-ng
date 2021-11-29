import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import {environment} from '../environments/environment'
import { CheckForUpdateService } from './core/services/check-for-update';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    checkForUpdateService: CheckForUpdateService,
    private iconSrv: NzIconService
  ) {
    this.iconSrv.changeAssetsSource(environment.iconUrl)
  }
  
  ngOnInit(){
    console.log('是否是生产环境'+environment.production)
  }
}
