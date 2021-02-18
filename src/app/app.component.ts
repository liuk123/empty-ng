import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(
    private swUpdate: SwUpdate
  ) {
    swUpdate.available.subscribe(event => {
      console.log('----------------------current version is----------------------', event.current);
      console.log('----------------------available version is--------------------', event.available);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      this.swUpdate.activateUpdate().then(() => document.location.reload());
    });
  }
  
  ngOnInit(){
    console.log('是否是生产环境')
    console.log(environment.production)
  }
}
