import { Component, OnInit } from '@angular/core';
import { HtmlParserService } from 'src/app/core/services/htmlparser.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  constructor(
    private util: UtilService,
    private htmlPaser: HtmlParserService,
    private jsUtil: JsUtilService
  ) { }

  ngOnInit(): void {
    
  }
  copy(data) {
    this.util.copyToClipboard(data)
  }
  uuid() {
    console.log(this.util.UUIDGenerator())
  }

  parser() {
    let htmlstr = ``
    let i = htmlstr.indexOf('<body>')
    let lasti = htmlstr.lastIndexOf('</body>')
    if (i > 0) {
      htmlstr = htmlstr.slice(i, lasti + 7)
    }
    let obj = this.htmlPaser.htmlParser(htmlstr)
    this.jsUtil.findItem(obj, v => {
      if (v.attributes.some(val => val.value == 'HotItem-content')) {
        console.log(v)
      }
    })
    console.log(obj)
  }

}
