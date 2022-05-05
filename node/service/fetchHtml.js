
const https = require('https')
const request = require('request');
const fs = require('fs')
const Parser = require('../util/htmlparser')
const parser = new Parser()
const { join } = require('path')

async function getHtml(url) {
  let html = await requestSrv('get', url, 'utf-8')
  if (html) {
    return parser.htmlParser(html)
  } else {
    return null
  }
}
function getFaviconUrl(htmlObj) {
  if (htmlObj[0] && htmlObj[0].tagName == 'html' && htmlObj[0].children && htmlObj[0].children.length > 0 && htmlObj[0].children[0]) {
    let headChildren = htmlObj[0].children[0].children
    for (let i = 0, len = headChildren.length; i < len; i++) {
      if (headChildren[i].tagName == 'link') {
        for (let j = 0, lenj = headChildren[i].attributes.length; j < lenj; j++) {
          let attrObj = headChildren[i].attributes[j]
          if (attrObj.name == 'rel') {
            let attrArr = attrObj.value.split(' ')
            if (attrArr.some(v => v.toLowerCase() == 'icon')) {
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
function requestSrv(type, url, encoding = null) {
  return new Promise((resolve, reject) => {
    const options = {
      method: type,
      encoding: encoding,
      url: url,
    };
    request(options, (err, res, body) => {
      if (err) {
        reject(null)
      }
      resolve(body)
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
    if (htmlObj) {
      let faviconUrl = getFaviconUrl(htmlObj) || '/favicon.ico'
      console.log(faviconUrl + '----' + link)
      let ii = faviconUrl.lastIndexOf('.')
      if (ii != -1) {
        let fileName = link.replace(/[^0-9a-zA-Z]/g, '') + faviconUrl.slice(ii)
        if (!fileName.includes('/')) {
          let url = faviconUrl.startsWith('//') ? 'http:' + faviconUrl : faviconUrl.startsWith('http') ? faviconUrl : link + faviconUrl
          let img = await requestSrv('get', url, 'binary')
          if(img){
            let ret = download(join(path, fileName), img)
            return ret
          }
        }
      }
    }
  }
}
module.exports = {
  downloadFavicon
}