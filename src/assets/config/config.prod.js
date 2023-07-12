const WebConfig = {
  isServed: true,
  systemName:"cicode",
  // ssr禁止请求的数据接口
  ssrBlacklist: [
    "GET_/assets/data/i18n/zh-CN.json",
    "GET_/api/user/currentUser",
    "GET_/api/menu/",
    "GET_/api/speak/random/"
  ],
  // 前端缓存
  browserCacheList: [
    "GET_/api/tag/",
    "GET_/api/tag/column/",
    // "GET_/api/bookmark/[0-9]+",
    "GET_/api/bookmark/categoryById/",
    "GET_/api/bookmark/categoryByPid/\?.*?",
    "GET_/api/bookmark/bookmarkCategory/",
    "GET_/assets/data/search.json"
  ],
  meta:{
    "description":"cicode是一个技术内容分享与在线工具平台，网址导航、个人书签、博客分享、在线工具、可视化代码编辑",
    "keywords":"前端技术博客,网址导航,个人书签,在线工具,可视化代码编辑,angular,数据处理"
  },
  // 页面切换时，清除
  clearMeta:["description", "keywords","title"],
  lang: "zh-CN",
  isBrowser: false,
}
if (!window) {
  module.exports = WebConfig;
}