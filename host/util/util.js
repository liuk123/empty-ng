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

module.exports = {
  request
}