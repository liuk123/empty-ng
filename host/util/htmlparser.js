
class HtmlParserUtil {
  startTagReg = /^<([-A-Za-z0-9_]+)((?:\s*[a-zA-Z_:@*][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/
  attributeReg = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g
  endTagReg = /^<\/([-A-Za-z0-9_]+)[^>]*>/
  docTypeReg = /^<!(.*?)|\s|[\r\n]>/

  // Empty Elements - HTML 4.01
  empty

  // Block Elements - HTML 4.01
  block

  // Inline Elements - HTML 4.01
  inline

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  closeSelf

  // Attributes that have their values filled in disabled="disabled"
  fillAttrs

  // Special Elements (can contain anything)
  special

  curParent = null
  constructor () {
    this.empty = this.makeMap('area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,META')
    this.block = this.makeMap('address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,pre,script,table,tbody,td,tfoot,th,thead,tr,ul')
    this.inline = this.makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,p,select,small,span,strike,strong,sub,sup,textarea,tt,u,var')
    this.closeSelf = this.makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr')
    this.fillAttrs = this.makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected')
    this.special = this.makeMap('script,style')
  }

  makeMap (str) {
    const obj = {}; const items = str.split(',')
    for (let i = 0; i < items.length; i++) { obj[items[i]] = true }
    return obj
  }

  parse (html, options) {
    function advance (num) {
      html = html.slice(num)
    }
    let last = html; let chars
    while (html) {
      chars = true
      if (this.curParent == null || !this.special[this.curParent.tagName]) {
        if (html.startsWith('<!--')) {
          const index = html.indexOf('-->')
          if (index >= 0) {
            options.onComment({
              type: 'comment',
              value: html.slice(4, index)
            })
            advance(index + 3)
            chars = false
          }
          continue
        } else if (html.startsWith('<')) {
          const startTagMatch = html.match(this.startTagReg)
          if (startTagMatch) {
            options.onStartTag({
              type: 'tagStart',
              value: startTagMatch[1].toLowerCase()
            })

            advance(startTagMatch[0].length)
            chars = false
            if (startTagMatch[2]) {
              let a = null
              while ((a = this.attributeReg.exec(startTagMatch[2])) != null) {
                options.onAttribute({
                  type: 'attribute',
                  value: {
                    name: a[1],
                    value: a[2] || a[3] || a[4] || (this.fillAttrs[a[1]] ? a[1] : '')
                  }
                })
              }
              if (this.empty[startTagMatch[1].toLowerCase()]) {
                options.onEndTag({
                  value: startTagMatch[1].toLowerCase()
                })
              }
            }
            continue
          }

          const endTagMatch = html.match(this.endTagReg)
          if (endTagMatch) {
            options.onEndTag({
              type: 'tagEnd',
              value: endTagMatch[1].toLowerCase()
            })
            advance(endTagMatch[0].length)
            chars = false
            continue
          }
          const docTypeMatch = html.match(this.docTypeReg)
          if (docTypeMatch) {
            options.onDoctype({
              type: 'docType',
              value: docTypeMatch[0]
            })
            advance(docTypeMatch[0].length)
            chars = false
            continue
          }
        }
        if (chars) {
          let textEndIndex = html.indexOf('<')
          options.onText({
            type: 'text',
            value: html.slice(0, textEndIndex)
          })
          textEndIndex = textEndIndex === -1 ? html.length : textEndIndex
          advance(textEndIndex)
        }
      } else {
        html = html.replace(new RegExp('([\\s\\S]*?)<\\/' + this.curParent.tagName + '[^>]*>'), function (all, text) {
          text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2')
          options.onChars(text)
          return ''
        })
        options.onEndTag({
          value: this.curParent.tagName
        })
      }

      if (html === last) { throw new Error('Parse Error: ' + html) }
      last = html
    }
  }

  htmlParser (str) {
    const ast = {
      children: [],
      attributes: [],
      text: [],
      tagName: ''
    }
    this.curParent = ast
    const stack = []
    const me = this
    this.parse(str, {
      onComment (node) {
      },
      onStartTag (token) {
        if (me.block[token.value]) {
          // &&stack[stack.length - 1].tagName!=='a'
          while (stack.length > 0 && me.inline[stack[stack.length - 1].tagName]) {
            this.onEndTag({
              value: stack[stack.length - 1].tagName
            })
          }
        }
        if (me.closeSelf[token.value] && stack.length > 0 && stack[stack.length - 1].tagName === token.value) {
          this.onEndTag(token)
        }

        const tag = {
          tagName: token.value,
          attributes: [],
          text: [],
          children: []
        }
        me.curParent.children.push(tag)
        stack.push(tag)
        me.curParent = tag
      },
      onAttribute (token) {
        me.curParent.attributes.push(token.value)
      },
      onEndTag (token) {
        for (let i = stack.length - 1; i >= 0; i--) {
          if (stack[i].tagName === token.value) {
            stack.length = i
            if (i === 0) {
              me.curParent = ast
            } else {
              me.curParent = stack[stack.length - 1]
            }
            break
          }
        }
      },
      onDoctype (token) {
      },
      onText (token) {
        const v = token.value.trim()
        if (v) {
          me.curParent.text.push(v)
          me.curParent.children.push({
            tagName: 'text',
            text: v
          })
        }
      },
      onChars (text) {

      }
    })
    return ast.children
  }
}
module.exports = HtmlParserUtil