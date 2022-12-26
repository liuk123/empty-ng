import { Component, OnDestroy, OnInit } from '@angular/core';
import { HtmlParserWorkerService } from 'src/app/core/worker/htmlparser-worker.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit, OnDestroy {

  constructor(
    private util: UtilService,
    private htmlPaserWorker: HtmlParserWorkerService,
    private jsUtil: JsUtilService
  ) { }

  ngOnInit(): void {
    this.htmlPaserWorker.start()
    this.htmlPaserWorker.workerEvent.subscribe(v=>{
      this.jsUtil.findItem(v, v => {
        if (v.attributes.some(val => val.value == 'HotItem-content')) {
          console.log(v)
        }
      })
      console.log(v)
    })
  }
  ngOnDestroy(): void {
    this.htmlPaserWorker.stop()
  }
  copy(data) {
    this.util.copyToClipboard(data)
  }
  uuid() {
    console.log(this.util.UUIDGenerator())
  }

  parser() {
    let htmlstr = `<h2 style="border: 0px; margin: 2px 0px; padding: 0px; font-size: 1.8em; line-height: 1.8em; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-style: normal;">非打印字符</h2><p style="border: 0px; margin-bottom: 0px; padding: 0px; line-height: 2em; overflow-wrap: break-word; word-break: break-all; font-size: 13px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif;">非打印字符也可以是正则表达式的组成部分。下表列出了表示非打印字符的转义序列：</p><table class="reference" style="border: 0px; margin: 4px 0px; padding: 0px; width: 834.797px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);"><tbody style="border: 0px; margin: 0px; padding: 0px;"><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><th width="20%" style="border: 1px solid rgb(85, 85, 85); margin: 0px; padding: 3px; font-size: 13px; color: rgb(255, 255, 255); background-color: rgb(85, 85, 85); vertical-align: top;">字符</th><th width="80%" style="border: 1px solid rgb(85, 85, 85); margin: 0px; padding: 3px; font-size: 13px; color: rgb(255, 255, 255); background-color: rgb(85, 85, 85); vertical-align: top;">描述</th></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\cx</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配由x指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\f</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个换页符。等价于 \x0c 和 \cL。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\n</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个换行符。等价于 \x0a 和 \cJ。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\r</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个回车符。等价于 \x0d 和 \cM。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\s</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。注意 Unicode 正则表达式会匹配全角空格符。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\S</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\t</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个制表符。等价于 \x09 和 \cI。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\v</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个垂直制表符。等价于 \x0b 和 \cK。</td></tr></tbody></table><hr style="background-color: rgb(212, 212, 212); color: rgb(212, 212, 212); height: 1px; border-top: 0px; clear: both; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-size: 12px;"><h2 style="border: 0px; margin: 2px 0px; padding: 0px; font-size: 1.8em; line-height: 1.8em; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-style: normal;">特殊字符</h2>`
    let i = htmlstr.indexOf('<body>')
    let lasti = htmlstr.lastIndexOf('</body>')
    if (i > 0) {
      htmlstr = htmlstr.slice(i, lasti + 7)
    }
    this.htmlPaserWorker.postMessage(htmlstr)
  }

}
