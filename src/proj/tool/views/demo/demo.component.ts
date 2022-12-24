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
    let htmlstr = `<input type="checkbox" class="ant-checkbox-input ng-untouched ng-pristine ng-valid">`
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
    // let htmlStr = '<div>快乐小白<a href="www.cicode.com">cicode</a></div>'
    let htmlStr='<app-card _ngcontent-serverapp-c251="" class="cell ng-star-inserted" _nghost-serverapp-c250="" ng-reflect-data="[object Object]" style="width: calc(33.33% - 1em); margin-right: 1em; margin-bottom: 1em; flex: 0 0 auto;"><div _ngcontent-serverapp-c250="" class="card" style="box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 3px 0px; border-radius: 8px;"><div _ngcontent-serverapp-c250="" class="img-container" style="width: 308.3px; height: 12em; overflow: hidden; border-radius: 8px; position: relative;"><img _ngcontent-serverapp-c250="" intersection="" class="img" data-type="attr" data-attrname="src" src="http://localhost:4200/assets/image/blog/d05.jpg" style="border-style: none; shape-outside: margin-box; object-fit: cover; filter: blur(0em); transition: transform 300ms ease-in 0s; width: 308.3px; height: 192px; transform: scale(1) translate(0px, 0px);"></div><div _ngcontent-serverapp-c250="" class="card-container" style="padding: 1em;"><div _ngcontent-serverapp-c250="" class="top-tow" style="margin-bottom: 0.25em; color: rgba(0, 0, 0, 0.54);"><span _ngcontent-serverapp-c250="" class="tag-item" style="padding: 0px 0.25em; margin-right: 0.5em; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 8px;">js</span><span _ngcontent-serverapp-c250="" class="key-item mr-2 ng-star-inserted" style="margin-right: 0.5em !important;">#sort</span><span _ngcontent-serverapp-c250="" class="key-item mr-2 ng-star-inserted" style="margin-right: 0.5em !important;">#排序</span></div><h3 _ngcontent-serverapp-c250="" class="card-title" title="javascript 数组排序sort函数实践" style="margin-top: 0px; margin-bottom: 0.5em; color: rgba(0, 0, 0, 0.85); height: 3em; overflow: hidden;"><a _ngcontent-serverapp-c250="" class="alink" ng-reflect-router-link="/blog/detail,565" href="http://localhost:4200/#/blog/detail/565" style="color: rgba(0, 0, 0, 0.85); outline: none; cursor: pointer; transition: color 0.3s ease 0s; touch-action: manipulation;">javascript 数组排序sort函数实践</a></h3><div _ngcontent-serverapp-c250="" class="card-content ellipsis3" style="-webkit-line-clamp: 3; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden; height: 5em;">javascript 数组的各种排列场景（sort函数）。</div><div _ngcontent-serverapp-c250="" class="card-footer" style="display: flex; margin-top: 0.5em; color: rgba(0, 0, 0, 0.54);"><a _ngcontent-serverapp-c250="" class="alink mr-2" ng-reflect-router-link="/blog/operate,1" href="http://localhost:4200/#/blog/operate/1" style="color: rgba(0, 0, 0, 0.54); outline: none; cursor: pointer; transition: color 0.3s ease 0s; touch-action: manipulation; margin-right: 0.5em !important;"><span _ngcontent-serverapp-c250="" nz-icon="" class="anticon card-avatar anticon-avatar:svg-15" ng-reflect-nz-type="avatar:svg-15" style="display: inline-block; color: inherit; line-height: 0; text-align: center; vertical-align: -0.125em; text-rendering: optimizelegibility; -webkit-font-smoothing: antialiased; font-size: larger; margin-right: 0.25em; border-radius: 8px; overflow: hidden;"><svg viewBox="0 0 128 128" height="1em" width="1em" pointer-events="none" display="block" id="svg-8" fill="currentColor" data-icon="avatar:svg-15" aria-hidden="true"><path fill="#FFCC80" d="M41.6 123.8s.1-.2.2-.3c-.1.2-.1.2-.2.3z"></path><path fill="#B388FF" d="M0 0h128v128H0z"></path><path d="M64.1 34.5c-.1.1-.2.2-.3.2.1-.1.2-.2.3-.2zm.9-.7c-.1.1-.2.1-.2.2l.2-.2zm-1.9 1.3c-.1.1-.2.2-.4.2.2 0 .3-.1.4-.2zm-5.4 2.6l-.5.2c.2-.1.4-.2.5-.2zm2.8-1.1l-.2.1s.1-.1.2-.1zm-1.3.5l-.4.2c.1 0 .2-.1.4-.2zm8.8-6.3l-.2.3c.1-.1.2-.2.2-.3zm-1.9 2.1l-.3.2.3-.2zm1.4-1.4l-.3.3c.1-.2.2-.3.3-.3zm-.7.6l-.3.3c.2-.1.3-.2.3-.3zM62 35.8l-.3.2.3-.2zm5 47l-.3 1.6.3-1.6zM56.2 38.1l-.5.1c.1 0 .3 0 .5-.1zm10.4 46.5c-.1.5-.2 1.1-.4 1.6.2-.5.3-1 .4-1.6zm.6-3.6l-.2 1.6c.1-.5.1-1 .2-1.6zm-5.6-20.8c.1.1.2.3.4.4l-.4-.4zm7.5-30.9l-.6.9c.5-.7.9-1.3 1.2-1.8-.1.2-.3.5-.5.7 0 .1 0 .2-.1.2zM67.2 81c1-10.6-2.4-17.3-5.2-20.4 2.7 3.1 6.2 9.8 5.2 20.4zm-1 5.5c-.1.6-.3 1.1-.5 1.7.2-.6.4-1.2.5-1.7zm-5.6-27.4l.2.2c-.1 0-.2-.1-.2-.2zm-.3-.2s.1.1.2.1c-.1 0-.1 0-.2-.1zm-.2-.1zm-.1-.1zm1.7 38.2c-.1-.1-.2-.2-.4-.3l.1.1.3.2zm-.5-37.1l.3.3-.3-.3zm-.3-.4l.3.3c-.2-.1-.2-.2-.3-.3z" fill="none"></path><path fill="#2A56C6" d="M98.8 94.8v.2-.2z"></path><path fill="#FFE0B2" d="M2.8 109.6L0 110.8V128h15.5L2.8 109.6z"></path><path fill="#DD2C00" d="M91.9 128h5.6c-3.8-12-4.4-16-4.9-20.1-.1-.5-.5-2.4-.5-2.9-2.6.7-5.2 1.1-8 1.2-8.7-.2-16.5-3.8-22.3-9.3l-.2-.2-.1-.1c-2.9.2-7.6.2-10.8.6-4.6.6-9.6 1.3-15 2.4-4.7.9-11.2 2.7-33.3 9.3l.5.7L15.5 128h70.2"></path><path fill="#FFEB3B" d="M66.2 86.5c0-.1 0-.1.1-.2.1-.6.3-1.1.4-1.6v-.2l.3-1.6v-.1l.2-1.6c1-10.6-2.4-17.3-5.2-20.4-.1-.1-.2-.3-.4-.4l-.1-.1-.3-.3-.1-.1-.3-.3-.1-.1-.2-.2-.1-.1c-.1-.1-.1-.1-.2-.1 0 0-.1 0-.1-.1l-.1-.1s-.1 0-.1-.1c-1.6-1.7-3.3-3-4.9-4.1-.9-.6-1.7-1.2-2.5-1.6-1.8-1.1-3.2-1.6-3.4-1.7-1.3-1.2-2.3-3-2.6-5-.6-4.4.3-6.4 4.3-7.1 1-.2 2-.1 3 .2l.1-.7c.6-.1 1.1-.2 1.6-.4l.5-.1 1.1-.3.5-.2 1-.3.4-.2c.4-.1.7-.3 1.1-.5l.2-.1 1.2-.6.3-.2c.3-.1.5-.3.8-.5.1-.1.3-.2.4-.2.2-.1.4-.3.7-.4.1-.1.2-.2.3-.2l.7-.5c.1-.1.2-.1.2-.2.3-.2.5-.4.8-.7.1-.1.2-.1.2-.2l.5-.5.3-.3.4-.4.3-.3.3-.4c.1-.1.2-.2.2-.3.2-.2.3-.4.4-.6l.6-.9.1-.2c.2-.3.3-.5.5-.7 4.2 5.9 14.5 10.4 39.3 6.7-4.2-14-17.3-23.5-31.3-21.4-5.3.8-10.1 3.2-14 6.6l-.2.2c-.5.4-1 .9-1.4 1.4-5.3 4.8-23.3 19.8-52.2 26.5-3.9 0-7.4 1.6-9.9 4.2v19.3c.3.3.6.6.9.8l-.3.9S30.9 96.4 64 90.3l1.6-1.8c0-.1 0-.1.1-.2.2-.7.4-1.3.5-1.8z"></path><path fill="#FFE0B2" d="M84 106.2c2.8-.1 5.4-.5 8-1.2l.8-3.8c4.3-19.3 9.7-37.4 15-52.9h6.9l-4.8-8.2c-.2-1.9-.6-3.6-1.2-5.3-24.8 3.7-35-2.5-39.1-8.4-.3.5-.7 1.1-1.2 1.8l-.4.6-.2.3-.3.4-.3.3-.4.4-.3.3-.5.5s-.1 0-.2.1c-.3.2-.5.4-.8.7-.1.1-.2.1-.2.2-.2.2-.4.3-.7.5-.1.1-.2.2-.3.2-.2.1-.4.3-.7.4-.1.1-.2.2-.4.2l-.8.5-.3.2-1.2.6-.2.1-1.1.5-.4.2c-.3.1-.6.2-1 .3l-.5.2c-.3.1-.7.2-1.1.3l-.5.1-1.6.4c-.1.2-.1.5-.1.7-.9-.3-1.9-.4-3-.2-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1l.1.1.1.1.1.1s.1.1.2.1c0 0 .1 0 .1.1l.2.2.1.1.3.3.1.1.3.3.1.1s.2.3.4.4c2.7 3.1 7.2 9.8 6.2 20.4l-.2 1.6v.1l-.3 1.6v.2c-.1.5-.2 1.1-.4 1.6 0 .1 0 .1-.1.2-.1.6-.3 1.1-.5 1.7 0 .1 0 .1-.1.2-.8 2.6-1.8 5.3-3.3 8.3.1.1.2.2.4.3 5.7 5.6 13.5 9.1 22.2 9.3z"></path><path fill="#DD2C00" d="M85.6 128h5.1"></path><circle fill="#444" cx="95.8" cy="46.5" r="2"></circle></svg></span><span _ngcontent-serverapp-c250="">liuk123</span></a>发布于<span _ngcontent-serverapp-c250="" class="mr-2" style="margin-right: 0.5em !important;">2022-11-20</span><span _ngcontent-serverapp-c250="" style="flex: 1 1 auto;"></span><div _ngcontent-serverapp-c250=""></div></div></div></div></app-card><app-card _ngcontent-serverapp-c251="" class="cell ng-star-inserted" _nghost-serverapp-c250="" ng-reflect-data="[object Object]" style="width: calc(33.33% - 1em); margin-right: 1em; margin-bottom: 1em; flex: 0 0 auto;"><div _ngcontent-serverapp-c250="" class="card" style="box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 3px 0px; border-radius: 8px;"><div _ngcontent-serverapp-c250="" class="img-container" style="width: 308.3px; height: 12em; overflow: hidden; border-radius: 8px; position: relative;"><img _ngcontent-serverapp-c250="" intersection="" class="img" data-type="attr" data-attrname="src" src="http://www.cicode.cn/api/assets/uploadFile/2022/10/19/cf54aadb-241e-4f1a-82fa-d2447a72c6b2.png?tr=1605,889" style="border-style: none; shape-outside: margin-box; object-fit: cover; filter: blur(0em); transition: transform 300ms ease-in 0s; width: 308.3px; height: 192px; transform: scale(1) translate(0px, 0px);"></div><div _ngcontent-serverapp-c250="" class="card-container" style="padding: 1em;"><div _ngcontent-serverapp-c250="" class="top-tow" style="margin-bottom: 0.25em; color: rgba(0, 0, 0, 0.54);"><span _ngcontent-serverapp-c250="" class="tag-item" style="padding: 0px 0.25em; margin-right: 0.5em; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 8px;">vue</span></div><h3 _ngcontent-serverapp-c250="" class="card-title" title="vue 导航栏根据内容块滑动改变状态" style="margin-top: 0px; margin-bottom: 0.5em; color: rgba(0, 0, 0, 0.85); height: 3em; overflow: hidden;"><a _ngcontent-serverapp-c250="" class="alink" ng-reflect-router-link="/blog/detail,562" href="http://localhost:4200/#/blog/detail/562" style="color: rgba(0, 0, 0, 0.85); outline: none; cursor: pointer; transition: color 0.3s ease 0s; touch-action: manipulation;">vue 导航栏根据内容块滑动改变状态</a></h3><div _ngcontent-serverapp-c250="" class="card-content ellipsis3" style="-webkit-line-clamp: 3; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden; height: 5em;">导航栏和页面标题互动，页面滚动，导航栏定位页面顶部的标题。</div><div _ngcontent-serverapp-c250="" class="card-footer" style="display: flex; margin-top: 0.5em; color: rgba(0, 0, 0, 0.54);"><a _ngcontent-serverapp-c250="" class="alink mr-2" ng-reflect-router-link="/blog/operate,1" href="http://localhost:4200/#/blog/operate/1" style="color: rgba(0, 0, 0, 0.54); outline: none; cursor: pointer; transition: color 0.3s ease 0s; touch-action: manipulation; margin-right: 0.5em !important;"><span _ngcontent-serverapp-c250="" nz-icon="" class="anticon card-avatar anticon-avatar:svg-15" ng-reflect-nz-type="avatar:svg-15" style="display: inline-block; color: inherit; line-height: 0; text-align: center; vertical-align: -0.125em; text-rendering: optimizelegibility; -webkit-font-smoothing: antialiased; font-size: larger; margin-right: 0.25em; border-radius: 8px; overflow: hidden;"><svg viewBox="0 0 128 128" height="1em" width="1em" pointer-events="none" display="block" id="svg-8" fill="currentColor" data-icon="avatar:svg-15" aria-hidden="true"><path fill="#FFCC80" d="M41.6 123.8s.1-.2.2-.3c-.1.2-.1.2-.2.3z"></path>'
    let htmlTree = this.htmlPaser.htmlParser(htmlStr)
    console.log(htmlTree)
    let ret = this.getContent(htmlTree, this.markdownOption, null)
    // ret = ret.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g, '')
    // .replace(/\n\s+\n/g, '\n\n')
    // .replace(/\n{3,}/g, '\n\n')
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
      let ret = null
      let output = ''
      if(data.children){
        ret = this.getContent(data.children, option, data)
      }
      if(!this.isVoid(data.tagName)&&(data.text + ret).length > 0){
        let replacement = this.getReplacement(data, parentNode, option)
        if(!this.isBlock(data)){
          ret = ` ${ret.trim()} `
        }
        output = replacement(data.text + ret, data, parentNode)
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
      replacement: function (content) {
        return '~~' + content + '~~'
      }
    },
    // li checkbox
    {
      filter: function (node, parentNode) {
        return node.tagName == 'input' && node.attributes.some(v => v.name == 'checkbox') && parentNode?.tagName === 'li'
      },
      replacement: function (content, node) {
        return (node.attributes.some(v => v.name == 'checkbox')?.value ? '[x]' : '[ ]') + ' '
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
        return `[${content}](${href} "${title}")`
      }
    },
    // img
    {
      filter: 'img',
      replacement: (content, node) => {
        let alt = node.attributes.find(v => v.name == 'alt')?.value
        let src = node.attributes.find(v => v.name == 'src')?.value
        let title = node.attributes.find(v => v.name == 'title')?.value
        return src ? `![${alt}](${src} "${title}")` : ''
      }
    },
    // code block
    {
      filter: (node, parentNode) =>
        node.tagName == 'code' && parentNode?.tagName === 'pre',
      replacement: (content) => {
        return `\n\n   ${content.replace(/\n/g, '\n    ')}\n\n`
      }
    },
    {
      filter: 'blockquote',
      replacement: function (content) {
        content = content.trim().replace(/\n{3,}/g, '\n\n').replace(/^/gm, '> ')
        return `\n\n${content}\n\n`
      }
    },
    {
      filter: 'li',
      replacement: function (content, node, parentNode) {
        content = content.replace(/^\s+/, '').replace(/\n/gm, '\n    ')
        let prefix = '*   '
        let index = Array.prototype.indexOf.call(parentNode?.children, node) + 1

        prefix = /ol/i.test(parentNode?.tagName) ? index + '.  ' : '*   '
        return prefix + content
      }
    },
    {
      filter: ['ul', 'ol'],
      replacement: (content, node, parentNode) => {
        var strings = []
        for (var i = 0; i < node.children.length; i++) {
          strings.push(node.children[i].text)
        }

        if (/li/i.test(parentNode?.tagName)) {
          return '\n' + strings.join('\n')
        }
        return '\n\n' + strings.join('\n') + '\n\n'
      }
    },
    {
      filter: ['th', 'td'],
      replacement: function (content, node) {
        return this.cell(content, node)
      }
    },
    {
      filter: 'tr',
      replacement: function (content, node, parentNode) {
        var borderCells = ''
        var alignMap = { left: ':--', right: '--:', center: ':-:' }

        if (parentNode?.tagName === 'thead') {
          for (var i = 0; i < node.children.length; i++) {
            var align = node.children[i].attributes.find(v => v.name == 'align')?.value
            var border = '---'

            if (align) border = alignMap[align] || border

            borderCells += this.cell(border, node.children[i])
          }
        }
        return '\n' + content + (borderCells ? '\n' + borderCells : '')
      }
    },
    {
      filter: 'table',
      replacement: function (content) {
        return '\n\n' + content + '\n\n'
      }
    },

    {
      filter: ['thead', 'tbody', 'tfoot'],
      replacement: function (content) {
        return content
      }
    },

    // Syntax-highlighted code blocks
    {
      filter: function (node, parentNode) {
        return node.tagName === 'div' &&
          parentNode?.tagName === 'pre' &&
          this.highlightRegEx.test(parentNode?.tagName)
      },
      replacement: function (content, node, parentNode) {
        var language = parentNode?.tagName.match(this.highlightRegEx)[1]
        return '\n\n```' + language + '\n' + node.text + '\n```\n\n'
      }
    },
    {
      filter: (node) => {
        return this.isBlock(node)
      },
      replacement: function (content, node) {
        return `\n\n${content}\n\n`
      }
    },
    // Anything else!
    {
      filter: function () {
        return true
      },
      replacement: function (content, node) {
        return content
      }
    }
  ]

  isBlock(node) {
    return this.blocks.includes(node.tagName);
  }
  highlightRegEx = /highlight highlight-(\S+)/
  blocks = ['address', 'article', 'aside', 'audio', 'blockquote', 'body',
    'canvas', 'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
    'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav',
    'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table',
    'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'
  ]
  cell(content, node, parentNode) {
    var index = Array.prototype.indexOf.call(parentNode?.children, node)
    var prefix = ' '
    if (index === 0) prefix = '| '
    return prefix + content + ' |'
  }
  voids = [
    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'
  ]
  
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
