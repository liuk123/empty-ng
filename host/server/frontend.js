
const fs =  require('fs')
let util = require('../util/util')
const {join} = require('path')


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

}