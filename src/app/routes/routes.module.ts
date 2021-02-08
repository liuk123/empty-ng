import { NgModule } from '@angular/core';
import { RouteRoutingModule } from './routes-routing.module';
import { WebLayoutModule } from './web-layout/web-layout.module';

const COMPONENTS = [

];
const COMPONENTS_NOROUNT = [
  
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  imports: [
    WebLayoutModule,
    RouteRoutingModule,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule { }
