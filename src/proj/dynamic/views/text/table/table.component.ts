import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input() data = []
  @Input() headerData = []

  constructor() { }

  ngOnInit(): void {
  }

}
