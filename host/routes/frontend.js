
const fs = require('fs')
const { join } = require('path');
const { Restult } = require('../util/model');
const srv = require('../server/fetchService');
const aisrv = require('../server/aiService');
const Request = require('request');

module.exports = function (app) {
  const sitemapUrl = join(process.cwd(), 'dist/ins-demo/browser/sitemap.xml');
  // 临时
  app.get('/ngsw-worker.js', (req, res) => {
    res.end('1')
  })

  // 创建sitemap
  app.post('/create-sitemap', async (req, res) => {
    srv.createSitemap().catch(e=>{
      res.status(500).end('写入失败')
    }).then(v=>{
      res.send('success')
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
  /**
   * favicon获取地址（对外开放）
   */
  app.post('/api/nodeapi/getFavicon', async function(req,res){
    if(req.body.url){
      let ret = await srv.getFaviconPath(req.body.url)
      if(!ret){
        res.status(500).end('下载失败')
      }else{
        res.writeHead(200, {
          'Content-Type': 'application/force-download',
          'Content-Disposition': 'attachment; filename=' + ret.fileName
        });
        Request({
          method: 'get',
          url: ret.path,
          encoding: 'binary'
        }).pipe(res)
      }
      
    }
  })
  
  /**
   * favicon下载(内部使用)
   */
  app.post('/api/nodeapi/downloadFavicon', async function(req,res){
    let distFolder = join(process.cwd(),'assets/favicon/')
    let ret = await srv.downloadFavicon(req.body.url, distFolder)
    let r
    if(ret==null){
      r={
        resultMsg: '下载失败啦',
        resultCode: 0,
        data: null
      }
    }else{
      r={
        resultMsg: 'favicon下载成功',
        resultCode: 1,
        data: ret
      }
    }
    res.send(r)
  })
  /**
   * favicon下载 多(内部使用)
   */
  app.post('/api/nodeapi/downloadFavicons', async function(req,res){
    let distFolder = join(process.cwd(),'assets/favicon/')
    let urls = req.body.urls
    let len = urls.length
    let links = new Array(len)
    for(let i=0; i<len; i++){
      let ret = await srv.downloadFavicon(urls[i], distFolder)
      links[i] = ret
    }
    res.send(links)
  })
  /**
   * 获取rss,并保存
   */
  app.post('/api/nodeapi/rss', async function(req,res){
    let ret
    if(Array.isArray(req.body)){
      ret = await srv.fetchRss(req.body)
    }else{
      ret = await srv.fetchRss()
    }
    res.send(ret)
    
  })

  /**
   * ai接口
   */
  app.post('/api/nodeapi/ai-summary', async function(req,res){
    let ret = await aisrv.getSummary(req.body)
    if(ret){
      res.send(new Restult(1, null, ret.content))
    }else{
      res.send(new Restult(0, null, null))
    }
  })
}