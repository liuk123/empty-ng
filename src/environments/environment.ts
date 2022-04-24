export const environment = {
  //是否是生产环境
  production: false,
  //项目名称
  systemName:"cicode测试",
  //页面meta通用
  meta:{
    description:'推荐优秀网址,自定义个人书签,快速导入浏览器收藏的网址,javascript、java、数据库代码学习分享',
    keywords:'cicode,网址导航,自定义书签,个人书签,在线工具,angular,vue,typescript,spring boot,mysql数据库,html,es6,前端'
  },
  //当离开页面时，清空以下meta标签
  clearMeta:['description', 'keywords','title'],
  //
  baseUrl:"/api",
  //服务端渲染时 代理地址
  // proxyHost: "http://localhost:8090",
  proxyHost: "http://39.103.199.186:8090",
  //服务端渲染时 请求时间
  timeOut: 1000000,
  //是否使用哈希路由  服务渲染不使用
  useHash: true,
  //zorro语言 zh-CN简体 zh-TW繁体 en-US英文
  lang: 'zh-CN',
  // 图标地址
  iconUrl: 'api/assets/icons'
};
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
