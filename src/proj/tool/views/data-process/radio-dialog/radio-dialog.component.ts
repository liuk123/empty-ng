import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-dialog',
  templateUrl: './radio-dialog.component.html',
  styleUrls: ['./radio-dialog.component.less']
})
export class RadioDialogComponent implements OnInit {

  @Input() params = null
  value = null
  constructor() { }
  
  ngOnInit(): void {
  }
}
