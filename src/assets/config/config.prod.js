const WebConfig = {
  isServed: true,
  systemName:"cicode",
  // ssr禁止请求的数据接口
  ssrBlacklist: [
    "GET_/api/user/currentUser",
    "GET_/api/menu/"
  ],
  // 前端缓存
  browserCacheList: [
    "GET_/api/tag/",
    "GET_/api/bookmark/[0-9]+",
    "GET_/api/bookmark/bookmarkCategory/",
    "GET_/assets/data/search.json"
  ],
  meta:{
    "description":"cicode.cn是面向中文开发者的技术内容分享与交流平台，通过博客、网址导航、自定义导航书签，动态生成网页工具。打造一个方便实用、沉淀分享的前端技术社区",
    "keywords":"angular,vue,前端技术博客,网址导航,自定义导航"
  },
  // 页面切换时，清除
  clearMeta:["description", "keywords","title"],
  lang: "zh-CN",
  isBrowser: false,
}
if (!window) {
  module.exports = WebConfig;
}