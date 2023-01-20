import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HtmlParserWorkerService } from 'src/app/shared/worker/htmlparser-worker.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-html-marked',
  templateUrl: './html-marked.component.html',
  styleUrls: ['./html-marked.component.less']
})
export class HtmlMarkedComponent implements OnInit, OnDestroy {
  
  @ViewChild('edit', { read: ElementRef, static: true })
  edit: ElementRef
  @ViewChild('field', { read: ElementRef, static: true })
  field: ElementRef
  resultValue=''
  unSub$ = new Subject()

  voids = [
    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'
  ]
  blocks = ['address', 'article', 'aside', 'audio', 'blockquote', 'body',
    'canvas', 'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
    'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav',
    'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table',
    'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'
  ]
  highlightRegEx = /highlight highlight-(\S+)/
  constructor(
    private HtmlParserWorkerService: HtmlParserWorkerService
  ) { }

  ngOnInit(): void {
    if(ConfigService.Config.isBrowser){
      window.addEventListener('paste', this.pasteFn)
      this.HtmlParserWorkerService.start()
      this.HtmlParserWorkerService.workerEvent.pipe(takeUntil(this.unSub$)).subscribe(htmlTree=>{
        let ret = this.getContent(htmlTree, this.markdownOption, null)
        let markdownStr = ret.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g, '')
        .replace(/\n\s+\n/g, '\n\n')
        .replace(/\n{3,}/g, '\n\n')
        this.resultValue = this.insert(this.field.nativeElement, this.resultValue, markdownStr)
      })
    }
  }
  ngOnDestroy(): void {
    if(ConfigService.Config.isBrowser){
      window.removeEventListener('paste', this.pasteFn)
      this.HtmlParserWorkerService.stop()
      this.unSub$.next()
      this.unSub$.complete()
    }
  }
  pasteFn=this.editChange.bind(this)

  insert(textarea, resultValue, markdownStr){
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    if(startPos!==undefined){
      var beforeValue = resultValue.substring(0, startPos);
      var afterValue = resultValue.substring(endPos, resultValue.length);
      resultValue = beforeValue + markdownStr + afterValue;
      textarea.selectionStart = startPos + markdownStr.length;
      textarea.selectionEnd = startPos + markdownStr.length;
      textarea.focus()
    }
    return resultValue
  }
  editChange(e:ClipboardEvent){
    e.preventDefault()
    const clipboardData = e.clipboardData.getData('text/html')
    let markdownStr = ''
    if(clipboardData){
      this.HtmlParserWorkerService.postMessage(clipboardData)
    }else{
      markdownStr = e.clipboardData.getData('text/plain')
      this.resultValue = this.insert(this.field.nativeElement, this.resultValue, markdownStr)
    }
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
  /**
   * 获取符合条件的替换函数
   * @param node 
   * @param parentNode 
   * @param option 
   * @returns 
   */
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
      filter: 'sup',
      replacement: function (content) {
        return '^' + content + '^';
      }
    },

    {
      filter: 'sub',
      replacement: function (content) {
        return '~' + content + '~';
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
  isVoid (node) {
    return this.voids.includes(node.tagName)
  }

  cell(content, node, parentNode=null) {
    var index = Array.prototype.indexOf.call(parentNode?.children, node)
    var prefix = ' '
    if (index === 0) prefix = '| '
    return prefix + content + ' |'
  }
}
