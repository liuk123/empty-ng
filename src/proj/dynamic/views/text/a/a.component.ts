import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.less']
})
export class AComponent {
  @Input() url: string
  @Input() text: string
}
