let util = require('../util/util')


/**
 * 百度搜索提示列表
 * @param {*} wd 
 * @returns 
 */
async function getBaiduTip(wd){
  const url = `http://www.baidu.com/sugrec?prod=pc&ie=utf-8&wd=${encodeURIComponent(wd)}`
  let ret = await util.request('get', url, {encoding:'utf8'})
  if(ret){
    ret = JSON.parse(ret)
  }
  return ret?.g
}

module.exports={
  getBaiduTip,
}