import { NgModule } from '@angular/core';
import { FullLayoutModule } from './full-layout/full-layout.module';
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
        FullLayoutModule,
        RouteRoutingModule,
    ]
})
export class AppRoutesModule { }
