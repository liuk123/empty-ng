import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.less']
})
export class MTableComponent implements OnInit {

  @Input() data = []
  @Input() headerData = []

  constructor() { }

  ngOnInit(): void {
  }

}
