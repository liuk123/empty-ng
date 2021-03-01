import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag1',
  templateUrl: './drag1.component.html',
  styleUrls: ['./drag1.component.less']
})
export class Drag1Component implements OnInit {

  @Input("data1") data=""
  constructor() {}

  ngOnInit(): void {
  }

}
