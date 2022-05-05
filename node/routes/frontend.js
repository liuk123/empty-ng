
let express = require('express')
let {join} = require('path')
let router = express.Router()
let fetchHtml = require('../service/fetchHtml')

router.post('/getFavicon', function(req,res){
  console.log(req.body.html)
  let distFolder = join(process.cwd(),'node/assets/image/')
  fetchHtml.downloadFavicon('https://segmentfault.com/a/1190000041083489?utm_source=sf-similar-article', distFolder).then(v=>{
    res.send(v)
  })
})

module.exports = router