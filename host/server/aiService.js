let util = require('../util/util')

const config = require('../config/config')
const bdConfig = require('../config/baidu-api')
let baiduToken=null


async function getSummary(data) {
  let option = {
    json: true,
    headers: {
      Referer: 'https://blog.zhheo.com/',
      Origin: 'https://blog.zhheo.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
      'Content-Type': 'application/json'
    }
  }
  let link = 'https://summary.tianli0.top/?content=' + encodeURI(data.content) + '&key=5Q5RpqtK5Dkwn1X9Gi5e'
  return await util.request('get', link, option)
}
async function getBaiduToken(appKey, secretKey) {
  if(!baiduToken || (new Date().getTime()-baiduToken.create_time>baiduToken.expires_in)){
    let link = `https://aip.baidubce.com/oauth/2.0/token?client_id=${appKey}&client_secret=${secretKey}&grant_type=client_credentials`
    let option = {
      json: true,
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    let tem = await util.request('post', link, option)
    if(tem){
      baiduToken = {
        access_token: tem.access_token,
        expires_in: tem.expires_in,
        create_time: new Date().getTime()
      }
    }
  }
  return baiduToken.access_token
  
}
function getCookie(name, cookie) {
  let arr = cookie?.replace(/\s/g, "")?.split(';');
  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr[i].split('=');
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}
async function setAmount(value, cookie) {
  return util.request('POST', config.link + '/amount/', {
    json:true,
    headers:{
      "content-type": "application/json",
      "X-XSRF-TOKEN": getCookie('XSRF-TOKEN', cookie),
      cookie:cookie
    },
    body:{value}
  })
}
/**
 * 新闻概要
 * @param {title,content,max_summary_len} data 
 * @param {*} token 
 * @returns 
 */
// async function getBaiduSummary(data, token) {
//   let link='https://aip.baidubce.com/rpc/2.0/nlp/v1/news_summary?charset=UTF-8&access_token='+ token
//   let option={
//     json: true,
//     body: data,
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
//   return await util.request('POST', link, option)
// }
/**
 * 百度api
 * @param {text,type} data 
 * @param {*} token 
 * @returns 
 */
async function getBaiduData(link, data, token,contentType) {
  let option={
    json: true,
    headers: {
      'Content-Type': contentType
    }
  }
  if(contentType==='application/x-www-form-urlencoded'){
    option.form = data
  }else if(contentType==='application/json'){
    option.data = data    
  }
  return util.request('POST', link + '?charset=UTF-8&access_token='+token, option)
}

module.exports = {
  getSummary,
  getBaiduToken,
  // getBaiduSummary,
  getBaiduData,
  setAmount
}