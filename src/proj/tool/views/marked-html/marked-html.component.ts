import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-marked-html',
  templateUrl: './marked-html.component.html',
  styleUrls: ['./marked-html.component.less']
})
export class MarkedHtmlComponent implements OnInit {

  inputValue=null
  resultValue=null

  constructor(
    private util: UtilService,
  ) { }

  ngOnInit(): void {
  }

  copy(data){
    this.util.copyToClipboard(data)
  }
  clear(){
    this.inputValue = null
    this.resultValue = null
  }
  markedToHtml(data){

  }

}
