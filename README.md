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


http://www.cicode.cn/nav/list/1
http://www.cicode.cn/nav/list/2
http://www.cicode.cn/nav/list/3
http://www.cicode.cn/nav/list/4
http://www.cicode.cn/nav/list/5
http://www.cicode.cn/nav/list/6
http://www.cicode.cn/nav/list/7
http://www.cicode.cn/nav/list/8
http://www.cicode.cn/nav/list/9
http://www.cicode.cn/nav/list/10
http://www.cicode.cn/nav/list/11
http://www.cicode.cn/nav/list/12
http://www.cicode.cn/nav/list/15
http://www.cicode.cn/nav/list/332
http://www.cicode.cn/nav/list/333
http://www.cicode.cn/nav/list/334
http://www.cicode.cn/nav/list/335
http://www.cicode.cn/nav/list/336
http://www.cicode.cn/nav/list/337
http://www.cicode.cn/nav/list/338
http://www.cicode.cn/nav/list/342
http://www.cicode.cn/nav/list/344
http://www.cicode.cn/nav/list/345
http://www.cicode.cn/nav/list/346
http://www.cicode.cn/nav/list/347
http://www.cicode.cn/nav/list/348
http://www.cicode.cn/nav/list/349
http://www.cicode.cn/nav/list/350
http://www.cicode.cn/nav/list/351
http://www.cicode.cn/nav/list/352
http://www.cicode.cn/nav/list/353
http://www.cicode.cn/nav/list/354
http://www.cicode.cn/nav/list/355
http://www.cicode.cn/nav/list/356
http://www.cicode.cn/nav/list/357
http://www.cicode.cn/nav/list/358
http://www.cicode.cn/nav/list/359
http://www.cicode.cn/nav/list/360
http://www.cicode.cn/nav/list/361
http://www.cicode.cn/nav/list/362
http://www.cicode.cn/nav/list/363
http://www.cicode.cn/nav/list/364
http://www.cicode.cn/nav/list/365
http://www.cicode.cn/nav/list/366
http://www.cicode.cn/nav/list/367
http://www.cicode.cn/nav/list/368
http://www.cicode.cn/nav/list/369
http://www.cicode.cn/nav/list/370
http://www.cicode.cn/nav/list/371
http://www.cicode.cn/nav/list/372
http://www.cicode.cn/nav/list/373
http://www.cicode.cn/nav/list/374
http://www.cicode.cn/nav/list/375
http://www.cicode.cn/nav/list/376
http://www.cicode.cn/nav/list/377
http://www.cicode.cn/nav/list/378
http://www.cicode.cn/nav/list/379
http://www.cicode.cn/nav/list/380
http://www.cicode.cn/nav/list/381
http://www.cicode.cn/nav/list/382
http://www.cicode.cn/nav/list/383
http://www.cicode.cn/nav/list/384
http://www.cicode.cn/nav/list/385
http://www.cicode.cn/nav/list/386
http://www.cicode.cn/nav/list/387
http://www.cicode.cn/nav/list/416
http://www.cicode.cn/nav/list/543
http://www.cicode.cn/nav/list/544
http://www.cicode.cn/nav/list/545
http://www.cicode.cn/nav/list/546
http://www.cicode.cn/nav/list/547
http://www.cicode.cn/nav/list/548
http://www.cicode.cn/nav/list/549
http://www.cicode.cn/nav/list/550
http://www.cicode.cn/nav/list/551
http://www.cicode.cn/nav/list/552
http://www.cicode.cn/nav/list/660
http://www.cicode.cn/nav/list/666
