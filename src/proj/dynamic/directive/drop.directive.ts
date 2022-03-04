import { Directive, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";

@Directive({
  selector: '[app-droppable]',
})
export class DropDirective implements OnInit{

  moveEvent$ = null
  upEvent$ = null

  constructor(){}
  ngOnInit(): void {
    if(!this.moveEvent$){
      this.moveEvent$ = fromEvent(document, 'mousemove')
    }
    if(!this.upEvent$){
      this.upEvent$ = fromEvent(document, 'mouseup')
    }
  }
}