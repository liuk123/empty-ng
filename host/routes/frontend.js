
const fs =  require('fs')
let util = require('../util/util')
const {join} = require('path');
const { Restult } = require('../util/model');
const HtmlParserUtil = require('../util/htmlparser');
const parser = new HtmlParserUtil()

module.exports = function (app) {
  
  const sitemapUrl = join(process.cwd(), 'dist/ins-demo/browser/sitemap.xml');

  // 临时
  app.get('/ngsw-worker.js',(req,res)=>{
    res.end('1')
  })

  // 创建sitemap
  app.post('/create-sitemap', async (req, res)=>{
    const articlePage = await util.request('GET', req.body.url, 'utf8')

    if(!articlePage){return res.status(500).end('获取请求失败')}

    let alist = JSON.parse(articlePage)
    let ret = '<?xml version="1.0" encoding="utf-8"?><urlset>'
    ret+=`<url>
          <loc>http://www.cicode.cn/blog/home</loc>
          <changefreq>daily</changefreq>
          <priority>1</priority>
        </url>
        <url>
          <loc>http://www.cicode.cn/nav/home/bookmark</loc>
          <changefreq>weekly</changefreq>
          <priority>1</priority>
        </url>`
    for(let i=0; i< alist.list.length; i++){
      const time= new Date(alist.list[i].updateTime)
      ret+=`<url>
              <loc>http://www.cicode.cn/blog/detail/${alist.list[i].id}</loc>
              <lastmod>${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.5</priority>
            </url>`
    }
    ret+='</urlset>'
    fs.writeFile(sitemapUrl, ret, function(err){
      if(err){return res.status(500).end('写入失败')}else{
        res.send('success')
      }
    })
  })
  // 读取sitemap
  app.get('/sitemap.xml', (req, res)=>{
    fs.readFile(sitemapUrl, "utf8", function(err, data){
      if(err){
        return res.status(500).end()
      }
      res.header('Content-Type', 'application/xml')
      res.send(data)
    })
  })
  /**
   * 百度搜索提示列表
   */
  app.get('/api/nodeapi/baidu/tips', async (req,res)=>{
    const wd = req.query.wd
    const url = `http://www.baidu.com/sugrec?prod=pc&wd=${wd??encodeURIComponent(wd)}`
    let ret = await util.request('get', url, 'utf8')
    if(ret){
      ret = JSON.parse(ret)
      res.send(new Restult(1,null, ret.g))
    }else{
      res.send(new Restult(0,null, null))
    }
  })

   /**
   * 百度热搜(未完成)
   */
    app.get('/api/nodeapi/baidu/hot', async (req,res)=>{
      const url = `http://top.baidu.com/board?tab=realtime`
      let htmlstr = await util.request('get', url, 'utf8')
      let htmlObj = null
      let ret = []
      if(htmlstr){
        let i = htmlstr.indexOf('<body>')
        let lasti = htmlstr.lastIndexOf('</body>')
        if(i>0){
          htmlstr=htmlstr.slice(i,lasti+7)
        }
        htmlObj = parser.htmlParser(htmlstr)
        util.findItem(htmlObj, v=>{
          if(v.attributes.some(val=>val.value=='content_1YWBm')){
            let data={}
            v.children.forEach(item=>{
              if(item.tagName == 'a'){
                data.href = item.attributes.find(val=>val.name == 'href')
              }
              // if(item.)
            })
          }
        })
      }
      
      res.send(new Restult(1,null, htmlObj))
    })
  
}