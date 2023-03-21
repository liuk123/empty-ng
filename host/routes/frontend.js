
const fs = require('fs')
let util = require('../util/util')
const { join } = require('path');
const { Restult } = require('../util/model');
const srv = require('../server/fetchHtml');


module.exports = function (app) {

  const sitemapUrl = join(process.cwd(), 'dist/ins-demo/browser/sitemap.xml');

  // 临时
  app.get('/ngsw-worker.js', (req, res) => {
    res.end('1')
  })

  // 创建sitemap
  app.post('/create-sitemap', async (req, res) => {
    const articlePage = await util.request('GET', req.body.url, {encoding:'utf8'})

    if (!articlePage) { return res.status(500).end('获取请求失败') }

    let alist = JSON.parse(articlePage)
    let ret = '<?xml version="1.0" encoding="utf-8"?><urlset>'
    ret += `<url>
          <loc>http://www.cicode.cn/blog/home</loc>
          <changefreq>daily</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/nav/home/bookmark</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/tool/home/color</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/tool/home/base64</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/tool/home/data-process</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/tool/home/html-marked</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/tool/home/excel</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/dynamic/edit</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/blog/edit</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/tool/home/dev-transform</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>`
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
    fs.writeFile(sitemapUrl, ret, function (err) {
      if (err) { return res.status(500).end('写入失败') } else {
        res.send('success')
      }
    })
  })
  // 读取sitemap
  app.get('/sitemap.xml', (req, res) => {
    fs.readFile(sitemapUrl, "utf8", function (err, data) {
      if (err) {
        return res.status(500).end()
      }
      res.header('Content-Type', 'application/xml')
      res.send(data)
    })
  })
  /**
   * 百度搜索提示列表
   */
  app.get('/api/nodeapi/baidu/tips', async (req, res) => {
    let ret = await srv.getBaiduTip(req.query.wd)
    res.send(new Restult(1, null, ret))
  })

  app.post('/api/nodeapi/getFavicon', async function(req,res){
    let distFolder = join(process.cwd(),'assets/favicon/')
    if(req.body.url){
      let ret = await srv.downloadFavicon(req.body.url, distFolder)
      res.send(ret)
    }else if(req.body.urls){
      let urls = req.body.urls
      let len = urls.length
      let links = new Array(len)
      for(let i=0; i<len; i++){
        let ret = await srv.downloadFavicon(urls[i], distFolder)
        links[i] = ret
      }
      res.send(links)
    }
  })
}