import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-btn-dialog',
  templateUrl: './btn-dialog.component.html',
  styleUrls: ['./btn-dialog.component.less']
})
export class BtnDialogComponent implements OnInit {

  @Input() params = null
  @Output() selectEvent = new EventEmitter()
  constructor(private modal: NzModalRef) { }

  ngOnInit(): void {
  }
  btnEvent(data){
    this.modal.destroy(data)
  }
}
