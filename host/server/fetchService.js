let util = require('../util/util')
const { join } = require('path')
// const HtmlParserUtil = require('../util/htmlparser');
// const parser = new HtmlParserUtil()

const sitemapUrl = join(process.cwd(), 'dist/ins-demo/browser/sitemap.xml');


/**
 * 百度搜索提示列表
 * @param {*} wd 
 * @returns 
 */
async function getBaiduTip(wd) {
  const url = `http://www.baidu.com/sugrec?prod=pc&ie=utf-8&wd=${encodeURIComponent(wd)}`
  let ret = await util.request('get', url, { encoding: 'utf8',json: true })
  return ret?.g
}

async function getFaviconPath(url) {
  let tem = url.match(/^https?:\/\/[0-9a-zA-Z](?:[-.w]*[0-9a-zA-Z])*(?::[0-9]*)*/)
  if (tem == null) { return null }
  let link = tem[0]
  let html = await util.request('get', link, { encoding: 'utf8' })
  if (html == null) {
    return null
  }
  html = html.slice(0, html.indexOf('</head>'))
  let fragmentStart = 0
  let fragmentEnd = 0
  let faviconUrl = null
  let reg = /href\s*=\s*(?:"([^"]*)")|(?:'([^']*)')/i
  do {
    fragmentStart = html.indexOf('<link', fragmentEnd)
    fragmentEnd = html.indexOf('>', fragmentStart)
    let tem = html.slice(fragmentStart, fragmentEnd + 1)
    if ((tem.includes('icon') || tem.includes('ICON')) && (tem.includes('rel') || tem.includes('REL'))) {
      let t = tem.match(reg)
      faviconUrl = t[1]
    }

  } while (fragmentStart >= 0 && fragmentEnd > 0 && faviconUrl == null)
  if (faviconUrl == null) {
    return null
  }
  let ii2 = faviconUrl.indexOf('?')
  if (ii2 != -1) {
    faviconUrl = faviconUrl.slice(0, ii2)
  }
  let ii = faviconUrl.indexOf('.',faviconUrl.lastIndexOf('/'))
  if (ii != -1) {
    let fileName = link.replace(/[^0-9a-zA-Z]/g, '') + faviconUrl.slice(ii)
    let iconPath = faviconUrl.startsWith('//') ? 'http:' + faviconUrl :
      faviconUrl.startsWith('http') ? faviconUrl :
        faviconUrl.startsWith('/') ? link + faviconUrl : link + '/' + faviconUrl
    return {
      path: iconPath,
      fileName: fileName
    }
  }else if(faviconUrl.startsWith('http')){
    return {
      path: faviconUrl,
      fileName: link.replace(/[^0-9a-zA-Z]/g, '')+'.webp'
    }
  }

}
async function downloadFavicon(url, path) {
  let icon = await this.getFaviconPath(url)

  if (icon) {
    let img = await util.request('get', icon.path, { encoding: 'binary' })
    if (img) {
      let ret = await util.writeFile(join(path, icon.fileName), img)
      return icon.fileName
    }
  }
}


async function fetchRss(resData) {
  let t
  if(Array.isArray(resData)){
    t=resData
  }else{
    const rsslist = await util.request('GET', 'http://127.0.0.1/api/rss/all/', { encoding: 'utf8', json: true }).catch(e => console.log(e))
    t = rsslist?.data
  }

  const data = await getRss(t).catch(e => console.log('err', e))
  const opt = {
    body: data,
    json: true,
    headers: {
      "content-type": "application/json",
    }
  }
  const ret = await util.request('POST', 'http://127.0.0.1/api/news/', opt)
  return ret
}
async function getRss(data) {
  let arr = data.map(val => util.request('get', val.link, { encoding: 'utf8' }))
  let values = await Promise.all(arr)
  let ret = []
  let reg = /href*\s*=\s*(?:"([^"]*)")|(?:'([^']*)')/

  values.forEach((v, index) => {
    if (v) {
      let items = getFrag(['<entry', '<item'], ['</entry>', '</item>'], v)
      for (let i = 0, len = Math.min(items.length, 50); i < len; i++) {

        let t = getFrag(['<title', '<link'], ['</title>', '</link>', '/>'], items[i])
        let title = t[0].match(/>(?:\s|\n)*(.*)(?:\s|\n)*</)
        let link = null
        if (t[1].endsWith('</link>')) {
          link = t[1].match(/>(?:\s|\n)*(.*)(?:\s|\n)*</)
        } else if (t[1].endsWith('/>')) {
          link = t[1].match(reg)
        }
        
        if (title && link && link[1].length < 255) {
          let titleStr, linkStr
          if (title[1].trim().startsWith('<![CDATA[')) {
            titleStr = title[1].trim().slice(9, -3)
          } else {
            titleStr = title[1].trim()
          }
          if (link[1].trim().startsWith('<![CDATA[')) {
            linkStr = link[1].trim().slice(9, -3)
          } else {
            linkStr = link[1].trim()
          }
          
          ret.push({
            title: titleStr,
            link: linkStr,
            rssId: data[index].id
          })
        }

      }
      // items.forEach(val=>{

      // })
      // ret[urls[index].name]= items.map(val=>{
      //   let t = parser.htmlParser(val)
      //   if(t&&t.length>0){
      //     return t[0].children
      //   }
      // })
    }
  })
  return ret
}
function getFrag(starts, ends, str) {
  let fragmentStart = 0
  let fragmentEnd = 0
  let ret = []

  do {
    let lastEndLength = 0
    for (let i = 0; i < starts.length; i++) {
      fragmentStart = str.indexOf(starts[i], fragmentEnd)
      if (fragmentStart >= 0) {
        break
      }
    }
    for (let i = 0; i < ends.length; i++) {
      fragmentEnd = str.indexOf(ends[i], fragmentStart)
      if (fragmentEnd >= 0) {
        lastEndLength = ends[i].length
        break
      }
    }
    if (fragmentStart >= 0) {
      let tem = str.slice(fragmentStart, fragmentEnd + lastEndLength)
      ret.push(tem)
    }
  } while (fragmentStart >= 0 && fragmentEnd > 0)
  return ret
}

async function createSitemap() {
  const menuUrl = join(process.cwd(), 'dist/ins-demo/browser/assets/data/menu.json');
  let t = await util.readFile(menuUrl).catch(e => console.log(e))

  let menuList = JSON.parse(t).data

  const alist = await util.request('GET', 'http://127.0.0.1/api/article/?pageIndex=1&pageSize=100&tags=', { encoding: 'utf8', json: true })

  let ret = '<?xml version="1.0" encoding="utf-8"?><urlset>'
  for (let i = 0; i < menuList.length; i++) {
    if (menuList[i].type == 'router') {
      ret += `<url>
            <loc>http://www.cicode.cn${menuList[i].route}</loc>
            <changefreq>weekly</changefreq>
            <priority>1</priority>
          </url>`
    }
  }
  for (let i = 0; i < alist.list.length; i++) {
    const time = new Date(alist.list[i].updateTime)
    ret += `<url>
            <loc>http://www.cicode.cn/blog/detail/${alist.list[i].id}</loc>
            <lastmod>${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
          </url>`
  }
  

  ret += '</urlset>'
  return util.writeFile(sitemapUrl, ret)
}


module.exports = {
  getBaiduTip,
  downloadFavicon,
  getFaviconPath,
  fetchRss,
  createSitemap
}