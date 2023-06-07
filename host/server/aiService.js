let util = require('../util/util')
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
async function getBaiduToken() {
  if(!baiduToken || (new Date().getTime()-baiduToken.create_time>baiduToken.expires_in)){
    let link = 'https://aip.baidubce.com/oauth/2.0/token?client_id=hxlK3qprM5wXf9hDnW6gCgz8&client_secret=011vxI5Cks5yUyylXHkaVqw8ZmHKcDxX&grant_type=client_credentials'
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
/**
 * 新闻概要
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
async function getBaiduSummary(data, token) {
  let link='https://aip.baidubce.com/rpc/2.0/nlp/v1/news_summary?charset=UTF-8&access_token='+ token
  let option={
    json: true,
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return await util.request('POST', link, option)
}
/**
 * 评论提取
 * @param {*} data 
 * @param {*} token 
 * @returns 
 */
async function getBaiduCommentTag(data, token) {
  let link='https://aip.baidubce.com/rpc/2.0/nlp/v2/comment_tag?charset=UTF-8&access_token='+ token
  let option={
    json: true,
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return await util.request('POST', link, option)
}

module.exports = {
  getSummary,
  getBaiduToken,
  getBaiduSummary,
  getBaiduCommentTag
}