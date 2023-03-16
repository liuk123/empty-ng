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
  let ret = await util.request('get', url, {encoding:'utf8'})
  if(ret){
    ret = JSON.parse(ret)
  }
  return ret?.g
}
/**
 * 百度热门
 * @returns 
 */
// async function getBaiduHot(){
//   const url = `http://top.baidu.com/board?tab=realtime`
//   let htmlstr = await util.request('get', url, {encoding:'utf8'})
//   let htmlObj = null
//   let ret = []
//   if (htmlstr) {
//     let i = htmlstr.indexOf('<body>')
//     let lasti = htmlstr.lastIndexOf('</body>')
//     if (i > 0) {
//       htmlstr = htmlstr.slice(i, lasti + 7)
//     }
//     htmlObj = parser.htmlParser(htmlstr)
//     util.findItem(htmlObj, v => {
//       if (v.attributes.some(val => val.value == 'content_1YWBm')) {
//         let data = {}
//         v.children.forEach(item => {
//           if (item.tagName == 'a') {
//             data.link = item.attributes.find(val => val.name == 'href')?.value
//           } else if (item.attributes.some(subv => subv.value == 'c-single-text-ellipsis')) {
//             data.title = item?.text.toString()
//           } else if (item.attributes.some(subv => subv.value.indexOf('hot-desc_1m_jR')>=0)) {
//             data.descItem = item?.text.toString()
//           }
//           data.categoryId=1
//         })
//         ret.push(data)
//       }
//     })
//     return ret
//   }
// }
// /**
//  * 知乎热门
//  * @returns 
//  */
//  async function getZhihuHot(cookieStr){
//   const url = `http://www.zhihu.com/hot`
//   let htmlstr = await util.request('get', url, {encoding:'utf8',headers:{
//     'Cookie': cookieStr
//   }})
//   let htmlObj = null
//   let ret = []
//   if (htmlstr) {
//     let i = htmlstr.indexOf('<body>')
//     let lasti = htmlstr.lastIndexOf('</body>')
//     if (i > 0) {
//       htmlstr = htmlstr.slice(i, lasti + 7)
//     }
//     htmlObj = parser.htmlParser(htmlstr)
//     util.findItem(htmlObj, v => {
//       if (v.attributes.some(val => val.value == 'HotItem-content')) {
//         // ===== 待完善cookie
//         // https://blog.csdn.net/u011413061/article/details/50535740?spm=1001.2101.3001.6650.14&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-14-50535740-blog-125410103.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-14-50535740-blog-125410103.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=18
//         let data = {}
//         for(let i=0;i<v.children.length;i++){
//             let item = v.children[i]
//             data.categoryId=2
//             if (item.tagName == 'a') {
//               data.link = item.attributes.find(val => val.name == 'href')?.value

//               item.children.forEach(cell=>{
//                 if(cell.tagName == 'h2'){
//                   data.title = cell?.text.toString()
//                 }else if(cell.tagName == 'p'){
//                   data.descItem = cell?.text.toString()
//                   if(data.descItem.length>200){
//                     data.descItem = data.descItem.slice(0, 200) + '...'
//                   }
//                 }
//               })
//               break
//             } 
            
//         }
//         ret.push(data)
//       }
//     })
//     return ret
//   }
// }

module.exports={
  getBaiduHot,
  getBaiduTip,
  getZhihuHot
}