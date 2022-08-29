import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-img-to-base64',
  templateUrl: './img-to-base64.component.html',
  styleUrls: ['./img-to-base64.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgToBase64Component implements OnInit {


  inputValue=null
  base64Value=null
  
  constructor(
    private util: UtilService
  ) {}

  ngOnInit(): void {
  }
  
  getImgBase64(e){
    console.log(e)
  }
  getImage(){
    // base=>64
    let data="";//get DataURL somewhere
    let img=new Image();
    img.src=data;
    img.onload=function(){ /*该img元素可以使用了*/ };
  }
  getStrBase64(){
    const str = JSON.stringify({name: '刘凯123asc../@'})
    let base64 = this.util.strToBase64(str)
    console.log(base64)
    let ret = this.util.base64ToStr(base64)
    console.log(ret)

  }
}
