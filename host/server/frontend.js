

module.exports = function (app) {
   // 临时
   app.get('/ngsw-worker.js',(req,res)=>{
    res.send('1')
  })
}