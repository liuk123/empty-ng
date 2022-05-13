export const environment = {
  production: false,
  systemName:"cicode",
  meta:{
    description:'推荐优秀网址,自定义个人书签,快速导入浏览器收藏的网址,javascript、java、数据库代码学习分享',
    keywords:'cicode,网址导航,自定义书签,个人书签,在线工具,angular,vue,typescript,spring boot,mysql数据库,html,es6,前端'
  },
  clearMeta:['description', 'keywords','title'],
  baseUrl:"/prod",
  iconUrl: '/prod/assets/icons',
  faviconUrl: '/prod/assets/favicon/',
  defaultFavicon: '/prod/assets/icons/assets/custom/nofavicon.svg',
  proxyHost: "http://39.103.199.186:8090",
  timeOut: 1000000,
  useHash: true,
  lang: 'zh-CN',  
};
