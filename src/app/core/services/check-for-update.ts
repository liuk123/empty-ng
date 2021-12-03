import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckForUpdateService {

  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    if (updates.isEnabled) {
      // Allow the app to stabilize first, before starting polling for updates with `interval()`.
      //程序稳定之后
      const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
      const everySixHours$ = interval(10*60*1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
      everySixHoursOnceAppIsStable$.subscribe(() => {
        updates.checkForUpdate()
        console.log('service work check')
      });


      updates.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        updates.activateUpdate().then(() => document.location.reload());
      });
      updates.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });
  
      updates.unrecoverable.subscribe(event => {
        console.log(
          `An error occurred that we cannot recover from:\n${event.reason}\n\n` +
          'Please reload the page.');
      });
    }
  }
}