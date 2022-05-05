
let https = require('https')
let fs = require('fs')
let Parser = require('../util/htmlparser')
let parser = new Parser()
const { join } = require('path')

async function getHtml(url) {
  let html = await fetch(url, 'utf-8')
  return parser.htmlParser(html)
}
function getFaviconUrl(htmlObj) {
  if (htmlObj[0] && htmlObj[0].tagName == 'html' && htmlObj[0].children && htmlObj[0].children.length > 0 && htmlObj[0].children[0]) {
    let headChildren = htmlObj[0].children[0].children
    for (let i = 0, len = headChildren.length; i < len; i++) {
      if (headChildren[i].tagName == 'link') {
        for (let j = 0, lenj = headChildren[i].attributes.length; j < lenj; j++) {
          let attrObj = headChildren[i].attributes[j]
          if (attrObj.name == 'rel' && attrObj.value.split(' ').includes('icon')) {
            let tem = headChildren[i].attributes.find(v => v.name == 'href')
            if (tem) {
              return tem.value
            }
          }
        }
      }
    }
  } 
}
function fetch(url, encoding = "binary") {
  return new Promise((resolve, reject) => {
    https.get(url, (req, res) => {
      let data = ''
      req.on('data', (chunk) => {
        data += chunk
      })
      req.setEncoding(encoding)
      req.on('end', () => {
        resolve(data)
      })
    })
  })
}
function download(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'binary', (err) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(path)
      }
    })
  })
}
async function downloadFavicon(url, path) {
  let tem = url.match(/^https?:\/\/[0-9a-zA-Z](?:[-.w]*[0-9a-zA-Z])*(?::[0-9]*)*/)
  if (tem !== null) {
    let link = tem[0]
    let htmlObj = await getHtml(link)
    let faviconUrl = getFaviconUrl(htmlObj)
    if(faviconUrl){
      let ii = faviconUrl.lastIndexOf('.')
      let fileName = link.replace(/[^0-9a-zA-Z]/g, '') + faviconUrl.slice(ii)
      let url = faviconUrl.startsWith('//') ? 'http:' + faviconUrl : faviconUrl.startsWith('http') ? faviconUrl : link + faviconUrl
      let img = await fetch(url)
      let ret = download(join(path, fileName), img)
      return ret
    }
  }
}
module.exports = {
  downloadFavicon
}