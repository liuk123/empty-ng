import { NgModule } from '@angular/core';
import { WebLayoutComponent } from './web-layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonComponentModule } from '../common-component/common-component.module';
import { FooterComponent } from './footer/footer.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    WebLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProgressComponent,
  ],
  imports: [
    SharedModule,
    CommonComponentModule
  ]
})
export class WebLayoutModule { }
