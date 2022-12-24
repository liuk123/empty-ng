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

  voids = [
    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'
  ]
  highlightRegEx = /highlight highlight-(\S+)/
  blocks = ['address', 'article', 'aside', 'audio', 'blockquote', 'body',
    'canvas', 'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
    'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav',
    'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table',
    'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'
  ]

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
    let htmlstr = `<h2 style="border: 0px; margin: 2px 0px; padding: 0px; font-size: 1.8em; line-height: 1.8em; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-style: normal;">非打印字符</h2><p style="border: 0px; margin-bottom: 0px; padding: 0px; line-height: 2em; overflow-wrap: break-word; word-break: break-all; font-size: 13px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif;">非打印字符也可以是正则表达式的组成部分。下表列出了表示非打印字符的转义序列：</p><table class="reference" style="border: 0px; margin: 4px 0px; padding: 0px; width: 834.797px; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-size: 12px; background-color: rgb(255, 255, 255);"><tbody style="border: 0px; margin: 0px; padding: 0px;"><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><th width="20%" style="border: 1px solid rgb(85, 85, 85); margin: 0px; padding: 3px; font-size: 13px; color: rgb(255, 255, 255); background-color: rgb(85, 85, 85); vertical-align: top;">字符</th><th width="80%" style="border: 1px solid rgb(85, 85, 85); margin: 0px; padding: 3px; font-size: 13px; color: rgb(255, 255, 255); background-color: rgb(85, 85, 85); vertical-align: top;">描述</th></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\cx</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配由x指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\f</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个换页符。等价于 \x0c 和 \cL。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\n</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个换行符。等价于 \x0a 和 \cJ。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\r</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个回车符。等价于 \x0d 和 \cM。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\s</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。注意 Unicode 正则表达式会匹配全角空格符。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\S</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px;"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\t</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个制表符。等价于 \x09 和 \cI。</td></tr><tr style="border: 0px; margin: 0px; padding: 0px; background-color: rgb(246, 244, 240);"><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; min-width: 24px; line-height: 2em; vertical-align: top;">\v</td><td style="border: 1px solid rgb(212, 212, 212); margin: 0px; padding: 7px 5px; font-size: 13px; line-height: 2em; min-width: 24px; vertical-align: top;">匹配一个垂直制表符。等价于 \x0b 和 \cK。</td></tr></tbody></table><hr style="background-color: rgb(212, 212, 212); color: rgb(212, 212, 212); height: 1px; border-top: 0px; clear: both; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-size: 12px;"><h2 style="border: 0px; margin: 2px 0px; padding: 0px; font-size: 1.8em; line-height: 1.8em; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;Noto Sans CJK SC&quot;, &quot;WenQuanYi Micro Hei&quot;, Arial, sans-serif; font-style: normal;">特殊字符</h2>`
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

  toMarkdown() {
    let htmlStr = String.raw`<h3 id="ci_2、retrieve" class="anchor-h" style="margin-top: 0px; margin-bottom: 0.5em; color: rgba(0, 0, 0, 0.85); scroll-margin: 48px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; background-color: rgb(250, 250, 250);">2、retrieve</h3><p style="margin-bottom: 1em; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; background-color: rgb(250, 250, 250);">紧接着shouldReuseRoute方法返回false的节点调用，入参route即是当前层级路由不需要复用。以上个例子说明，此时的route是<code style="font-size: 1em; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; background-color: rgba(0, 0, 0, 0.03); padding-top: 0px; padding-bottom: 0px; color: rgb(220, 57, 88);">main/cop/fan/</code>的路由节点。 retrieve调用根据返回结果来决定是否继续调用：如果返回的是null，当前路由对应的组件会实例化，并继续对其子级路由调用retrieve方法，直到遇到缓存路由或到末级路由</p><blockquote style="margin-bottom: 1em; border-left-width: 4px; border-left-color: rgb(0, 122, 204); padding: 0.25em 1em; background-color: rgba(0, 0, 0, 0.03); color: rgba(0, 0, 0, 0.85); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px;"><p style="margin-bottom: 1em;">在本次路由还原时也会调用，用来获取缓存示例</p></blockquote><h3 id="ci_3、shoulddetach" class="anchor-h" style="margin-top: 0px; margin-bottom: 0.5em; color: rgba(0, 0, 0, 0.85); scroll-margin: 48px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; background-color: rgb(250, 250, 250);">3、shouldDetach</h3>`
    let htmlTree = this.htmlPaser.htmlParser(htmlStr)
    console.log(htmlTree)
    let ret = this.getContent(htmlTree, this.markdownOption, null)
    ret = ret.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g, '')
    .replace(/\n\s+\n/g, '\n\n')
    .replace(/\n{3,}/g, '\n\n')
    console.log(ret)
  }
  getContent(data, option, parentNode=null){
    if(Array.isArray(data)){
      let tem = ''
      for(let i=0; i<data.length; i++){
        let ret = this.getContent(data[i], option, parentNode)
        tem+=ret
      }
      return tem
    }else if(data instanceof Object){
      let ret = ''
      let output = ''
      if(data.children){
        ret = this.getContent(data.children, option, data)
      }
      if(!this.isVoid(data.tagName)){
        let replacement = this.getReplacement(data, parentNode, option)
        if(!this.isBlock(data) && ret){
          ret = `${ret.trim()}`
        }
        output = replacement(ret, data, parentNode)
      }
      return output
    }
    return data
  }
  getReplacement(node, parentNode, option){
    return option.find(v=>{
      if(typeof v.filter == 'string'&&v.filter==node.tagName){
        return true
      }else if(Array.isArray(v.filter)&&v.filter.includes(node.tagName)){
        return true
      }else if(typeof v.filter === 'function'&&v.filter(node,parentNode)){
        return true
      }
      return false
    })?.replacement
  }
  markdownOption = [
    {
      filter: 'text',
      replacement: (content, node) => {
        return node.text + content
      }
    },
    {
      filter: 'p',
      replacement: (content) => {
        return `\n\n${content}\n\n`
      }
    }, {
      filter: 'br',
      replacement: () => {
        return `\n`
      }
    }, {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      replacement: (content, node) => {
        let hLevel = node.tagName.charAt(1)
        let hPrefix = ''
        for (var i = 0; i < hLevel; i++) {
          hPrefix += '#'
        }
        return `\n\n${hPrefix} ${content.trim()}\n\n`
      }
    }, {
      filter: 'hr',
      replacement: () => {
        return `\n\n***\n\n`
      }
    }, {
      filter: ['em', 'i'],
      replacement: (content) => {
        return `_${content}_`
      }
    }, {
      filter: ['strong', 'b'],
      replacement: (content) => {
        return `**${content}**`
      }
    },
    {
      filter: ['del', 's', 'strike'],
      replacement: (content) => {
        return '~~' + content + '~~'
      }
    },
    // li checkbox
    {
      filter: (node, parentNode) => {
        return node.tagName == 'input' && node.attributes.some(v => v.name == 'type' && v.value =='checkbox') && parentNode?.tagName === 'li'
      },
      replacement: (content, node) => {
        return (node.attributes.some(v => v.name == 'checked') ? '[x]' : '[ ]') + ' '
      }
    },
    // code inline
    {
      filter: (node, parentNode) =>
        node.tagName == 'code' && parentNode?.tagName !== 'pre',
      replacement: (content) => {
        return '`' + content + '`'
      }
    },
    // a
    {
      filter: (node) => node.tagName == 'a' && node.attributes.some(v => v.name == 'href'),
      replacement: (content, node) => {
        let title = node.attributes.find(v => v.name == 'title')?.value
        let href = node.attributes.find(v => v.name == 'href')?.value
        return `[${content??""}](${href} "${title??''}")`
      }
    },
    // img
    {
      filter: 'img',
      replacement: (content, node) => {
        let alt = node.attributes.find(v => v.name == 'alt')?.value
        let src = node.attributes.find(v => v.name == 'src')?.value
        let title = node.attributes.find(v => v.name == 'title')?.value
        return src ? `![${alt??''}](${src} "${title??''}")` : ''
      }
    },
    // code block
    {
      filter: (node, parentNode) =>
        node.tagName == 'code' && parentNode?.tagName === 'pre',
      replacement: (content) => {
        return "\n\n```\n" + content.replace(/\n/g, '\n    ')+ "\n```\n\n"
      }
    },
    {
      filter: 'blockquote',
      replacement: (content) => {
        content = content.trim().replace(/\n{3,}/g, '\n\n').replace(/^/gm, '> ')
        return `\n\n${content}\n\n`
      }
    },
    {
      filter: 'li',
      replacement: (content, node, parentNode) => {
        content = content.trim()
        let prefix = '*   '
        let index = Array.prototype.indexOf.call(parentNode?.children, node) + 1

        prefix = parentNode?.tagName == 'ol' ? index + '.  ' : '*   '
        return '\n\n' + prefix + content + '\n\n'
      }
    },
    {
      filter: ['ul', 'ol'],
      replacement: (content) => {
        return `\n\n${content}\n\n`
      }
    },
    {
      filter: ['th', 'td'],
      replacement: (content, node, parentNode) => {
        return this.cell(content, node, parentNode)
      }
    },
    {
      filter: 'tr',
      replacement: (content, node, parentNode) => {
        let borderCells = ''
        let alignMap = { left: ':--', right: '--:', center: ':-:' }

        if (parentNode?.tagName === 'thead' || node.children[0].tagName==='th') {
          borderCells = '|'
          for (let i = 0; i < node.children.length; i++) {
            let align = node.children[i].attributes.find(v => v.name == 'align')?.value
            let border = '---'

            if (align) border = alignMap[align] || border

            borderCells += this.cell(border, node.children[i], parentNode)
          }
        }
        return '\n' + content + (borderCells ? '\n' + borderCells : '')
      }
    },
    {
      filter: 'table',
      replacement: (content) => {
        return '\n\n' + content + '\n\n'
      }
    },

    {
      filter: ['thead', 'tbody', 'tfoot'],
      replacement: (content) => {
        return content
      }
    },

    // Syntax-highlighted code blocks
    {
      filter: (node, parentNode) => {
        return node.tagName === 'div' &&
          parentNode?.tagName === 'pre' &&
          this.highlightRegEx.test(parentNode?.tagName)
      },
      replacement: (content, node, parentNode) => {
        var language = parentNode?.tagName.match(this.highlightRegEx)[1]
        return '\n\n```' + language + '\n' + node.text + '\n```\n\n'
      }
    },
    {
      filter: (node) => {
        return this.isBlock(node)
      },
      replacement: (content, node) => {
        return `\n\n${content}\n\n`
      }
    },
    // Anything else!
    {
      filter: () => {
        return true
      },
      replacement: (content, node) => {
        return content
      }
    }
  ]

  isBlock(node) {
    return this.blocks.includes(node.tagName);
  }
  cell(content, node, parentNode=null) {
    var index = Array.prototype.indexOf.call(parentNode?.children, node)
    var prefix = ' '
    if (index === 0) prefix = '| '
    return prefix + content + ' |'
  }
  isVoid (node) {
    return this.voids.includes(node.tagName)
  }
  canConvert (node, filter) {
    if (typeof filter === 'string') {
      return filter === node.tagName
    }
    if (Array.isArray(filter)) {
      return filter.indexOf(node.tagName) !== -1
    } else if (typeof filter === 'function') {
      return filter(node)
      // return filter.call(toMarkdown, node)
    } else {
      throw new TypeError('`filter` needs to be a string, array, or function')
    }
  }

}
