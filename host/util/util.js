const Request = require('request');

function request(type, url,opt={encoding:null,body:null}) {
  return new Promise((resolve, reject) => {
    const options = {
      method: type,
      url: url,
      ...opt
    };
    Request(options, (err, res, body) => {
      if (err) {
        reject(null)
      }
      resolve(body)
    })
  }).catch((err)=>{console.log(err)})
}

async function downloadFavicon(url, path) {
  let tem = url.match(/^https?:\/\/[0-9a-zA-Z](?:[-.w]*[0-9a-zA-Z])*(?::[0-9]*)*/)
  if (tem == null) {return null}
  let link = tem[0]
  let html = await requestSrv('get', link, 'utf-8')
  if(html==null){
    return null
  }
  html = html.slice(0, html.indexOf('</head>'))
  let fragmentStart = 0
  let fragmentEnd = 0
  let faviconUrl = null
  let reg = /[a-zA-Z_:@*.][-a-zA-Z0-9_:.]*\s*=\s*(?:"([^"]*)")|(?:'([^']*)')/g
  do{
    fragmentStart = html.indexOf('<link ', fragmentEnd)
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
      let url = faviconUrl.startsWith('//') ?'http:' + faviconUrl : 
        faviconUrl.startsWith('http') ? faviconUrl : 
        faviconUrl.startsWith('/')?link + faviconUrl : link+ '/' + faviconUrl
      let img = await requestSrv('get', url, 'binary')
      if(img){
        let ret = download(join(path, fileName), img)
        // return ret
        // ret.then(res=>console.log(res))
        return fileName
      }
    }
  }
  return null
}

module.exports = {
  request,
  downloadFavicon
}