import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Base64Component implements OnInit {


  inputValue=null
  resultValue=null
  fileBlob = null
  fileTitle = null
  
  constructor(
    private util: UtilService,
    private ds: DomSanitizer,
    private message: MessageUtilService
    
  ) {}

  ngOnInit(): void {
  }
  
  imgToBase64(data){
    this.clear()
    this.resultValue = data.data
    this.fileTitle = data.name
    let ret = null
    // pdf|jpg|jpeg|png|gif|webp|svg+xml
    if(/^data:image\/[a-zA-Z\+]{1,10};base64,/.test(data.data)){
      this.base64ToImg(data.data)
    }else if(ret = data.data.match(/^data:text\/plain;base64,/)){
      this.inputValue = this.util.base64ToStr(data.data.slice(ret[0].length))
    }
  }
  base64ToImg(data){
    if(data){
      this.fileBlob = this.ds.bypassSecurityTrustUrl(data)
    }
  }
  strToBase64(str){
    if(!str){
      return null
    }
    let base64 = this.util.strToBase64(str)
    this.resultValue = base64
  }
  base64ToStr(base64){
    if(!base64){
      return null
    }
    let ret = this.util.base64ToStr(base64)
    this.resultValue = ret
  }
  copy(data){
    this.util.copyToClipboard(data)
  }
  clear(){
    this.fileBlob = null
    this.fileTitle = null
    this.inputValue = null
    this.resultValue = null
  }
}
