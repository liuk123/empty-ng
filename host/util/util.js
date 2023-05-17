const Request = require('request');
const fs = require('fs')

let time = null

function request(type, url,opt={encoding:null,body:null}) {
  return new Promise((resolve, reject) => {
    const options = {
      method: type,
      url: url,
      ...opt
    };
    Request(options, (err, res, body) => {
      if (err) {
        reject(null)
      }
      resolve(body)
    })
  }).catch((err)=>{console.log(err)})
}

function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, {encoding: 'binary'}, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(path)
      }
    })
  })
}
function readFile(path, code='utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, code, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
function interval(fn,{h=12,m=30,s=0}={h:17,m:25,s:50}){
  let curTime = new Date()
  let targetTime = new Date()
  targetTime.setHours(h)
  targetTime.setMinutes(m)
  targetTime.setSeconds(s)
  time = targetTime - curTime
  timer = setTimeout(()=>{
    if(time !== null){
      clearTimeout(timer)
      timer = null
    }
    fn()
    interval(fn,{h,m,s})
  }, time>0?time:1000*60*60*24-time)
}

module.exports = {
  request,
  writeFile,
  readFile,
  interval
}