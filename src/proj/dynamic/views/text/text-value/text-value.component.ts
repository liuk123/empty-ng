import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-value',
  templateUrl: './text-value.component.html',
  styleUrls: ['./text-value.component.less']
})
export class TextValueComponent implements OnInit {
  @Input() data = null

  constructor() { }

  ngOnInit(): void {
  }

}
