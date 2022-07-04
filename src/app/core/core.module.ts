import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ServicesModule } from '../biz/services/services.module';
import { throwIfAlreadyLoaded } from './module-import-guard';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ServicesModule.forRoot(),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
