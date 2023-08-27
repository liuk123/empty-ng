import { Component, OnInit, inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-radio-dialog',
  templateUrl: './radio-dialog.component.html',
  styleUrls: ['./radio-dialog.component.less']
})
export class RadioDialogComponent implements OnInit {

  // @Input() params = null
  readonly nzModalData = inject(NZ_MODAL_DATA);
  value = null
  constructor() { }
  
  ngOnInit(): void {
  }
}
