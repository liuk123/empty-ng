import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';
import { AjaxService } from '../../service/ajax.service';
import { MessageUtilService } from 'src/app/core/services/message-util.service';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.less']
})
export class NodeApiComponent {
  inputValue: string
  resultValue: string

  constructor(
    private util: UtilService,
    private srv: AjaxService,
    private messageSrv: MessageUtilService
  ) { }

  copy(data) {
    this.util.copyToClipboard(data)
  }
  clear() {
    this.inputValue = null
    this.resultValue = null
  }
  downloadFavicon(data){
    let reg = new RegExp('^(ht|f)tp(s?)://[0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*(:(0-9)*)' + "*(/?)([a-zA-Z0-9-.?,'/\\+&amp;%$#_]*)?")
    let url = data?.trim()
    if(!reg.test(url)){
      this.messageSrv.warning('请输入正确网址格式，例:http://www.cicode.cn/blog/home')
      return null
    }
    let params = {
      url: url
    }
    this.srv.getFavicon(params).subscribe(v=>{
      if(v instanceof HttpResponse){
        let fileName =v.headers.get('content-disposition')
        this.util.download(v.body, fileName.slice(fileName.indexOf('filename=')+9))
        this.inputValue = null
      }
    })
  }
}
