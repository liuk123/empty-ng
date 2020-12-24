import { NgModule } from '@angular/core';
import { BigScreenLayoutModule } from './big-screen-layout/big-screen-layout.module';

const SETTINGDRAWER = [];
const COMPONENTS = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BigScreenLayoutModule
  ],
  entryComponents: SETTINGDRAWER
})
export class ThemeModule { }
