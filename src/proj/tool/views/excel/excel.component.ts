import { Component, OnInit } from '@angular/core';
import { LibUtilService } from 'src/app/shared/utils/lib-util';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.less']
})
export class ExcelComponent implements OnInit {

  resultValue = null
  constructor(
    private libSrv: LibUtilService
    ) { }
  ngOnInit(): void {
  }
  copy(data){
    this.libSrv.copyToClipboard(data)
  }
  clear(){
    this.resultValue = null
  }
  readerFile(e){
    this.libSrv.transferExcelData(e.data).subscribe(v=>{
      this.resultValue = JSON.stringify(v)
    })
  }
}
