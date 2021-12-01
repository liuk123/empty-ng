export const environment = {
  //是否是生产环境
  production: true,
  //项目名称
  systemName:"Inspool测试",
  //
  baseUrl:"/api",
  //服务端渲染时 代理地址
  proxyHost: "http://localhost:8090",
  //服务端渲染时 请求时间
  timeOut: 1000000,
  //是否使用哈希路由  服务渲染不使用
  useHash: true,
  //zorro语言 zh-CN简体 zh-TW繁体 en-US英文
  lang: 'zh-CN',
  // 图标地址
  iconUrl: '/icons'
};
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
