let util = require('../util/util')

async function getSummary(data) {
  let option = {
    json: true,
    headers: {
      host: 'https://blog.zhheo.com/',
      Referer: 'https://blog.zhheo.com/',
      Origin: 'https://blog.zhheo.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      'Content-Type': 'application/json',
    }
  }
  let link = 'https://summary.tianli0.top/?content=' + encodeURI(data.content) + '&key=5Q5RpqtK5Dkwn1X9Gi5e'
  return await util.request('get', link, option)
}

module.exports = {
  getSummary
}