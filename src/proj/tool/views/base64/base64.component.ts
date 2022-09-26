import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  
  constructor(
    private util: UtilService
  ) {}

  ngOnInit(): void {
  }
  
  imgToBase64(data){
    console.log(data)
    this.resultValue = data.data
  }
  getImage(){
    // base=>64
    let data="";//get DataURL somewhere
    let img=new Image();
    img.src=data;
    img.onload=function(){ /*该img元素可以使用了*/ };
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
}
