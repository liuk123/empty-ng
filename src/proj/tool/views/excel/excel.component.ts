import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';
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
    if(ConfigService.Config.isBrowser){
      this.libSrv.transferExcelData(e.data).subscribe(v=>{
        this.resultValue = JSON.stringify(v)
      })
    }
  }

  downData(data){
    let d = JSON.parse(data)
    this.libSrv.transferJSONData(d).subscribe(v=>{
      this.libSrv.download(v, 'excel.xlsx')
    })    
  }
}
