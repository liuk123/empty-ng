let util = require('../util/util')
const {join} = require('path')


/**
 * 百度搜索提示列表
 * @param {*} wd 
 * @returns 
 */
async function getBaiduTip(wd){
  const url = `http://www.baidu.com/sugrec?prod=pc&ie=utf-8&wd=${encodeURIComponent(wd)}`
  let ret = await util.request('get', url, {encoding:'utf8'})
  if(ret){
    ret = JSON.parse(ret)
  }
  return ret?.g
}

async function getFaviconPath(url) {
  let tem = url.match(/^https?:\/\/[0-9a-zA-Z](?:[-.w]*[0-9a-zA-Z])*(?::[0-9]*)*/)
  if (tem == null) {return null}
  let link = tem[0]
  let html = await util.request('get', link, 'utf-8')
  if(html==null){
    return null
  }
  html = html.slice(0, html.indexOf('</head>'))
  let fragmentStart = 0
  let fragmentEnd = 0
  let faviconUrl = null
  let reg = /[a-zA-Z_:@*.][-a-zA-Z0-9_:.]*\s*=\s*(?:"([^"]*)")|(?:'([^']*)')/g
  do{
    fragmentStart = html.indexOf('<link', fragmentEnd)
    fragmentEnd = html.indexOf('>', fragmentStart)
    let tem = html.slice(fragmentStart, fragmentEnd+1)
    tem=tem.toLowerCase()
    if(tem.includes('icon')&&tem.includes('href')){
      let temArr = null
      let t = {}
      while((temArr=reg.exec(tem))!==null){
        if(temArr[0].startsWith('rel')){
          let ttt = temArr[1]??temArr[2]
          t.isIcon = ttt.split(' ').includes('icon')
        }else if(temArr[0].startsWith('href')){
          t.ret =temArr[1]??temArr[2]
        }
      }
      if(t.isIcon){
        faviconUrl = t.ret
      }
    }
    
  }while(fragmentStart>=0&&fragmentEnd>0&&faviconUrl==null)
  if(faviconUrl==null){
    return null
  }
  
  let ii2 = faviconUrl.indexOf('?')
  if(ii2!=-1){
    faviconUrl = faviconUrl.slice(0,ii2)
  }
  let ii = faviconUrl.lastIndexOf('.')
  if (ii != -1) {
    let fileName = link.replace(/[^0-9a-zA-Z]/g, '') + faviconUrl.slice(ii)
    if (!fileName.includes('/')) {
      let iconPath = faviconUrl.startsWith('//') ?'http:' + faviconUrl : 
        faviconUrl.startsWith('http') ? faviconUrl : 
        faviconUrl.startsWith('/')?link + faviconUrl : link+ '/' + faviconUrl
      return {
        path: iconPath,
        fileName: fileName
      }
    }
  }
  return null
}
async function downloadFavicon(url, path) {
  let icon = await this.getFaviconPath(url)
  if(icon){
    let img = await util.request('get', icon.path, {encoding: 'binary'})
    if(img){
      let ret = await util.download(join(path, icon.fileName), img)
      return icon.fileName
    }
  }
}



module.exports={
  getBaiduTip,
  downloadFavicon,
  getFaviconPath
}