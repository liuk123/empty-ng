import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class CheckForUpdateService {

  constructor(private appRef: ApplicationRef, private updates: SwUpdate) {
    
  }
  load(){
    // if (this.updates.isEnabled) {
    //   // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    //   //程序稳定之后
    //   const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    //   const everySixHours$ = interval(10*60*1000);
    //   const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    //   everySixHoursOnceAppIsStable$.subscribe(() => {
    //     this.updates.checkForUpdate()
    //     console.log('service work check')
    //   });


    //   this.updates.available.subscribe(event => {
    //     console.log('current version is', event.current);
    //     console.log('available version is', event.available);
    //     this.updates.activateUpdate().then(() => document.location.reload());
    //   });
    //   this.updates.activated.subscribe(event => {
    //     console.log('old version was', event.previous);
    //     console.log('new version is', event.current);
    //   });
  
    //   this.updates.unrecoverable.subscribe(event => {
    //     console.log(
    //       `An error occurred that we cannot recover from:\n${event.reason}\n\n` +
    //       'Please reload the page.');
    //   });
    // }
  }
}