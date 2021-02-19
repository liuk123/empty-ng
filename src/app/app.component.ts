import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'
import { CheckForUpdateService } from './core/services/check-for-update';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    checkForUpdateService:CheckForUpdateService
  ) {}
  
  ngOnInit(){
    console.log('是否是生产环境'+environment.production)
  }
}
