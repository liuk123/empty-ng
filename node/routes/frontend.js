
let express = require('express')
let {join} = require('path')
let router = express.Router()
let fetchHtml = require('../service/fetchHtml')

router.post('/getFavicon', function(req,res){
  console.log(req.body.html)
  let distFolder = join(process.cwd(),'node/assets/image/')
  fetchHtml.saveImage('https://www.iqiyipic.com/pcwimg/128-128-logo.png', distFolder + 'bbb.png').then(v=>{
    res.send(v)
  })
})

module.exports = router