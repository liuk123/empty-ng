import { Component, HostBinding, Input } from '@angular/core';
import { MoveService } from '../service/move.service';

@Component({
  selector: 'app-inline',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class InlineComponent{

  @Input() id=null
  @HostBinding('id') get Id(){
    return this.id
  }

  constructor() {}
}
