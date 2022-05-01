import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HtmlParserService } from 'src/app/shared/utils/htmlparser.service';


@Component({
  selector: 'app-img-to-base64',
  templateUrl: './img-to-base64.component.html',
  styleUrls: ['./img-to-base64.component.less']
})
export class ImgToBase64Component implements OnInit {

  constructor(
    private http: HttpClient,
    private parser: HtmlParserService,
  ) { }

  ngOnInit(): void {
  }
  getData(url, contentType){
    this.http.get(url,{responseType: contentType}).subscribe(res=>{
      if(res){
        let tem = this.parser.htmlParser(res)
        console.log(tem)
      }
    })
  }
}
