const WebConfig = {
  isServed: true,
  systemName:"cicode",
  ssrBlacklist: [
    "/api/user/currentUser",
    "/api/menu/"
  ],
  // browserWhiteList: [
  //   "/api/menu/"
  // ],
  meta:{
    "description":"推荐优秀网址,自定义个人书签,快速导入浏览器收藏的网址,javascript、java、数据库代码学习分享",
    "keywords":"cicode,网址导航,自定义书签,个人书签,在线工具,angular,vue,typescript,spring boot,mysql数据库,html,es6,前端"
  },
  clearMeta:["description", "keywords","title"],
  proxyHost: "http://localhost:8090",
  lang: "zh-CN",
  faviconUrl: "http://www.cicode.cn/api/assets/favicon/",
  iconUrl: "/api/assets/icons",
  baseUrl:"/api"
}
if (!window) {
  module.exports = WebConfig;
}