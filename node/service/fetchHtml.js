
let https = require('https')
let fs = require('fs')

function saveImage(url, path){
  return new Promise((resolve, reject)=>{
    https.get(url, (req,res)=>{
      let imgData = ''
      req.on('data',(chunk)=>{
        imgData+=chunk
      })
      req.setEncoding('binary')
      req.on('end',()=>{
        fs.writeFile(path, imgData, 'binary', (err)=>{
          if(err){
            console.log(err)
            reject(err)
          }else{
            resolve(path)
          }
        })
      })
    })
  })
}

module.exports={
  saveImage
}