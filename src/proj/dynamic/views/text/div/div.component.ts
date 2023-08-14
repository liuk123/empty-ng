import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.less']
})
export class DivComponent {
  @Input() data: any
}
