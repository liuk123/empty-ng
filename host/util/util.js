const Request = require('request');
function request(type, url, encoding = null) {
  return new Promise((resolve, reject) => {
    const options = {
      method: type,
      encoding: encoding,
      url: url,
    };
    Request(options, (err, res, body) => {
      if (err) {
        reject(null)
      }
      resolve(body)
    })
  }).catch((err)=>{console.log(err)})
}

function findItem(data, fn, options={mapObject:['children']}) {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      let tem = findItem(data[i], fn, options)
      if (tem) {
        return tem
      }
    }
  } else if (data instanceof Object) {
    if (fn(data)) {
      return data
    }
    if(options.mapObject){
      for(let j=0; j<options.mapObject.length; j++){
        let tem = findItem(data[options.mapObject[j]], fn, options)
        if (tem) {
          return tem
        }
      }
    }else{
      const keys = Object.keys(data)
      for(let j=0; j<keys.length; j++){
        let tem = findItem(data[keys[j]], fn, options)
        if (tem) {
          return tem
        }
      }
    }
  }
}
module.exports = {
  request,
  findItem
}