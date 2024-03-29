import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard {
  constructor(
    private userSrv:UserService,
    private router: Router,
    private message: MessageUtilService,
    private modal: NzModalService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    let user = this.userSrv.getUser()
    if(user&&user.username){
      if(!route.data.authorities||user.authorities.some(v=>v.value === route.data.authorities)){
        return true
      }else{
        this.message.warning('没有权限')
        return false
      }
    }else{
      return this.confirmLogin()
    }
  }

  confirmLogin():Observable<boolean>{
    return new Observable((observer)=>{
      this.modal.confirm({
        nzTitle: '请登录',
        nzContent: '是否去登录页面',
        nzOnOk: async () => {
            observer.next(false)
            this.router.navigate(['./user/login'])
            observer.complete()
        },
        nzOnCancel: () => {
            observer.next(false)
            observer.complete()
        }
      })
    })
  }
}
