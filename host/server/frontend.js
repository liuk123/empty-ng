
const fs =  require('fs')
let util = require('../util/util')
const {join} = require('path')

const sitmapUrl = join(process.cwd(), 'dist/ins-demo/browser/sitmap.xml');

module.exports = function (app) {
  // 临时
  app.get('/ngsw-worker.js',(req,res)=>{
    res.send('1')
  })

  // 创建sitmap
  app.get('/create-sitmap', async (req, res)=>{
    console.log(req.body.url)
    const articlePage = await util.request('GET', req.body.url, 'utf8')
    let alist = JSON.parse(articlePage)
    let ret = '<?xml version="1.0" encoding="utf-8"?><urlset>'
    for(let i=0; i< alist.list.length; i++){
      const time= new Date(alist.list[i].updateTime)
      ret+=`<url>
              <loc>http://www.cicode.cn/blog/detail/${alist.list[i].id}</loc>
              <lastmod>${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.6</priority>
            </url>`
    }
    ret+='</urlset>'
    fs.writeFile(sitmapUrl, ret, function(err){
      if(err){}else{
        res.send('success')
      }
    })
  })
  // 读取sitmap
  app.get('/sitmap.xml', (req, res)=>{
    fs.readFile(sitmapUrl, "utf8", function(err, data){
      if(err){
        return res.status(500).end()
      }
      res.header('Content-Type', 'application/xml')
      res.send(data)
    })
  })

}