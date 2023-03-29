import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { UserService } from '../../biz/services/common/user.service';

@Directive({
  selector: '[permissions]',
})
export class PermissionsDirective implements OnInit, OnDestroy {

  @Input() permissions = null
  unsub:Unsubscribable
  constructor(private el: ElementRef,private userSvr: UserService, private rd: Renderer2) {
    this.unsub = this.userSvr.userEvent.subscribe(u=>{
      if(!this.permissions || !u || !u.authorities.some(v=> v.name === this.permissions)){
        this.rd.removeChild(this.el.nativeElement.parentNode, this.el.nativeElement)
      }
    })
  }

  ngOnInit():void {
    
  }
  ngOnDestroy():void {
    this.unsub.unsubscribe()
  }
}