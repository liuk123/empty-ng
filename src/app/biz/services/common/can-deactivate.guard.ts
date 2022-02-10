import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  isFormDirty:() => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(
    private modal: NzModalService,
  ) {}

  canDeactivate(component):Observable<boolean>|boolean{
    if(component.isFormDirty&&component.isFormDirty()){
      return this.confirmLeave()
    }else{
      return true
    }
  }

  confirmLeave():Observable<boolean>{
    return new Observable((observer)=>{
      this.modal.confirm({
        nzTitle: '确定离开页面吗',
        nzContent: '这个页面表单信息未提交，离开后将丢失未提交的信息',
        nzOnOk: async () => {
          observer.next(true);
        },
        nzOnCancel: () => {
          observer.next(false);
        }
      })
    })
  }
}
