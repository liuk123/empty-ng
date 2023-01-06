import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.less']
})
export class ExcelComponent implements OnInit {

  resultValue = null
  constructor(private util: UtilService) { }

  ngOnInit(): void {
  }
  copy(data){
    this.util.copyToClipboard(data)
  }
  clear(){
    this.resultValue = null
  }
}
