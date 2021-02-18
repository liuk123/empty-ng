import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit(){
    console.log('是否是生产环境')
    console.log(environment.production)
  }
}
