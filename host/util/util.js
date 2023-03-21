const Request = require('request');
const fs = require('fs')

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
function download(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'binary', (err) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(path)
      }
    })
  })
}


module.exports = {
  request,
  download
}