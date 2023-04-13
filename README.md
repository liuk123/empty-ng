# InsDemo

## 命令行

### 启动

``` 
// 连接本地环境启动项目
npm run start 
// 连接阿里服务器
npm run start:staging
// 服务器渲染
npm run dev:ssr
```
### 打包

```
npm run build:ssr

```

## 环境配置

``` 
// 是否是生产环境
production: true
// 启用哈希路由
useHash: false
```

## 配置文件

```
{
  // 是否是远程服务器调取的文件
  isServed: true,
  // 系统名称
  systemName:"cicode",
  // 服务器渲染黑名单（ssr端不调用）
  ssrBlacklist: [
    "/api/user/currentUser"
  ],
  // 浏览器端渲染白名单（ssr调用之后，客户端再次强制调用）
  browserWhiteList: [
    ""
  ],
  // meta 信息
  meta:{
    "description":"推荐优秀网址,自定义个人书签,快速导入浏览器收藏的网址,javascript、java、数据库代码学习分享",
    "keywords":"cicode,网址导航,自定义书签,个人书签,在线工具,angular,vue,typescript,spring boot,mysql数据库,html,es6,前端"
  },
  // 切换页面时，清空限免的meta信息
  clearMeta:["description", "keywords","title"],
  // 代理端口
  proxyHost: "http://localhost:8090",
  // 导航大全页面 icon 地址文件夹
  faviconUrl: "http://www.cicode.cn/api/assets/favicon/",
  // 阿里图标地址
  iconUrl: "/api/assets/icons",
  // 
  baseUrl:"/api"
}
```

## meta

meta信息的获取设置

config公用 < 路由data < 数据库menu
路由meta==null，不setTitle，比如blog-detail

## routes.txt

seo专用

http://www.cicode.cn/blog/detail/11
http://www.cicode.cn/blog/detail/14
http://www.cicode.cn/blog/detail/234
http://www.cicode.cn/blog/detail/237
http://www.cicode.cn/blog/detail/238
http://www.cicode.cn/blog/detail/303
http://www.cicode.cn/blog/detail/304
http://www.cicode.cn/blog/detail/305
http://www.cicode.cn/blog/detail/404
http://www.cicode.cn/blog/detail/408
http://www.cicode.cn/blog/detail/409
http://www.cicode.cn/blog/detail/410
http://www.cicode.cn/blog/detail/411
http://www.cicode.cn/blog/detail/412
http://www.cicode.cn/blog/detail/413
http://www.cicode.cn/blog/detail/414
http://www.cicode.cn/blog/detail/415
http://www.cicode.cn/blog/detail/431
http://www.cicode.cn/blog/detail/432
http://www.cicode.cn/blog/detail/553
http://www.cicode.cn/blog/detail/557
http://www.cicode.cn/blog/detail/559
http://www.cicode.cn/blog/detail/561
http://www.cicode.cn/blog/detail/565
http://www.cicode.cn/blog/detail/566
http://www.cicode.cn/blog/detail/657
http://www.cicode.cn/blog/detail/658
http://www.cicode.cn/blog/detail/661
http://www.cicode.cn/blog/detail/662
http://www.cicode.cn/blog/detail/663
http://www.cicode.cn/blog/detail/664
