
let https = require('https')
let fs = require('fs')
let Parser = require('../util/htmlparser')
const { join } = require('path')

function getHtml(url) {
  return fetch(url, 'utf-8').then(v => {
    let parser = new Parser()
    return parser.htmlParser(v)
  })
}
function getFavicon(htmlObj) {
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
              // let ii = tem.value.lastIndexOf('.')
              // let fileName = link.replace(/[^0-9a-zA-Z]/g, '') + tem.value.slice(ii)
              // return {
              //   url: tem.value.startsWith('//') ? 'http:' + tem.value : tem.value.startsWith('http') ? tem.value : link + tem.value,
              //   fileName: fileName
              // }
            }
          }
        }
      }
    }
    return null
  } else {
    return null
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
    let faviconUrl = getFavicon(htmlObj)
    console.log(JSON.stringify(htmlObj))
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