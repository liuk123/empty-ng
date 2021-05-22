export const environment = {
  //是否是生产环境
  production: false,
  //项目名称
  systemName:"快乐就完了测试",
  //
  baseUrl:"",
  //服务端渲染时 代理地址
  proxyHost: "http://localhost:8090",
  //服务端渲染时 请求时间
  timeOut: 1000000,
  //是否使用哈希路由  服务渲染不使用
  useHash: true,
  //http响应提示 0不作统一消息提醒，1无论成功失败都消息提醒，2仅成功时消息提醒，3仅失败时消息提醒
  httpMsg: 1,
  //zorro语言 zh-CN简体 zh-TW繁体 en-US英文
  lang: 'zh-CN'
};
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
