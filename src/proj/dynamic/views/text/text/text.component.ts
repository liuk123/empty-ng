import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less']
})
export class TextComponent {
  @Input() text:string
  constructor(){}
}
