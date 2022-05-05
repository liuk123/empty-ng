let express = require('express')
let {join} = require('path')
let router = express.Router()
let fetchHtml = require('../service/fetchHtml')

router.post('/getFavicon',  async function(req,res){
  console.log(req.body.html)
  let distFolder = join(process.cwd(),'node/assets/image/')
  if(req.body.url){
    let ret = await fetchHtml.downloadFavicon(req.body.url, distFolder)
    res.send(ret)
  }else if(req.body.urls){
    let urls = req.body.urls
    let len = urls.length
    let links = new Array(len)
    for(let i=0; i<len; i++){
      let ret = await fetchHtml.downloadFavicon(urls[i], distFolder)
      links[i] = ret
    }
    res.send(links)
  }
})

module.exports = router