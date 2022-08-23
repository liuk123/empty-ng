let util = require('../util/util')
const HtmlParserUtil = require('../util/htmlparser');
const parser = new HtmlParserUtil()

/**
 * 百度搜索提示列表
 * @param {*} wd 
 * @returns 
 */
async function getBaiduTip(wd){
  const url = `http://www.baidu.com/sugrec?prod=pc&ie=utf-8&wd=${encodeURIComponent(wd)}`
  let ret = await util.request('get', url, 'utf8')
  if(ret){
    ret = JSON.parse(ret)
  }
  return ret?.g
}
/**
 * 百度热门
 * @returns 
 */
async function getBaiduHot(){
  const url = `http://top.baidu.com/board?tab=realtime`
  let htmlstr = await util.request('get', url, 'utf8')
  let htmlObj = null
  let ret = []
  if (htmlstr) {
    let i = htmlstr.indexOf('<body>')
    let lasti = htmlstr.lastIndexOf('</body>')
    if (i > 0) {
      htmlstr = htmlstr.slice(i, lasti + 7)
    }
    htmlObj = parser.htmlParser(htmlstr)
    util.findItem(htmlObj, v => {
      if (v.attributes.some(val => val.value == 'content_1YWBm')) {
        let data = {}
        v.children.forEach(item => {
          if (item.tagName == 'a') {
            data.href = item.attributes.find(val => val.name == 'href')?.value
          } else if (item.attributes.some(subv => subv.value == 'c-single-text-ellipsis')) {
            data.title = item?.text.toString()
          } else if (item.attributes.some(subv => subv.value == 'hot-desc_1m_jR small_Uvkd3 ')) {
            data.desc = item?.text.toString()
          }
        })
        ret.push(data)
      }
    })
    return ret
  }
}

module.exports={
  getBaiduHot,
  getBaiduTip
}