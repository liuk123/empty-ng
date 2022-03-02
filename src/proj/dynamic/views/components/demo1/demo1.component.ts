import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.less']
})
export class Demo1Component implements OnInit {

  @Input() data = 111
  constructor() { }

  ngOnInit(): void {
  }

}
