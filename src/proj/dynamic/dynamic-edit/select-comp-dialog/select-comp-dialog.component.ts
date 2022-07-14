import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-comp-dialog',
  templateUrl: './select-comp-dialog.component.html',
  styleUrls: ['./select-comp-dialog.component.less']
})
export class SelectCompDialogComponent implements OnInit {

  @Input() data

  curData = null
  constructor() { }

  ngOnInit(): void {
  }
  setActiveComp(data) {
    this.curData = data
  }

}
