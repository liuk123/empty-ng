import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag2',
  templateUrl: './drag2.component.html',
  styleUrls: ['./drag2.component.less']
})
export class Drag2Component implements OnInit {

  @Input() componentId:string =''
  constructor() {}

  ngOnInit(): void {
  }

}
