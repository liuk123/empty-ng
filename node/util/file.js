const fs = require('fs')
const { join } = require('path')

const dir = join(__dirname, '../assets/image')
const wdir = join(__dirname, '../assets/data/ret.txt')
const data = []

fs.readdir(dir, (err, files) => {
  if(err){
    console.log(err)
  }
  files.forEach(file=>{
    data.push(file)
  })
  fs.writeFile(wdir, JSON.stringify(data), function(err){
    console.log(err)
  })
})