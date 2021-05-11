import { NgModule } from '@angular/core';
// import { UserService } from '../../core/services/user.service';

export {
  // AuthGuardService
}
@NgModule()
export class ServicesModule {
  static forRoot(){
    return {
      ngModule: ServicesModule,
      providers: [
        // UserService
      ]
    }
  }
}
