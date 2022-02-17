export const environment = {
  //是否是生产环境
  production: true,
  //项目名称
  systemName:"cicode测试",
  //页面meta通用
  meta:{
    description:'',
    keywords:''
  },
  //当离开页面时，清空以下meta标签
  clearMeta:['description', 'keywords','title'],
  //
  baseUrl:"/api",
  //服务端渲染时 代理地址
  proxyHost: "http://localhost:8090",
  //服务端渲染时 请求时间
  timeOut: 1000000,
  //是否使用哈希路由  服务渲染不使用
  useHash: false,
  //zorro语言 zh-CN简体 zh-TW繁体 en-US英文
  lang: 'zh-CN',
  // 图标地址
  iconUrl: 'api/assets/icons'
};
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
