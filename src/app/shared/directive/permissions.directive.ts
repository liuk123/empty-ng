import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { UserService } from '../../biz/services/common/user.service';

@Directive({
  selector: '[permissions]',
})
export class PermissionsDirective implements OnInit, OnDestroy {

  @Input() permissions = null
  unsub:Unsubscribable
  constructor(private el: ElementRef,private userSvr: UserService) {
  }

  ngOnInit():void {
    this.unsub = this.userSvr.userEvent.subscribe(u=>{
      if(this.permissions&&u&&u.authorities.some(v=> v.name === this.permissions)){
        this.el.nativeElement.style.display = 'block'
      }else{
        this.el.nativeElement.style.display = 'none'
      }
    })
  }
  ngOnDestroy():void {
    this.unsub.unsubscribe()
  }
}