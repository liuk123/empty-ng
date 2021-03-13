import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ServicesModule } from '../biz/services/services.module';
import { throwIfAlreadyLoaded } from './module-import-guard';


@NgModule({
  declarations: [],
  imports: [
    ServicesModule.forRoot(),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
