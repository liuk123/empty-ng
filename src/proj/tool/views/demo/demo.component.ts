import { Component, OnInit } from '@angular/core';
import { HtmlParserService } from 'src/app/core/services/htmlparser.service';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  constructor(
    private util: UtilService,
    private htmlPaser: HtmlParserService,
    private jsUtil: JsUtilService
  ) { }

  ngOnInit(): void {
  }

  copy(){
    this.util.copyToClipboard('123456')
  }
  uuid(){
    console.log(this.util.UUIDGenerator())
  }

  parser(){
    let htmlstr=`<!doctype html>
    <html lang="zh" data-hairline="true" data-theme="light">
    
    <head>
      <meta charSet="utf-8" />
      <title data-rh="true">首页 - 知乎</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="google-site-verification" content="FTeR0c8arOPKh8c5DYh_9uu98_zJbaWw53J-Sch9MTg" />
      <meta name="description" property="og:description"
        content="知乎，中文互联网高质量的问答社区和创作者聚集的原创内容平台，于 2011 年 1 月正式上线，以「让人们更好的分享知识、经验和见解，找到自己的解答」为品牌使命。知乎凭借认真、专业、友善的社区氛围、独特的产品机制以及结构化和易获得的优质内容，聚集了中文互联网科技、商业、影视、时尚、文化等领域最具创造力的人群，已成为综合性、全品类、在诸多领域具有关键影响力的知识分享社区和创作者聚集的原创内容平台，建立起了以社区驱动的内容变现商业模式。" />
      <link data-rh="true" rel="apple-touch-icon"
        href="https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.a53ae37b.png" />
      <link data-rh="true" rel="apple-touch-icon"
        href="https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.a53ae37b.png" sizes="152x152" />
      <link data-rh="true" rel="apple-touch-icon"
        href="https://static.zhihu.com/heifetz/assets/apple-touch-icon-120.bbce8f18.png" sizes="120x120" />
      <link data-rh="true" rel="apple-touch-icon"
        href="https://static.zhihu.com/heifetz/assets/apple-touch-icon-76.cbade8f9.png" sizes="76x76" />
      <link data-rh="true" rel="apple-touch-icon"
        href="https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.8f6c52aa.png" sizes="60x60" />
      <link crossorigin="" rel="shortcut icon" type="image/x-icon" href="https://static.zhihu.com/heifetz/favicon.ico" />
      <link crossorigin="" rel="search" type="application/opensearchdescription+xml"
        href="https://static.zhihu.com/heifetz/search.xml" title="知乎" />
      <link rel="dns-prefetch" href="//static.zhimg.com" />
      <link rel="dns-prefetch" href="//pica.zhimg.com" />
      <link rel="dns-prefetch" href="//pic1.zhimg.com" />
      <link rel="dns-prefetch" href="//pic2.zhimg.com" />
      <link rel="dns-prefetch" href="//pic3.zhimg.com" />
      <link rel="dns-prefetch" href="//pic4.zhimg.com" />
      <link rel="dns-prefetch" href="//static.zhihu.com" />
      <style data-emotion-css="1m4merm">
        .u-safeAreaInset-top {
          height: constant(safe-area-inset-top) !important;
          height: env(safe-area-inset-top) !important;
        }
    
        .u-safeAreaInset-bottom {
          height: constant(safe-area-inset-bottom) !important;
          height: env(safe-area-inset-bottom) !important;
        }
      </style>
      <link href="https://static.zhihu.com/heifetz/main.app.216a26f4.d0d9c412e7ecb1299613.css" crossorigin=""
        rel="stylesheet" />
      <link
        href="https://static.zhihu.com/heifetz/main.shared_3b14b6a6793bcf6a28a30e974ba641b4cb31d3af_CSS.216a26f4.8411cc270ec0ded50a26.css"
        crossorigin="" rel="stylesheet" />
      <link
        href="https://static.zhihu.com/heifetz/main.shared_f30f7459f944e851b885959dfde412e92f3a8d2e_CSS.216a26f4.8091442855ae75b0929b.css"
        crossorigin="" rel="stylesheet" />
      <link href="https://static.zhihu.com/heifetz/main.topstory-routes.216a26f4.4d47c0b76cd9e90e8759.css" crossorigin=""
        rel="stylesheet" />
      <script nonce="6f21722a-b384-480a-9814-58e8365c55ec">
        !function(){"use strict";!function(e,n){var r=[];function t(e){return function(){r.push([e,arguments])}}n.Raven={captureException:t("captureException"),captureMessage:t("captureMessage"),captureBreadcrumb:t("captureBreadcrumb")};var a,o,c,i,s,u="undefined"!=typeof DOMError;function d(e){var n=e instanceof Error||e instanceof ErrorEvent||u&&e instanceof DOMError||e instanceof DOMException;Raven.captureException(n?e:new Error(e.message||e.reason))}n.addEventListener("unhandledrejection",d),n.addEventListener("error",d,!0),a=e.src,o=e,c=function(){r.forEach(function(e){var n;(n=Raven)[e[0]].apply(n,e[1])}),n.removeEventListener("unhandledrejection",d),n.removeEventListener("error",d,!0)},i=document.head||document.getElementsByTagName("head")[0],(s=document.createElement("script")).crossOrigin=o.crossOrigin,s.dataset.sentryConfig=o["data-sentry-config"],s.onload=c,s.src=a,i.appendChild(s)}({"defer":true,"crossOrigin":"anonymous","src":"https://unpkg.zhimg.com/@cfe/sentry-script@1.3.1/dist/init.js","data-sentry-config":"{\"dsn\":\"https://2d8d764432cc4f6fb3bc78ab9528299d@crash2.zhihu.com/1224\",\"sampleRate\":0.1,\"release\":\"4615-5ae4dc4f\",\"ignoreErrorNames\":[\"NetworkError\",\"SecurityError\"],\"ignoreErrorsPreset\":\"ReactApp\",\"tags\":{\"app_name\":\"heifetz\"}}"},window)}();
      </script>
    </head>
    
    <body class="Topstory-body">
      <div id="root">
        <div>
          <div class="LoadingBar"></div>
          <div>
            <style data-emotion-css="1x8hcdw">
              .css-1x8hcdw {
                background-color: #FFFFFF;
                -webkit-transition-property: background-color, box-shadow;
                transition-property: background-color, box-shadow;
                -webkit-transition-duration: 0.25s;
                transition-duration: 0.25s;
                -webkit-transition-timing-function: ease-in;
                transition-timing-function: ease-in;
              }
            </style>
            <header role="banner" class="Sticky AppHeader css-1x8hcdw" data-za-module="TopNavBar">
              <style data-emotion-css="l2ygoj">
                .css-l2ygoj {
                  width: auto;
                  max-width: 1156px;
                  min-width: 1000px;
                  padding-left: 16px;
                  padding-right: 55px;
                }
    
                .css-l2ygoj .AppHeader-userInfo {
                  margin-left: 30px;
                  width: auto;
                }
    
                .css-l2ygoj .AppHeader-TabsLink.is-active,
                .css-l2ygoj .AppHeader-TabsLink:hover {
                  color: #121212;
                }
              </style>
              <div class="AppHeader-inner css-l2ygoj"><a href="//www.zhihu.com" aria-label="知乎">
                  <style data-emotion-css="1hlrcxk">
                    .css-1hlrcxk {
                      -webkit-transition-property: fill;
                      transition-property: fill;
                      -webkit-transition-duration: 0.25s;
                      transition-duration: 0.25s;
                      -webkit-transition-timing-function: ease-in;
                      transition-timing-function: ease-in;
                    }
                  </style><svg viewBox="0 0 64 30" fill="#056DE8" width="64" height="30" class="css-1hlrcxk">
                    <path
                      d="M29.05 4.582H16.733V25.94h3.018l.403 2.572 4.081-2.572h4.815V4.582zm-5.207 18.69l-2.396 1.509-.235-1.508h-1.724V7.233h6.78v16.04h-2.425zM14.46 14.191H9.982c0-.471.033-.954.039-1.458v-5.5h5.106V5.935a1.352 1.352 0 0 0-.404-.957 1.378 1.378 0 0 0-.968-.396H5.783c.028-.088.056-.177.084-.255.274-.82 1.153-3.326 1.153-3.326a4.262 4.262 0 0 0-2.413.698c-.57.4-.912.682-1.371 1.946-.532 1.453-.997 2.856-1.31 3.693C1.444 8.674.28 11.025.28 11.025a5.85 5.85 0 0 0 2.52-.61c1.119-.593 1.679-1.502 2.054-2.883l.09-.3h2.334v5.5c0 .5-.045.982-.073 1.46h-4.12c-.71 0-1.39.278-1.893.775a2.638 2.638 0 0 0-.783 1.874h6.527a17.717 17.717 0 0 1-.778 3.649 16.796 16.796 0 0 1-3.012 5.273A33.104 33.104 0 0 1 0 28.74s3.13 1.175 5.425-.954c1.388-1.292 2.631-3.814 3.23-5.727a28.09 28.09 0 0 0 1.12-5.229h5.967v-1.37a1.254 1.254 0 0 0-.373-.899 1.279 1.279 0 0 0-.909-.37z">
                    </path>
                    <path
                      d="M11.27 19.675l-2.312 1.491 5.038 7.458a6.905 6.905 0 0 0 .672-2.218 3.15 3.15 0 0 0-.28-2.168l-3.118-4.563zM51.449 15.195V5.842c4.181-.205 7.988-.405 9.438-.483l.851-.05c.387-.399.885-2.395.689-3.021-.073-.25-.213-.666-.638-.555a33.279 33.279 0 0 1-4.277.727c-2.766.321-3.97.404-7.804.682-6.718.487-12.709.72-12.709.72a2.518 2.518 0 0 0 .788 1.834 2.567 2.567 0 0 0 1.883.706c2.278-.095 5.598-.25 8.996-.41v9.203h-12.78c0 .703.281 1.377.783 1.874a2.69 2.69 0 0 0 1.892.777h10.105v7.075c0 .887-.464 1.192-1.231 1.214h-3.92a4.15 4.15 0 0 0 .837 1.544 4.2 4.2 0 0 0 1.403 1.067 6.215 6.215 0 0 0 2.71.277c1.36-.066 2.967-.826 2.967-3.57v-7.607h11.28c.342 0 .67-.135.91-.374.242-.239.378-.563.378-.902v-1.375H51.449z">
                    </path>
                    <path
                      d="M42.614 8.873a2.304 2.304 0 0 0-1.508-.926 2.334 2.334 0 0 0-1.727.405l-.376.272 4.255 5.85 2.24-1.62-2.884-3.98zM57.35 8.68l-3.125 4.097 2.24 1.663 4.517-5.927-.375-.277a2.32 2.32 0 0 0-1.722-.452 2.327 2.327 0 0 0-1.536.896z">
                    </path>
                  </svg>
                </a>
                <style data-emotion-css="g0ay3v">
                  .css-g0ay3v {
                    margin-left: 25px;
                    margin-right: 15px;
                  }
    
                  .css-g0ay3v .AppHeader-Tab {
                    padding-left: 15px;
                    padding-right: 15px;
                  }
    
                  .css-g0ay3v .Tabs-link.is-active::after {
                    height: 4px;
                  }
                </style>
                <ul role="tablist" class="Tabs AppHeader-Tabs css-g0ay3v">
                  <li role="tab" class="Tabs-item AppHeader-Tab Tabs-item--noMeta">
                    <style data-emotion-css="12n8klz">
                      .css-12n8klz {
                        color: undefined !important;
                        -webkit-transition-property: color;
                        transition-property: color;
                        -webkit-transition-duration: 0.25s;
                        transition-duration: 0.25s;
                        -webkit-transition-timing-function: ease-in;
                        transition-timing-function: ease-in;
                      }
    
                      .css-12n8klz.is-active,
                      .css-12n8klz:hover {
                        opacity: 1;
                      }
    
                      .css-12n8klz.is-active::after {
                        background-color: #056DE8 !important;
                      }
                    </style><a class="Tabs-link AppHeader-TabsLink is-active css-12n8klz" tabindex="0"
                      data-za-not-track-link="true" href="//www.zhihu.com/">首页</a>
                  </li>
                  <li role="tab" class="Tabs-item AppHeader-Tab Tabs-item--noMeta"><a
                      class="Tabs-link AppHeader-TabsLink css-12n8klz" tabindex="0"
                      data-za-not-track-link="true" href="//www.zhihu.com/education/learning">学习</a></li>
                  <li role="tab" class="Tabs-item AppHeader-Tab Tabs-item--noMeta"><a
                      class="Tabs-link AppHeader-TabsLink css-12n8klz" tabindex="0"
                      data-za-not-track-link="true" href="//www.zhihu.com/xen/vip-web">会员</a></li>
                  <li role="tab" class="Tabs-item AppHeader-Tab Tabs-item--noMeta"><a
                      class="Tabs-link AppHeader-TabsLink css-12n8klz" tabindex="0"
                      data-za-not-track-link="true" href="//www.zhihu.com/explore">发现</a></li>
                  <li role="tab" class="Tabs-item AppHeader-Tab Tabs-item--noMeta"><a
                      class="Tabs-link AppHeader-TabsLink css-12n8klz" tabindex="0"
                      data-za-not-track-link="true" href="//www.zhihu.com/question/waiting">等你来答</a></li>
                </ul>
                <style data-emotion-css="1acwmmj">
                  .css-1acwmmj {
                    box-sizing: border-box;
                    margin: 0;
                    min-width: 0;
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                  }
                </style>
                <div class="css-1acwmmj">
                  <style data-emotion-css="10fy1q8">
                    .css-10fy1q8 {
                      max-width: 482px;
                    }
    
                    .css-10fy1q8 .SearchBar-input {
                      border-radius: 999px;
                      padding-left: 16px;
                    }
    
                    .css-10fy1q8 .SearchBar-askButton {
                      border-radius: 999px;
                      width: 70px;
                      margin-left: 12px;
                    }
    
                    .css-10fy1q8 .SearchBar-searchButton {
                      border-bottom-right-radius: 999px;
                      border-top-right-radius: 999px;
                    }
                  </style>
                  <div class="SearchBar AppHeader-SearchBar css-10fy1q8" role="search"
                    data-za-module="PresetWordItem">
                    <form class="SearchBar-tool">
                      <div>
                        <div class="Popover">
                          <style data-emotion-css="11bw1mm">
                            .css-11bw1mm {
                              border-color: undefined !important;
                              -webkit-transition-property: background-color, border, color;
                              transition-property: background-color, border, color;
                              -webkit-transition-duration: 0.25s;
                              transition-duration: 0.25s;
                              -webkit-transition-timing-function: ease-in;
                              transition-timing-function: ease-in;
                            }
    
                            .css-11bw1mm {
                              border-color: undefined !important;
                              -webkit-transition-property: background-color, border, color;
                              transition-property: background-color, border, color;
                              -webkit-transition-duration: 0.25s;
                              transition-duration: 0.25s;
                              -webkit-transition-timing-function: ease-in;
                              transition-timing-function: ease-in;
                            }
    
                            .css-11bw1mm {
                              border-color: undefined !important;
                              -webkit-transition-property: background-color, border, color;
                              transition-property: background-color, border, color;
                              -webkit-transition-duration: 0.25s;
                              transition-duration: 0.25s;
                              -webkit-transition-timing-function: ease-in;
                              transition-timing-function: ease-in;
                            }
    
                            .css-11bw1mm {
                              border-color: undefined !important;
                              -webkit-transition-property: background-color, border, color;
                              transition-property: background-color, border, color;
                              -webkit-transition-duration: 0.25s;
                              transition-duration: 0.25s;
                              -webkit-transition-timing-function: ease-in;
                              transition-timing-function: ease-in;
                            }
                          </style>
                          <label class="SearchBar-input css-11bw1mm Input-wrapper Input-wrapper--grey"><input type="text" maxLength="100" value="" autoComplete="off" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-activedescendant="null--1" id="null-toggle" aria-haspopup="true" aria-owns="null-content" class="Input" placeholder=""/><button aria-label="搜索" type="button" class="Button SearchBar-searchButton Button--primary"><style data-emotion-css="1dlt5yv">.css-1dlt5yv{-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:0.25s;transition-duration:0.25s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.css-1dlt5yv:hover{opacity:1;}</style><span style="display:inline-flex;align-items:center">​<svg width="18" height="18" viewBox="0 0 24 24" data-new-api="Search24" data-old-api="Search" class="Zi Zi--Search SearchBar-searchIcon css-1dlt5yv" fill="currentColor"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 18.389c3.875 0 7-3.118 7-6.945 0-3.826-3.125-6.944-7-6.944s-7 3.118-7 6.944 3.125 6.945 7 6.945zm0 1.5c4.694 0 8.5-3.78 8.5-8.445C20 6.781 16.194 3 11.5 3S3 6.78 3 11.444c0 4.664 3.806 8.445 8.5 8.445z"></path><path d="M16.47 16.97a.75.75 0 011.06 0l3.5 3.5a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06z"></path></g></svg></span></button></label>
                        </div>
                      </div>
                    </form>
                    <style data-emotion-css="3q84jd">
                      .css-3q84jd {
                        background-color: undefined !important;
                        color: undefined !important;
                        border: undefined !important;
                        -webkit-transition-property: background-color, color;
                        transition-property: background-color, color;
                        -webkit-transition-duration: 0.25s;
                        transition-duration: 0.25s;
                        -webkit-transition-timing-function: ease-in;
                        transition-timing-function: ease-in;
                      }
    
                      .css-3q84jd:hover {
                        opacity: 1;
                      }
                    </style>
                    <button type="button" class="Button SearchBar-askButton css-3q84jd Button--primary Button--blue">提问</button>
                  </div>
                </div>
                <div class="AppHeader-userInfo">
                  <style data-emotion-css="79elbk">
                    .css-79elbk {
                      position: relative;
                    }
                  </style>
                  <button type="button" class="Button AppHeader-notifications css-79elbk Button--plain"><style data-emotion-css="7dgah8">.css-7dgah8{-webkit-transition-property:color,opacity;transition-property:color,opacity;-webkit-transition-duration:0.25s;transition-duration:0.25s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;}.css-7dgah8:hover{opacity:1;}</style><span style="display:inline-flex;align-items:center">​<svg width="18" height="18" viewBox="0 0 24 24" data-new-api="BellFill24" data-old-api="Bell" class="Zi Zi--Bell css-7dgah8" fill="currentColor"><path d="M9.723 21.271c0-.42.34-.76.76-.76h3.043a.76.76 0 010 1.521h-3.043a.76.76 0 01-.76-.76z" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M11.153 3.115c0-.618.376-1.115.844-1.115.469 0 .845.499.845 1.115v.183c3.997.369 7.012 4.117 7.024 8.515v5.655h.253a.76.76 0 110 1.521H3.891a.76.76 0 010-1.521h.253v-5.655c.011-4.392 3.02-8.137 7.009-8.514v-.184z"></path></svg></span><style data-emotion-css="1n5shmo">.css-1n5shmo{box-sizing:border-box;margin:0;min-width:0;font-size:12px;line-height:14px;}</style><div class="css-1n5shmo">消息</div></button><button type="button" class="Button AppHeader-messages css-79elbk Button--plain"><span style="display:inline-flex;align-items:center">​<svg width="18" height="18" viewBox="0 0 24 24" data-new-api="ChatBubbleTwoFill24" data-old-api="Comments" class="Zi Zi--Comments css-7dgah8" fill="currentColor"><path d="M2 11c0 1.79.553 3.45 1.498 4.82L2.6 18.667a.6.6 0 00.751.753l3.07-.96A8.5 8.5 0 102 11zm11.46 9.414c-.457.16-.506.794-.034.904A6.96 6.96 0 0015 21.5c1.148 0 2.422-.31 3.444-.912.357-.217.658-.378 1.043-.252l1.414.42c.357.112.679-.168.574-.546l-.47-1.57a.736.736 0 01.05-.632c.602-1.108.945-2.32.945-3.498 0-1.07-.248-2.11-.7-3.046-.21-.435-.815-.25-.872.23-.47 3.954-3.211 7.394-6.968 8.72z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span><div class="css-1n5shmo">私信</div></button>
                  <div class="AppHeader-profile">
                    <button type="button" class="Button AppHeader-profileEntry Button--plain"><img class="Avatar AppHeader-profileAvatar" width="30" height="30" src="https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_is.jpeg" srcSet="https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_im.jpeg 2x" alt="点击打开undefined的主页"/></button>
                  </div>
                </div>
              </div>
              <div></div>
            </header>
          </div>
          <div><span style="position:absolute;top:-10000px;left:-10000px" role="log" aria-live="assertive"></span>
          </div>
          <main role="main" class="App-main">
            <div class="Topstory">
              <div></div>
              <div class="Topstory-container">
                <div class="Topstory-mainColumn">
                  <div class="Topstory-mainColumnCard">
                    <div class="Card Topstory-noMarginCard Topstory-tabCard">
                      <nav class="TopstoryTabs Topstory-tabs"><a tabindex="0"
                          aria-controls="Topstory-follow" class="TopstoryTabs-link Topstory-tabsLink"
                          data-za-detail-view-id="9122"
                          data-za-extra="{&quot;button&quot;:{&quot;text&quot;:&quot;关注&quot;}}"
                          href="/follow">关注</a><a tabindex="0" aria-controls="Topstory-recommend"
                          class="TopstoryTabs-link Topstory-tabsLink" data-za-detail-view-id="9122"
                          data-za-extra="{&quot;button&quot;:{&quot;text&quot;:&quot;推荐&quot;}}"
                          href="/">推荐</a><a tabindex="0" aria-controls="Topstory-hot"
                          class="TopstoryTabs-link Topstory-tabsLink is-active"
                          data-za-detail-view-id="9122"
                          data-za-extra="{&quot;button&quot;:{&quot;text&quot;:&quot;热榜&quot;}}"
                          href="/hot">热榜</a><a tabindex="0" aria-controls="Topstory-zvideo"
                          class="TopstoryTabs-link Topstory-tabsLink" data-za-detail-view-id="9122"
                          data-za-extra="{&quot;button&quot;:{&quot;text&quot;:&quot;视频&quot;}}"
                          href="/zvideo">视频</a></nav>
                      <style data-emotion-css="1oxku7z">
                        html {
                          -webkit-scroll-padding-top: calc(52px + 2em);
                          -moz-scroll-padding-top: calc(52px + 2em);
                          -ms-scroll-padding-top: calc(52px + 2em);
                          scroll-padding-top: calc(52px + 2em);
                          -webkit-scroll-padding-bottom: 56px;
                          -moz-scroll-padding-bottom: 56px;
                          -ms-scroll-padding-bottom: 56px;
                          scroll-padding-bottom: 56px;
                        }
                      </style>
                      <div>
                        <div class="Sticky"></div>
                      </div>
                    </div>
                    <div id="TopstoryContent" class="Topstory-content">
                      <div class="ListShortcut">
                        <div class="Topstory-hot HotList">
                          <div class="HotList-list">
                            <section class="HotItem" tabindex="0">
                              <div class="HotItem-index">
                                <div class="HotItem-rank HotItem-hot">1</div>
                              </div>
                              <div class="HotItem-content"><a
                                  href="https://www.zhihu.com/question/550062890"
                                  title="美国拟取消 26 个中方承运赴华航班，为何会做出这一决定？这将带来哪些影响？"
                                  target="_blank" rel="noopener noreferrer"
                                  data-za-not-track-link="true">
                                  <h2 class="HotItem-title">美国拟取消 26
                                    个中方承运赴华航班，为何会做出这一决定？这将带来哪些影响？</h2>
                                  <p class="HotItem-excerpt">当地时间 8 月 25
                                    日，美国交通部发布通告，由于美国航司多个赴华航班被取消，计划自九月起取消 26
                                    个由中国航司（国航、南航、东航、厦航）承运的美国赴华航班。
                                    这意味着，原本就供不应求的中美航线航班运力将再遭削减，除了影响几家中方航空公司的收益，直接影响的还有回国乘客以及中美航线票价。
                                    根据通告，计划被取消的中美航班包括国航，南航，东航和厦航的多个航班，几乎囊括了整个九月。 其中国航洛杉矶 -
                                    深圳被取消 9 月 6 、 13 、 20 和 27 日，国航洛杉矶 - 北京被取消 9 月 18 和 25
                                    日；东航纽约 - 上海被取消 9 月 7 、 12 、 14 、 19 、 21 、 26 和 28 日；南航
                                    洛杉矶 - 广州被取消 9 月 10 、 12 、 17 、 19 、 24 和 26 日；厦航洛杉矶 -
                                    厦门被取消 9 月 5 、 8 、 12 、 15 、 19 、 22 和 26 日。 来源：第一财经</p>
                                </a>
                                <div class="HotItem-metrics HotItem-metrics--bottom">
                                  <style data-emotion-css="15ro776">
                                    .css-15ro776 {
                                      margin-right: 4px;
                                    }
                                  </style><svg width="18" height="18" viewBox="0 0 24 24"
                                    data-new-api="FireFill24" data-old-api="FireFill24"
                                    class="ZDI ZDI--FireFill24 css-15ro776"
                                    fill="currentColor">
                                    <path
                                      d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                                      fill-rule="evenodd" clip-rule="evenodd"></path>
                                  </svg>1773
                                  万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
                                </div>
                              </div></span>
                          </div>
                        </div><a class="HotItem-img" href="https://www.zhihu.com/question/550062890"
                          title="美国拟取消 26 个中方承运赴华航班，为何会做出这一决定？这将带来哪些影响？" target="_blank"
                          rel="noopener noreferrer"
                          data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-c1fd8c8662a37ab210eca028b426cc8f_400x224.png" alt="美国拟取消 26 个中方承运赴华航班，为何会做出这一决定？这将带来哪些影响？"/></a>
                          </section>
                          <section class="HotItem" tabindex="0">
                            <div class="HotItem-index">
                              <div class="HotItem-rank HotItem-hot">2</div>
                            </div>
                            <div class="HotItem-content"><a
                                href="https://www.zhihu.com/question/549906723"
                                title="人社部表示 10 年来城镇新增就业 1.3 亿人，工资较 2012 年翻一倍，如何解读该数据？"
                                target="_blank" rel="noopener noreferrer"
                                data-za-not-track-link="true">
                                <h2 class="HotItem-title">人社部表示 10 年来城镇新增就业 1.3 亿人，工资较 2012
                                  年翻一倍，如何解读该数据？</h2>
                                <p class="HotItem-excerpt">2022 年 8 月 25
                                  日，中共中央宣传部就党的十八大以来就业和社会保障工作进展与成效举行新闻发布会。人力资源和社会保障部副部长李忠在回答界面新闻提问时介绍，党的十八大以来，城镇新增就业年均超过
                                  1300 万人，10 年累计实现城镇新增就业 1.3 亿人。
                                  李忠介绍，党的十八大以来，以习近平同志为核心的党中央高度重视就业工作，明确把就业摆在「六稳」「六保」之首，强化就业优先政策，推动就业工作在十年间取得历史性成就。这
                                  10 年，就业局势保持总体稳定，在 14 亿多人口的大国实现了比较充分的就业。
                                  李忠表示，我国城镇就业规模不断扩大，调查失业率总体低于预期控制目标。而且，城乡就业格局发生历史性改变，2021
                                  年城镇就业人员占比达到 62.7%，第三产业成为就业最大「容纳器」，三次产业「倒金字塔型」的就业结构逐步形成。
                                  此外，就业质量稳步提升，工资水平不断提高。2021 年城镇单位人员工资较 2012
                                  年翻了一倍，社会保险覆盖范围继续扩大，灵活就业人员权益保障不断完善。 来源：界面新闻</p>
                              </a>
                              <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18"
                                  height="18" viewBox="0 0 24 24" data-new-api="FireFill24"
                                  data-old-api="FireFill24"
                                  class="ZDI ZDI--FireFill24 css-15ro776" fill="currentColor">
                                  <path
                                    d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>1189
                                万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
                              </div>
                            </div></span>
                      </div>
                    </div><a class="HotItem-img" href="https://www.zhihu.com/question/549906723"
                      title="人社部表示 10 年来城镇新增就业 1.3 亿人，工资较 2012 年翻一倍，如何解读该数据？" target="_blank"
                      rel="noopener noreferrer"
                      data-za-not-track-link="true"><img loading="lazy" src="https://pica.zhimg.com/80/v2-2641a0d34a341a528daafa01cc77513d_400x224.png" alt="人社部表示 10 年来城镇新增就业 1.3 亿人，工资较 2012 年翻一倍，如何解读该数据？"/></a>
                      </section>
                      <section class="HotItem" tabindex="0">
                        <div class="HotItem-index">
                          <div class="HotItem-rank HotItem-hot">3</div>
                        </div>
                        <div class="HotItem-content"><a href="https://www.zhihu.com/question/549854528"
                            title="诗歌研究专家称普通读者无法鉴赏贾浅浅的诗，你认同这一观点吗？鉴赏诗歌是否需具备某些素养？" target="_blank"
                            rel="noopener noreferrer" data-za-not-track-link="true">
                            <h2 class="HotItem-title">诗歌研究专家称普通读者无法鉴赏贾浅浅的诗，你认同这一观点吗？鉴赏诗歌是否需具备某些素养？
                            </h2>
                            <p class="HotItem-excerpt">近日，作家贾平凹之女贾浅浅出现在 2022
                              年中国作家协会会员发展名单中引发热议。中国现代文学研究会会员荣光启表示，贾浅浅在诗歌方面的造诣是够资格进入作协的，「她写诗的水平在当代女诗人中是比较优秀的」，读者会把她写孩子屙屎屙尿的事情放大。贾浅浅拟入作协遭质疑，诗歌研究专家：她够资格，和其父贾平凹无关，普通读者无法鉴赏
                            </p>
                          </a>
                          <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18"
                              height="18" viewBox="0 0 24 24" data-new-api="FireFill24"
                              data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                              fill="currentColor">
                              <path
                                d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                                fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>1182
                            万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
                          </div>
                        </div></span>
                  </div>
                </div><a class="HotItem-img" href="https://www.zhihu.com/question/549854528"
                  title="诗歌研究专家称普通读者无法鉴赏贾浅浅的诗，你认同这一观点吗？鉴赏诗歌是否需具备某些素养？" target="_blank"
                  rel="noopener noreferrer"
                  data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-9404a44cf653be5dd05d7aa2b5dc6a6e_400x224.png" alt="诗歌研究专家称普通读者无法鉴赏贾浅浅的诗，你认同这一观点吗？鉴赏诗歌是否需具备某些素养？"/></a>
                  </section>
                  <section class="HotItem" tabindex="0">
                    <div class="HotItem-index">
                      <div class="HotItem-rank">4</div>
                    </div>
                    <div class="HotItem-content"><a href="https://www.zhihu.com/question/549868234"
                        title="如何评价上海凤凰自行车半年营收过亿，净利润仅为 9.63 万元？你觉得凤凰牌自行车骑起来体验如何？" target="_blank"
                        rel="noopener noreferrer" data-za-not-track-link="true">
                        <h2 class="HotItem-title">如何评价上海凤凰自行车半年营收过亿，净利润仅为 9.63 万元？你觉得凤凰牌自行车骑起来体验如何？</h2>
                        <p class="HotItem-excerpt">营收和利润差距真的很大......</p>
                      </a>
                      <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18"
                          viewBox="0 0 24 24" data-new-api="FireFill24" data-old-api="FireFill24"
                          class="ZDI ZDI--FireFill24 css-15ro776" fill="currentColor">
                          <path
                            d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                            fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>1142
                        万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
                      </div>
                    </div></span>
              </div>
            </div><a class="HotItem-img" href="https://www.zhihu.com/question/549868234"
              title="如何评价上海凤凰自行车半年营收过亿，净利润仅为 9.63 万元？你觉得凤凰牌自行车骑起来体验如何？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-98acd5602d91bfab2c00e845a12d93d1_400x224.png" alt="如何评价上海凤凰自行车半年营收过亿，净利润仅为 9.63 万元？你觉得凤凰牌自行车骑起来体验如何？"/></a>
              </section>
              <section class="HotItem" tabindex="0">
                <div class="HotItem-index">
                  <div class="HotItem-rank">5</div>
                </div>
                <div class="HotItem-content"><a href="https://www.zhihu.com/question/550027748"
                    title="重庆北碚山火被有效封控，起决定性作用的「以火灭火」是啥战术？还有哪些救火战术？" target="_blank"
                    rel="noopener noreferrer" data-za-not-track-link="true">
                    <h2 class="HotItem-title">重庆北碚山火被有效封控，起决定性作用的「以火灭火」是啥战术？还有哪些救火战术？</h2>
                    <p class="HotItem-excerpt">「我们胜利了！」8 月 25 日 23
                      时许，阵阵欢呼声响彻缙云山上空。经过各方救援力量奋力扑救，北碚区歇马街道山火明火得到有效封控。在这场与山火的拉锯战中，「以火灭火」的方式，助力了阶段性胜利时刻的到来。
                      「点火」！当天 20 时许，随着一声令下，一团火苗在半山腰的防火隔离带旁边被点燃。随后，一条「火龙」在现场熊熊燃起，利用隔离带和风向优势向原本的火线蜿蜒烧去…
                      什么是「以火灭火」？记者采访了参与此次救援的云南森林消防一名工作人员。他介绍，「以火灭火」又称「火攻法」，主要原理是由人工点燃火头（火线）与相向烧来的林火对接，使结合部骤然缺氧失去燃烧条件，在此次北碚山火的扑灭过程中起到了决定性作用。
                      「这一方法的优点是灭火效率较高，不需要特殊装备，是控制大面积、高能量森林火灾的有效措施，但必须有经验丰富的指挥员组织，盲目火攻容易造成更大的火灾或人员伤亡。」该工作人员介绍。
                      此外，在实战中运用火攻，必须周密计划，落实安全保障，认真组织实施。一要选择有利地形，如利用林间道路、小溪、防火线、山脊为依托；二要做好点烧前的各项准备工作，如点火器、灭火机具等，清点人员并及时疏散无关人员；三要划分点烧组、扑救组、清守组的职责，明确任务；四要彻底清理余火，确保不跑火、不复燃、不留隐患；五要控制好点烧火的发展方向，稳步推进，确保达到以火攻火的目的。视频
                      | 啥是「以火灭火」？消防救援人员科普北碚山火拉锯战中的反向点火战术</p>
                  </a>
                  <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18"
                      viewBox="0 0 24 24" data-new-api="FireFill24" data-old-api="FireFill24"
                      class="ZDI ZDI--FireFill24 css-15ro776" fill="currentColor">
                      <path
                        d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                        fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>851
                    万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
                  </div>
                </div></span>
        </div>
      </div><a class="HotItem-img" href="https://www.zhihu.com/question/550027748"
        title="重庆北碚山火被有效封控，起决定性作用的「以火灭火」是啥战术？还有哪些救火战术？" target="_blank" rel="noopener noreferrer"
        data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-5c6f372aa8060915260ce206d40320c5_400x224.png" alt="重庆北碚山火被有效封控，起决定性作用的「以火灭火」是啥战术？还有哪些救火战术？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">6</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549973547"
              title="「美人鱼」儒艮在我国已功能性灭绝，14 年来无出现记录，为何会出现这一悲剧？我们能做些什么？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">「美人鱼」儒艮在我国已功能性灭绝，14 年来无出现记录，为何会出现这一悲剧？我们能做些什么？</h2>
              <p class="HotItem-excerpt">据 BBC 报道，激发美人鱼故事的动物 - 儒艮，在中国面临灭绝危机。来自伦敦动物学会（ZSL）的塞缪尔 - 特维教授是这项研究的共同作者，他说
                「 儒艮在中国的可能消失是一个毁灭性的损失 」。ZSL 和中国科学院的科学家们审查了所有关于以前在中国发现儒艮的历史数据。他们发现，自 2000
                年以来，科学家们没有核实过目击事件。此外，研究人员求助于公民科学，采访了居住在这些沿海地区的 788 名社区成员，以确定当地人最后一次看到儒艮的时间。平均而言，居民报告说他们已经 23
                年没有见过儒艮了。只有三个人在过去五年中见过儒艮。1988 年，儒艮被中国列为国家一级重点保护动物，然而自 2008
                年以来，已没有儒艮在中国出现的记录。科学家调查研究后认为，儒艮在中国已经功能上灭绝——这意味着「它已不再能自我维持生存」。「美人鱼」儒艮（gèn）在中国已功能性灭绝，14 年来无出现记录
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>576
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549973547"
            title="「美人鱼」儒艮在我国已功能性灭绝，14 年来无出现记录，为何会出现这一悲剧？我们能做些什么？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/80/v2-43a8cda31304ee28bea9f50d99fcb5fc_400x224.jpg?source=1940ef5c" alt="「美人鱼」儒艮在我国已功能性灭绝，14 年来无出现记录，为何会出现这一悲剧？我们能做些什么？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">7</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549940544"
              title="刺杀安倍的枪手山上彻也收到大量慰问品，六千余人请愿为他减刑，这对日本政界会有何影响？哪些信息值得注意？" target="_blank"
              rel="noopener noreferrer" data-za-not-track-link="true">
              <h2 class="HotItem-title">刺杀安倍的枪手山上彻也收到大量慰问品，六千余人请愿为他减刑，这对日本政界会有何影响？哪些信息值得注意？</h2>
              <p class="HotItem-excerpt">据雅虎新闻 8 月 24 日消息，「彻也送来了一个纸箱，他在拘留所里好像收到了很多礼物，好像有很多钱。纸箱里有糖果和漫画书。」山下彻也 77
                岁的叔叔如是说道。 在刺杀日本前首相安倍晋三后
                ，枪手山下彻也仍在拘留所进行精神评估，以调查他是否具备刑事责任能力。此前，山上曾表示自己作案的动机是因其「人生因‘统一教会’变得一团糟」，因此也让外界民众关注到「统一教会」不为人知的一面。目前许多媒体仍在调查该教会的商业影响力以及其与政客的关系。
                据此前报道，山下的父亲自杀后，其母将 6000 万日元保险金全部捐给了教会，山下的哥哥因对未来充满悲观而自杀，山下自己也没钱上大学。
                事件曝光后，「统一教会受害者协会」及「全国维权律师协会」收到大量的咨询 ，似乎越是揭露该教会的真相，民众对于山下的同情就越大。据日媒 12
                日报道，日本一网站发起了要求给山上彻也减刑的签名请愿活动，已有超 6000 人在请愿书上签名。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>432
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549940544"
            title="刺杀安倍的枪手山上彻也收到大量慰问品，六千余人请愿为他减刑，这对日本政界会有何影响？哪些信息值得注意？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-6d4a9fc9df7d94d8c1d3961c6af0b1c3_400x224.png" alt="刺杀安倍的枪手山上彻也收到大量慰问品，六千余人请愿为他减刑，这对日本政界会有何影响？哪些信息值得注意？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">8</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549924874"
              title="如何看待报告称「超七成观众愿接受付费直播大结局」？直播大结局收费是否合理？你愿意付费吗？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何看待报告称「超七成观众愿接受付费直播大结局」？直播大结局收费是否合理？你愿意付费吗？</h2>
              <p class="HotItem-excerpt">8 月 25 日，中国消费者报发布《2022
                长视频平台用户满意度报告》。报告显示，七成以上消费者愿意为优质内容买单，更倾向于开通半年以上时长的会员。随着「视频内容也是商品」的观念深入人心，消费者需求逐渐多元化，六成用户希望平台能够分层级收费，提供更多元服务。平台提前告知规则的前提下，其中超七成观众愿意接受付费直播大结局，可见消费者对于喜爱的影视内容「解锁提前观看」的诉求强烈。
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>404
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549924874"
            title="如何看待报告称「超七成观众愿接受付费直播大结局」？直播大结局收费是否合理？你愿意付费吗？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/80/v2-efea78aec20e5df4a25469cba359aeb9_400x224.png" alt="如何看待报告称「超七成观众愿接受付费直播大结局」？直播大结局收费是否合理？你愿意付费吗？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">9</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/550055580"
              title="如何评价专家称「可以给 00 后增加工作强度，其能力不可小觑」？现实情况如何？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何评价专家称「可以给 00 后增加工作强度，其能力不可小觑」？现实情况如何？</h2>
              <p class="HotItem-excerpt">近日，在《来点财经范儿》节目中，中国生物营销中心副总经理张轶楠表示，在我们的工作中，我觉得对于 00
                后，（工作强度）是可以给他加码的。因为我认为他们具备一个很好素质的人。我举个例子，就是 00 后和 95
                后，他们获取信息可能更多元化，而且他们具备独立思考的能力。所以，作为我们这种创新型的企业，当我们给他们一个 idea
                的时候，他们通过自我的这种检索、信息搜集，反而能交出来一个具有独立观点的报告或者一些项目的案例，我觉得这个例子就让我觉得 00 后的能力是不可小觑的。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>369
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/550055580"
            title="如何评价专家称「可以给 00 后增加工作强度，其能力不可小觑」？现实情况如何？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-3873813674afb34cc7b5080dd84e535f_400x224.png" alt="如何评价专家称「可以给 00 后增加工作强度，其能力不可小觑」？现实情况如何？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">10</div>
          </div>
          <div class="HotItem-content"><a href="https://zhuanlan.zhihu.com/p/557052412" title="有什么嚼着就能解困的健康零食？"
              target="_blank" rel="noopener noreferrer" data-za-not-track-link="true">
              <h2 class="HotItem-title">有什么嚼着就能解困的健康零食？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>广告<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://zhuanlan.zhihu.com/p/557052412" title="有什么嚼着就能解困的健康零食？"
            target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pica.zhimg.com/v2-9a84a4e88ac57e7171d257c71309f4d6_400x224.jpg?source=6a64a727" alt="有什么嚼着就能解困的健康零食？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">11</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549591725"
              title="绍兴「网瘾」少年被骂后跳下 11 楼致终身残疾，为何有些孩子会沉迷网络游戏？父母或社会该如何正确引导？" target="_blank"
              rel="noopener noreferrer" data-za-not-track-link="true">
              <h2 class="HotItem-title">绍兴「网瘾」少年被骂后跳下 11 楼致终身残疾，为何有些孩子会沉迷网络游戏？父母或社会该如何正确引导？</h2>
              <p class="HotItem-excerpt">如何将自己 14 岁的儿子小军（化名）从游戏世界中拯救出来，是浙江绍兴一名大学老师王刚（化名）这两三年一直在思考的问题。 2020
                年年初疫情居家期间，读初一的小军开始对网络游戏沉迷，在复课后，放学后第一件事也是捧起手机。 为此王刚曾动手「教训」过小军，但收效甚微。冲突在当年 10
                月爆发，王刚在听说小军在考试中成绩倒数之后，看到仍在玩游戏的他，说了几句「难听」的话，小军从 11 楼的家中跳了下去，身负重伤。但即使在医院治疗期间，小军也仍在病床上玩游戏。
                王刚曾经以为，经过这件事，小军会明白，生命并不像他经常玩的《王者荣耀》，在「been slayed」（被杀）之后，还能很快重启。 今年 4 月底，小军才从医院出院，落下残疾，但网瘾依旧。 8
                月 18
                日，王刚告诉潇湘晨报记者，对于出院后的小军仍沉迷王者荣耀等游戏，一方面他心疼儿子，另一方面他又担心孩子继续沉沦。一次他实在没忍住，再次打了小军，因为他得知小军往一款游戏中充值了一万多元。
                实际上，针对青少年沉迷网络游戏现象，国家相关部门近年来不断升级关于防止未成年人沉迷网络游戏的规定。
                在政策指导下，一些游戏厂家实际一直在优化反沉迷系统，并取得实效，但部分机制仍有漏洞可钻。专家也同时指出，解决青少年网瘾问题，也绝不是单单通过游戏厂家一方能够解决的，还需要监管部门、学校、家庭等各方面的努力。
                因沉迷手机游戏，父亲没收手机后儿子从 11 楼跳下 14
                岁的小军是王刚的独子。王刚是一名大学老师，七八年前，王刚与妻子离婚，小军跟在了王刚身边。王刚说，可能由于家庭因素的影响，他们父子俩之间交流不算太多。但以前小军还算「听话」，小学阶段的成绩还可以。但自从
                2020 年初后，他开始有些焦虑。 当时正值疫情期间，学校都停课了，居民也在家不得随意外出。读初一的小军在这个阶段因在家无聊，开始迷上了手机游戏，虽然以前他也玩游戏，但家长还能够控制。
                自那之后小军沉迷其中一发不可收拾。「每天在家打游戏，也不愿意和我说话。」王刚说，他看在眼里急在心里，原本以为开学后会好一些，但小军依旧每天回家便开始打游戏，成绩也一落千丈，变成了班上的倒数几名。
                王刚说，他自己不玩游戏，也不懂游戏，儿子用的手机是自己淘汰的旧手机，账号则是用王刚自己的身份证注册的。
                他之前将小军的账号注销过，他也动手打过儿子，也摔烂几个手机，但「效果」只能维持几天，之后儿子又悄悄玩游戏。儿子有时也会央求他，如果不从就生闷气不吃饭。「我只有一个儿子，有时候实在也不忍心，我又把手机给他了。」王刚承认自己有时决心不大，儿子也曾在游戏中充值购买游戏服务，花了大几千块钱，其中一部分是他给儿子的压岁钱，另一部分是他前妻给儿子的。
                去年 10 月 1
                日，父子俩再次爆发矛盾。当天是国庆节，王刚做完午饭，看到儿子又在玩《王者荣耀》，而之前学校老师和他说，小军最近一次考试考得很差，他立马上前，将儿子的手机没收，并开始破口大骂。
                小军被父亲吓得不敢作声，又生起了闷气，并拒绝吃饭，王刚则说了几句「难听的话」，突然小军跑到房间把房门反锁。王刚用力踹门没有踹开，跑到窗户边一看，儿子竟然赌气直接从自家小区 11 楼跳了下去。
                被吓到的王刚赶紧跑到了楼下，小军已经晕了过去，王刚立即将孩子送到了医院。在 ICU 呆了六天后，小军才恢复了意识，并在当年 10 月 23
                日转入普通病房。王刚的前妻知道此事后，也赶过来照顾小军。 潇湘晨报记者在浙江大学医学院附属儿童医院的一份诊断书上看到，小军一共有 23
                处诊断记录，包括重型颅脑损伤，失血性休克，消化道出血，全身多处骨头骨折等等。
                王刚在学校的课不多，除了上课时间，他就跑来照顾小军。在担心小军身体的同时，他也有另一个焦虑：小军依旧痴迷于网络游戏，即使在病床上。
                王刚说，在孩子住院期间，孩子和他的交流依旧很少，每天睁开眼就是拿出手机，躺在病床上玩游戏。王刚在小军住院期间拍摄一段视频，视频中小军躺在病床上，双手拿着手机，屏幕里传来游戏中的厮杀声——那是手游《王者荣耀》的界面。
                绍兴少年被骂后跳下 11 楼致终身残疾：躺在病床上仍整天玩游戏，难戒网瘾 _ 长江云 - 湖北网络广播电视台官方网站</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>315
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549591725"
            title="绍兴「网瘾」少年被骂后跳下 11 楼致终身残疾，为何有些孩子会沉迷网络游戏？父母或社会该如何正确引导？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/v2-bad827e5991af9fcdeec602f0282448e_400x224.jpg" alt="绍兴「网瘾」少年被骂后跳下 11 楼致终身残疾，为何有些孩子会沉迷网络游戏？父母或社会该如何正确引导？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">12</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549653138"
              title="陕西正在搭建商用可控核聚变堆装置，什么是商业聚变？核聚变发电要实现了吗？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">陕西正在搭建商用可控核聚变堆装置，什么是商业聚变？核聚变发电要实现了吗？</h2>
              <p class="HotItem-excerpt">
                核聚变被形象的称之为「人造太阳」，近日，我国首个小型化、可快速迭代的商用可控核聚变反应堆在秦创原开始建设，这标志着在全球核聚变的赛道上又多了一名中国选手。
                这里是位于西安经济技术开发区的我国首个商用可控聚变堆——星环聚能实验场的装置区，硕大的钢筋铁柱已为将来的「核聚变」实验筑起了「铜墙铁壁」防护网。自今年 6
                月份开工以来，已完成了实验基地改造，技术设备进场等关键环节。球型托卡马克装置的安装部件于 8 月份已运至实验场地，目前公司核心研发团队的十多位聚变能及相关技术领域的博士、硕士已开始组装工作。
                据了解，近年来，随着高温超导、先进材料等技术的进步，以紧凑、快速迭代为主要特征的商业化聚变能开发迎来新的发展风口。星环聚能自 2021 年 7 月入驻秦创原清控科创西部创新加速中心以来，到今年
                6 月份已获得数亿元投资。预计今年 10 月完成一代装置组装，明年实现加热等离子体到 1700
                万度的预期目标。未来将有望应用于聚变能电站、大中型船舶、海上作业平台，以及近地轨道器等场景的动力系统，也将为我省实现「双碳」目标提供新的技术路径和产业模式。起点新闻：【奋进新征程建功新时代】陕西将建成我国首个商用可控聚变堆
                - 陕西省科学技术厅</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>295
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549653138"
            title="陕西正在搭建商用可控核聚变堆装置，什么是商业聚变？核聚变发电要实现了吗？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pica.zhimg.com/80/v2-40783c9f68180737d2821485dd8eeb42_400x224.png" alt="陕西正在搭建商用可控核聚变堆装置，什么是商业聚变？核聚变发电要实现了吗？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">13</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549615300"
              title="天津大学 00 后本科生以第一作者身份在 Science 发表论文，这是什么水平？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">天津大学 00 后本科生以第一作者身份在 Science 发表论文，这是什么水平？</h2>
              <p class="HotItem-excerpt">2022 年 8 月 18 日，美国西北大学 William R. Dichtel 、加利福尼亚大学洛杉矶分校 K. N. Houk
                院士及中国科学院上海有机化学研究所薛小松等多团队合作（西北大学 Brittany Trang 和天津大学 Li Yuli 是共同第一作者）在 Science
                在线发表题为「Low-temperature mineralization of perfluorocarboxylic acids」的研究论文，该研究发现全氟烷基羧酸 (PFCA)
                可以通过氢氧化钠介导的脱氟途径进行矿化。 值得注意的是，天津大学理学院 2018 级本科生李预立作为共同第一作者，而他是一名「00 后」。 李预立从 2020
                年下半年开始参与到课题的研究中，他所做的计算工作为合作的实验团队对结果的假设进行了检验工作，同时他还基于自己的认识提出了新的假设，这种猜测最终被证明是对的。
                近年来，天津大学理学院本科生在高水平期刊上发表学术论文已经不是个例。
                学院一直注重本科生科研能力的培养，鼓励学生参与高水平的科学研究和国际合作，出台《天津大学理学院本科生科研能力提升计划》，激发学生主动学习意识和潜能，不断提升学生的学习能力、创新能力、实践能力和合作精神。
                英雄出少年，这几年，越来越的 95 后、甚至是 00 后在学术圈展露头角。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>264
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549615300"
            title="天津大学 00 后本科生以第一作者身份在 Science 发表论文，这是什么水平？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic2.zhimg.com/50/v2-ce3b1134c142e24b8e3654c57eda1fde_400x224.jpg" alt="天津大学 00 后本科生以第一作者身份在 Science 发表论文，这是什么水平？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">14</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/550015026"
              title="普京签署命令将俄武装力量编制增加 13.7 万人，俄军总人数将达到 115 万人，这释放了什么信号？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">普京签署命令将俄武装力量编制增加 13.7 万人，俄军总人数将达到 115 万人，这释放了什么信号？</h2>
              <p class="HotItem-excerpt">据俄卫星网 25 日报道，俄罗斯法律信息官方网站的文件显示，在 2017 年 11 月 17 日生效的总统令中规定，俄武装力量在役人数为
                1902758 人，其中 1013628 人为军人。而在新的命令中，俄武装力量在役人数为 2039758 人，其中 1150628 人为军人。该命令将于 2023 年 1 月 1 日生效。
                根据介绍，在俄罗斯的国家体系中，俄罗斯联邦武装力量的最高指挥官为俄罗斯联邦总统。俄罗斯联邦武装力量除了军队，还有内卫部队、边防军、铁道兵、通信部队等。
                俄卫星网的这篇报道可以说是字少事大，虽然没有直接分析增加兵力的意图，但引发外界的广泛猜测。 路透社 25
                日以「普京签署法令扩大俄罗斯武装部队规模」为题称，普京周四签署一项法令，随着俄乌冲突进入第七个月，俄罗斯武装部队的规模从 190 万增加到 204 万。
                路透社的报道不仅将俄军规模的扩大与俄乌冲突直接挂钩，还宣称「莫斯科自冲突的头几周以来就没有透露任何人员损失数，但西方官员和基辅政府表示，损失人数已达数千人」。 美国广播公司网站 25
                日则报道称，在莫斯科对乌克兰的特别军事行动中，俄罗斯总统弗拉基米尔·普京已下令俄罗斯武装部队规模增加 13.7 万人。 《莫斯科时报》25
                的文章援引一位美国专家的分析称，像这样的扩张是当俄总参谋部内部对未来的战略预期非常悲观时采取的行动，或者有一个长期的冲突或项目。报道称，美国官员估计，在对乌克兰特别军事行动的六个月战斗中，俄罗斯有
                7.5 万名士兵伤亡，西方媒体还一直在渲染俄罗斯军队正遭受严重的人力短缺。 报道援引一些独立媒体的说法称，一些俄罗斯将军认为，俄乌冲突可能会持续数年。
                真的是这样吗？老刘认为，西方媒体估算的这个伤亡数据过于夸张，有宣传的成分。据俄《真理报》25
                日报道，俄军事专家弗拉季斯拉夫·舒里金评论了乌克兰特别行动期间官方战斗损失报告中的差异。该专家表示，如果从公开来源获取平均数据，那么在乌克兰进行为期六个月的特别行动中，俄罗斯军队和两个「共和国」的民兵的死亡总数约为
                1.1 万人。该俄罗斯专家还评估乌克兰军方有 3-4 万人丧生。 综合来看俄专家提出的这个数据是有一定参考价值的。 老刘认为，俄总统普京签署的这一增兵法令试图传递以下两条信息：
                首先，这是一条战略级别的重磅信息，而非战术级别的。从这个层面来看，普京的增兵法令并不是直接针对俄军在对乌特别军事行动中的兵力伤亡。换句话说，即便俄军真如西方媒体炒作的的那样有数万伤亡，俄军原有的兵力员额也完全不需要通过增兵法案来实现兵力补充。
                其次，俄扩军的这一举动意味着，俄方对于自己所处的安全环境持非常悲观的态度，认为在相当长一段时间之内，这种被美国为首北约敌对的环境将会持续。 这从美国最新宣布的对乌军事援助就可以看出。 白宫 8
                月 24 日宣布对乌克兰提供 30 亿美元的安全援助。这是俄乌冲突六个月来，美国提供的最大一笔军援。至此，美国为这场已持续 184 天的冲突共付出了 136 亿美元。
                美国媒体认为，与此前应对当前军事需求的援助不同，此次新的援助计划侧重的是中长期军事援助，需要数月甚至数年才会落地。而这些态势可能促使俄总统做出了签署扩军法令的决心。普京突然签令扩军 13.7
                万，外媒炸锅了</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>262
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/550015026"
            title="普京签署命令将俄武装力量编制增加 13.7 万人，俄军总人数将达到 115 万人，这释放了什么信号？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/80/v2-c39b157cfab218d5454f69b2d3859266_400x224.png" alt="普京签署命令将俄武装力量编制增加 13.7 万人，俄军总人数将达到 115 万人，这释放了什么信号？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">15</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/548865736"
              title="「大旱之后必有大震」的理论站得住脚吗？如何从科学角度进行解释？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">「大旱之后必有大震」的理论站得住脚吗？如何从科学角度进行解释？</h2>
              <p class="HotItem-excerpt">罕见的高温让更多人担忧起全球变暖。与此同时，各种耸人听闻的谣言也接连出现，比如「高温让臭氧细菌感染加剧」「三伏天汗出透了能排毒」。
                其中最离谱的、恐吓架势最足的，是警告大家「大旱之后有大震」的「旱震理论」。不少人信以为真，相关内容被大量转发。
                倒不是大家辨别能力的问题。只是这个「旱震理论」真的有模有样：不仅有百度百科的词条，提出者还有地震科学家的头衔，甚至还就此出版了一本书，书中列出了相当多的数据来论证——通过分析 1957 年至
                1971 年中国降水量的资料，他得出结论：在中国大地震前 1 至 3 年半内，震中区往往是干旱区。 但这个理论真的立得住吗？ 只要时空范围够大，总能中一次
                根据「旱震理论」提出者的研究，全国大旱之后 3 年内有大震的概率高达 84.8%，只有 15.2% 的旱区在灾后 3 年内没有发生大地震。 我们首先来看看他所说的旱区是什么？
                《中国旱震关系研究》中关于「旱区」定义的截图 25.2 万平方公里有多大？相当于江浙沪三地陆地面积的总和。 这么大的圈意味着，如果城市 A 今年发生了大旱，而远在 283 公里外的城市 B
                如果发生了大地震，就能证明「旱震理论」的有效性。 另一个不易被察觉的放大条件是「旱灾后 1 至 3 年」。 统计一下就会发现，在过去的一百多年内，中国许多区域发生旱灾的次数并不少。再加上「未来
                3 年」这个条件，有的地方甚至大多数时候都处在该理论所说的可能会发生大地震的时段。 以发生过大地震的汶川为例，在 1900 年至 2013 年这 114 年中，汶川有 58
                年都处于大旱或大旱后的 3 年内，占比超过一半。如果大地震发生的年份落入这 58 年中，「旱震理论」就可以宣告有效。事实上，在汶川大地震发生的前一年，周边就正好发生了大旱。 这也是为什么，早在
                2011 年，时任中国地震台网中心地震预报部副主任张永仙在接受媒体采访时就说，利用干旱和气候异常预测地震，虚报率很高，很难用于震前预测。 根据该理论提出者自己的统计，大地震前 3
                年半内有大旱的比例是 96.6%，可谓是「大震前必有大旱」。 《中国旱震关系研究》截图 但如果把统计时间拉长，结果就没那么「准了」。根据我们的统计，从 1900 年至 2013
                年，中国大陆共发生过 142 次 6 级及以上的大地震，而这其中，大震之前 1 至 4 年（因大旱数据未精确到月，我们在统计中把理论中的 3 年半放宽到 4 年）为旱区的情况有 79
                次，仅占一半出头。 而之所以还会有这 56% 的占比，也离不开前文提到的足够大的时空范围。一把巨大而刻度稀疏的尺子，你能指望它有多精确呢？ 至于反过来，
                不过如果要说以上的统计还有什么可以商榷的，那就是地震的中心不一定是大旱的中心。所以这次我们画一个更大的圆。 这么一个面积达 100
                多万平方公里的圆，超过中国领土面积的十分之一，统计结果依然是：1297 次大旱，1 至 3 年后发生大震的次数是 119 次，仅占 9%。
                除了「旱震理论」，民间还流传着许多地震发生的前兆，比如「地震云」「雾霾预示地震」。但专家对此表示，首先要有充分的事实证明二者间内在关联性的存在，其次要能找出合理的物理理论论证二者的关联。只有符合这两个条件，才能证明这些现象与地震确实存在关联。
                举一个极端的例子：齐齐哈尔发生旱灾的那几年，当地人上网搜「老虎」的频次异常高。按照「旱震理论」的逻辑，这里或许隐藏着一个「大旱老虎理论」：大旱发生之后，齐齐哈尔人就会陷入对老虎的痴迷之中。
                同样地，还有「干旱螃蟹理论」：邯郸人在发生大旱的时候，特别关心螃蟹过得怎么样。 至少到目前为止，科学家们还没有监测到任何大地震发生前似乎必定会有的信号。
                而目前人类能做到的，只有在地震发生之后，向地震横波尚未到达的可能受灾区域，提前数秒至几十秒发出警报信息。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>229
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/548865736"
            title="「大旱之后必有大震」的理论站得住脚吗？如何从科学角度进行解释？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/80/v2-bfad9eff95d5e470f65b0d1352f6ce34_400x224.png" alt="「大旱之后必有大震」的理论站得住脚吗？如何从科学角度进行解释？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">16</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549790307"
              title="芬兰女总理马林在其总理官邸传出两名女子不雅照，该事件对她的政治生涯有何影响？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">芬兰女总理马林在其总理官邸传出两名女子不雅照，该事件对她的政治生涯有何影响？</h2>
              <p class="HotItem-excerpt">据 BBC8 月 24 日报道，丑闻缠身的芬兰总理桑娜·马林（Sanna
                Marin）近日又被曝出在总理宫邸开派对，其中两名女子裸露胸部并互相亲吻的照片流出。马林随后为这张「不合适」的照片道歉，表示照片于今年 7 月拍摄，并无特别的事情发生。
                据芬兰媒体报道，这些在总理宫邸拍摄的不雅照被曝光至社交媒体。在照片当中，可以看到两名衣着火辣的女性互相亲吻，同时用一块写着“芬兰“的标志遮挡彼此裸露的胸部。本周一，马林出面表示，该照片于今年
                7 月在总理宫邸拍摄。 然而当地媒体指出，这张极具争议性的照片是于总理宫邸楼下厕所拍摄的。马林回应并谴责称，这是在当月的 Ruisrock
                音乐节结束之后拍摄的：「我们一起蒸桑拿、游泳和共度时光，那种照片不应该被拍，聚会上没有什么特别的事情发生。」不过她确实承认这张照片「不合适」，并为此道歉。 BBC
                报道称，图中两名女子均是马林的客人。
                此前，马林曾被德国《图片报》称为世界上「最酷的政治家」。除了本次报道中的不雅照事件以外，最近她在一次聚会上跳舞、唱歌和喝酒的相关视频在网上也引起了轩然大波。不过在视频曝光之初，马林就表示：「我没有吸毒，除了喝酒，我也没有吃任何东西。我跳舞、唱歌、开派对、拥抱我的朋友…这些都是完全合法的事情。我没有什么东西需要隐瞒，并且我会坚定决心继续做自己。」
                据悉，芬兰 36 岁的总理马林于 2019
                年上台，迄今为止为世界上最年轻的总理。许多芬兰人都为马林的个人风格着迷，包括她的穿着和生活方式。然而近期马林由于个人私生活频遭曝光，露骨画面令芬兰国内外民众应接不暇，引发极大争议。总理官邸传出两名女子不雅照，芬兰女总理道歉
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>213
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549790307"
            title="芬兰女总理马林在其总理官邸传出两名女子不雅照，该事件对她的政治生涯有何影响？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pica.zhimg.com/80/v2-4769d92de3efc146db279331b1ff62ba_400x224.png" alt="芬兰女总理马林在其总理官邸传出两名女子不雅照，该事件对她的政治生涯有何影响？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">17</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/543217119"
              title="电影《隐入尘烟》里的马有铁勤劳能干、有生产资料，为什么会是全村最穷的人？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">电影《隐入尘烟》里的马有铁勤劳能干、有生产资料，为什么会是全村最穷的人？</h2>
              <p class="HotItem-excerpt">非农村出生，可能问题有点二？确实不明白，求解答~</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>197
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/543217119"
            title="电影《隐入尘烟》里的马有铁勤劳能干、有生产资料，为什么会是全村最穷的人？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/80/v2-64d1276b0e2a0e53ce4a829dc189d824_400x224.png" alt="电影《隐入尘烟》里的马有铁勤劳能干、有生产资料，为什么会是全村最穷的人？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">18</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549751687"
              title="如何评价《原神》3.0 版本最新魔神任务主线剧情？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何评价《原神》3.0 版本最新魔神任务主线剧情？</h2>
              <p class="HotItem-excerpt">请不要将问题笼统的改成对须弥主线的评价，修改还请麻烦说明一下是前两幕，3.0 未须弥主线内容未更新完全，谢谢</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>171
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549751687"
            title="如何评价《原神》3.0 版本最新魔神任务主线剧情？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/50/v2-91b406b55de31b3ee7663037ef125644_400x224.jpg" alt="如何评价《原神》3.0 版本最新魔神任务主线剧情？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">19</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549982930"
              title="2022 KPL 夏季赛武汉 eStar Pro 4:1 重庆狼队，如何评价这场比赛？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">2022 KPL 夏季赛武汉 eStar Pro 4:1 重庆狼队，如何评价这场比赛？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>156
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549982930"
            title="2022 KPL 夏季赛武汉 eStar Pro 4:1 重庆狼队，如何评价这场比赛？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/50/v2-22ee21d1426099843e31d75b77869e6a_400x224.jpg" alt="2022 KPL 夏季赛武汉 eStar Pro 4:1 重庆狼队，如何评价这场比赛？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">20</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/550017654"
              title="我国亚轨道运载器重复使用飞行试验取得圆满成功，你对此项科技有哪些期待？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">我国亚轨道运载器重复使用飞行试验取得圆满成功，你对此项科技有哪些期待？</h2>
              <p class="HotItem-excerpt">2022 年 8 月 26 日，由中国航天科技集团有限公司所属中国运载火箭技术研究院自主研制的升力式亚轨道运载器重复使用飞行试验获得圆满成功。
                飞行试验采用的运载器，经健康检测维护后，在酒泉卫星发射中心再次点火垂直起飞，按照设定程序完成亚轨道飞行，平稳水平着陆于阿拉善右旗机场，成功实现我国亚轨道运载器的首次重复使用飞行。本次飞行试验的圆满成功，有力推动了我国航天运输技术由一次性使用向重复使用的跨越式发展。
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>156
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/550017654"
            title="我国亚轨道运载器重复使用飞行试验取得圆满成功，你对此项科技有哪些期待？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/80/v2-778de340742fc3972fef75f2a32b2fbe_400x224.png" alt="我国亚轨道运载器重复使用飞行试验取得圆满成功，你对此项科技有哪些期待？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">21</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549216943"
              title="32 岁在私企每月工资一万二，还有必要考公务员吗?" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">32 岁在私企每月工资一万二，还有必要考公务员吗?</h2>
              <p class="HotItem-excerpt">32 岁，未婚，家境一般，目前在私企，12000 月薪，有必要去考公务员？有些纠结。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>155
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549216943"
            title="32 岁在私企每月工资一万二，还有必要考公务员吗?" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/50/v2-345e4f94a2dcff5ce88471d46f720734_400x224.jpg" alt="32 岁在私企每月工资一万二，还有必要考公务员吗?"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">22</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/547535589"
              title="外卖员迟到一个半小时导致我没吃到午饭，我给了差评，却被指责不懂共情，我真的错了吗?" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">外卖员迟到一个半小时导致我没吃到午饭，我给了差评，却被指责不懂共情，我真的错了吗?</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>155
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/547535589"
            title="外卖员迟到一个半小时导致我没吃到午饭，我给了差评，却被指责不懂共情，我真的错了吗?" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic2.zhimg.com/80/v2-675793d9cb64b013c9c02db1156ae078_400x224.png" alt="外卖员迟到一个半小时导致我没吃到午饭，我给了差评，却被指责不懂共情，我真的错了吗?"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">23</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549974548"
              title="芬兰总理哽咽回应丑闻「我也是人，也需要寻找快乐」，如何看待芬兰总理的热舞风波？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">芬兰总理哽咽回应丑闻「我也是人，也需要寻找快乐」，如何看待芬兰总理的热舞风波？</h2>
              <p class="HotItem-excerpt">近日，芬兰总理桑娜·马林（Sanna Marin）因「热舞视频」「官邸不雅照」陷入争议，她当地时间 24
                日含泪再次回应：「我也是人，也需要寻找快乐」。 当地时间 8 月 24 日，马林在社会民主党会议上发表讲话时哽咽。 据《卫报》报道，当地时间 24
                日，马林在社会民主党会议上讲话时对过去一周的描述是「非常艰难」。 马林坚称，作为芬兰总理她努力工作，但也应该享有私人生活。
                马林讲话时眼眶含泪、声音哽咽，仿佛要哭出来了，她表示，「我也是人」，有时也渴望「在乌云中寻找快乐、光明和乐趣」。
                她补充说，自己并未耽误任何一天的工作，「我相信人们会关注我们在工作中所做的事，而不是我们的业余生活」。
                马林强调，自己没有也不会留下未完成的任务，「直到现在这一刻，我都一直在做好自己的工作。我正在考虑乌克兰，我正在考虑你们，我正在做我的工作」。
                据此前报道，上周，马林与朋友在派对上狂欢热舞的视频泄露，视频背景音中还疑似提到毒品，掀起轩然大波。
                在视频泄露后，马林承认自己喝过酒，但坚决否认吸毒，并表示，没有看到参加派对的任何人吸毒。芬兰总理办公室当地时间 22 日透露，马林的药检结果呈阴性。
                然而「热舞视频」风波还未过去，马林又因一张拍摄于总理官邸的不雅照片陷入麻烦。当地时间 23
                日，马林承认照片属实，并为此道歉。她说：「这种照片本不该拍摄出来，但除此之外，聚会上没有发生其他特别的事情。」
                《卫报》报道称，当被问及是否会改变自己的行为时，马林表示，她个人认为「政客也有空闲时间，和我们的朋友一起度过没有任何问题」。
                反对者称马林这种行为是「不恰当的」，并表示，她对身边的朋友缺乏判断力，泄露照片和视频可能会使她受到批评甚至敲诈。但有许多人捍卫她参加派对的权利。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>155
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549974548"
            title="芬兰总理哽咽回应丑闻「我也是人，也需要寻找快乐」，如何看待芬兰总理的热舞风波？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic2.zhimg.com/80/v2-48ae330c7880b3d2c39d1e2c91ab457e_400x224.png" alt="芬兰总理哽咽回应丑闻「我也是人，也需要寻找快乐」，如何看待芬兰总理的热舞风波？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">24</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549630500"
              title="长春航展开幕，歼 -20 、运 -20 亮相，你觉得长春航展与珠海航展有哪些不同？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">长春航展开幕，歼 -20 、运 -20 亮相，你觉得长春航展与珠海航展有哪些不同？</h2>
              <p class="HotItem-excerpt">长春航展开幕，歼 -20 、运 -20 、歼 -16 都会亮相。而且今年的珠海航展也会如期举行，大家觉得长春航展与珠海航展有哪些不同？</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>155
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549630500"
            title="长春航展开幕，歼 -20 、运 -20 亮相，你觉得长春航展与珠海航展有哪些不同？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-306edc3ac5b826766bcb6e0f6a1767ce_400x224.jpg?source=1940ef5c" alt="长春航展开幕，歼 -20 、运 -20 亮相，你觉得长春航展与珠海航展有哪些不同？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">25</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/550039643"
              title="南京女大学生被害案 8 月 26 日二审，女生父亲称「拒绝一切赔偿只求维持死刑」，二审改判可能性大吗？" target="_blank"
              rel="noopener noreferrer" data-za-not-track-link="true">
              <h2 class="HotItem-title">南京女大学生被害案 8 月 26 日二审，女生父亲称「拒绝一切赔偿只求维持死刑」，二审改判可能性大吗？</h2>
              <p class="HotItem-excerpt">8 月 26 日，南京女大学生李某月被害案在西双版纳中级人民法院二审。此前，3 名被告洪峤、张晨光、曹泽青在 7 月 7
                日一审被判处死刑，其中洪峤数罪并罚被决定执行死刑，张晨光、曹泽青被判处死刑缓期二年执行，三人均提出上诉。
                李某月父亲李胜介绍，女儿已被带回老家安葬，妻子至今未能走出阴影，几乎完全不与外人交流，时常情绪奔溃；他反复告诉自己要坚强，到处在奔走，但夜深人静的时候总是躲在阳台抽烟、流泪。李胜说，为了避免睹物思人，女儿的衣服全部被捐出，照片全部随着下葬，家里没敢留一件纪念物。他说洪峤一审时否认所有指控，并申请精神鉴定，他拒绝了一切赔偿只要求维持死刑。南京女大学生被害案二审
                女生父亲：9 天后是她生日 希望维持原判</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>154
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/550039643"
            title="南京女大学生被害案 8 月 26 日二审，女生父亲称「拒绝一切赔偿只求维持死刑」，二审改判可能性大吗？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-dd094db11de8739a7b6e8f7e09d87d36_400x224.png" alt="南京女大学生被害案 8 月 26 日二审，女生父亲称「拒绝一切赔偿只求维持死刑」，二审改判可能性大吗？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">26</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549949734"
              title="生活中有哪些让幸福值瞬间拉满的健康小神器？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">生活中有哪些让幸福值瞬间拉满的健康小神器？</h2>
              <p class="HotItem-excerpt">
                健康安心的生活才是幸福的起点，这背后有时候还需要得益于一些居家健康小神器的助力，既能够守护我们的健康还能瞬间提高生活幸福感。不知道大家都入了什么值得推荐的健康神器呢？又给生活带来了怎样的幸福感的提升？欢迎大家来分享自己的幸福故事～
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>107
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549949734" title="生活中有哪些让幸福值瞬间拉满的健康小神器？"
            target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/50/v2-3d5f94a5fee5931b345f19f4d574371d_400x224.jpg" alt="生活中有哪些让幸福值瞬间拉满的健康小神器？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">27</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549881530"
              title="金铲铲之战一周年了，分享下你遇到过的神级阵容和操作？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">金铲铲之战一周年了，分享下你遇到过的神级阵容和操作？</h2>
              <p class="HotItem-excerpt">
                金铲铲之战已经陪伴我们一年了，在过去的不同版本中，时有令人惊艳的阵容和操作出现。大家遇到过的神级阵容，是在时空裂缝里重回三星亚索，还是九剑下天山？又或是在巨龙之巢里养出三星奶妈？在「弈」周年之际，诚邀大家一起分享神级阵容和操作，各位大佬也可以讲讲自己的运营思路，分享真知灼见。脑力博弈，好运常在！
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>105
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549881530"
            title="金铲铲之战一周年了，分享下你遇到过的神级阵容和操作？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/50/v2-203e309423a04ca5dbcc0119419d631e_400x224.jpg" alt="金铲铲之战一周年了，分享下你遇到过的神级阵容和操作？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">28</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549662320"
              title="国产少女漫画《怦然心动》完结，如何评价这部作品?" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">国产少女漫画《怦然心动》完结，如何评价这部作品?</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>103
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549662320"
            title="国产少女漫画《怦然心动》完结，如何评价这部作品?" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/50/v2-a18e4cd2da5ac69ebbf02205ece54f36_400x224.jpg" alt="国产少女漫画《怦然心动》完结，如何评价这部作品?"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">29</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549754907"
              title="Q2 中国高端智能手机份额排行出炉：苹果占比 46% 稳居第一，华为依然跻身前三，对此你如何看待？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">Q2 中国高端智能手机份额排行出炉：苹果占比 46% 稳居第一，华为依然跻身前三，对此你如何看待？</h2>
              <p class="HotItem-excerpt">8 月 24 日消息，今日，Counterpoint Research 发布报告称，中国高端智能手机市场（批发价 400 美元约合人民币 2750
                元及以上）的销量份额从 2021 年第二季度的 31% 微升至 2022 年第二季度的 33%。 IT 之家了解到，报告指出，与整体市场的 14%
                同比下降相比，高端市场的销量（包括准高端、高端和旗舰高端细分市场）仅下降了 10%。600-799 美元的高端（约合人民币 4100-5470 元）和 1000
                美元及以上的旗舰高端（约合人民币 6850 元）的细分市场在 2022 年第二季度均录得增长。 数据显示，2022 年第二季度中国高端智能手机份额前六位分别为苹果（46%）、
                vivo（13%）、华为（11%）、荣耀（ 9%）、小米（ 8%）、 OPPO（ 8%）。 Counterpoint 表示，2022 年第二季度，前六大 OEM 占据了整个高端市场 95%
                的份额。与此同时，vivo 销量同比增长 91%，取代了华为首次在中国高端市场占据第二位。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>100
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549754907"
            title="Q2 中国高端智能手机份额排行出炉：苹果占比 46% 稳居第一，华为依然跻身前三，对此你如何看待？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic2.zhimg.com/50/v2-e0822b0f61016908e17533f26090adab_400x224.jpg" alt="Q2 中国高端智能手机份额排行出炉：苹果占比 46% 稳居第一，华为依然跻身前三，对此你如何看待？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">30</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549102585"
              title="为什么老龄化严重的日本，文化产品的题材却十分青少年化？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">为什么老龄化严重的日本，文化产品的题材却十分青少年化？</h2>
              <p class="HotItem-excerpt">比如日本 ACG
                产品，大量以青少年和幼态外表的角色为主角。对比别国的文化产业和产品（好莱坞，宝莱坞，英剧，韩剧，音乐，主播，偶像，网文，时装，奢侈品······），从题材与受众的针对性来看，很容易产生问题里这种感觉
                附：各国中位数年龄</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>89
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549102585"
            title="为什么老龄化严重的日本，文化产品的题材却十分青少年化？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-39999e2b6066a275a9fe4550b5985ea3_400x224.gif" alt="为什么老龄化严重的日本，文化产品的题材却十分青少年化？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">31</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/550073179"
              title="如何看待 00 后男同事因「失恋快死掉了」请假 0.5 天这件事？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何看待 00 后男同事因「失恋快死掉了」请假 0.5 天这件事？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>87
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/550073179"
            title="如何看待 00 后男同事因「失恋快死掉了」请假 0.5 天这件事？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/80/v2-5278ff01cbd5bdea7a2b24612cbbf98e_400x224.png" alt="如何看待 00 后男同事因「失恋快死掉了」请假 0.5 天这件事？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">32</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/482967292"
              title="程序员兄弟们生涯中写过最大的 bug 是什么？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">程序员兄弟们生涯中写过最大的 bug 是什么？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>84
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/482967292" title="程序员兄弟们生涯中写过最大的 bug 是什么？"
            target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/80/v2-3e19cfdfe2d7340383cb61135de45f67_400x224.jpg?source=1940ef5c" alt="程序员兄弟们生涯中写过最大的 bug 是什么？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">33</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549684718" title="哪些细节设计能让汽车更接近艺术品？"
              target="_blank" rel="noopener noreferrer" data-za-not-track-link="true">
              <h2 class="HotItem-title">哪些细节设计能让汽车更接近艺术品？</h2>
              <p class="HotItem-excerpt">
                历史上，出现过无数的汽车车型。但只有极少数汽车超越了交通工具的属性，成为了人们心中无与伦比的艺术品。那些被称为艺术品的汽车都有哪些特征？究竟是哪些设计细节助力它们突破了汽车的上限？</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>82
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549684718" title="哪些细节设计能让汽车更接近艺术品？"
            target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/50/v2-2e1ce6034a58b4aae80d150ace9701ee_400x224.jpg" alt="哪些细节设计能让汽车更接近艺术品？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">34</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549927722" title="有哪些人生必看的影视剧 / 书籍？"
              target="_blank" rel="noopener noreferrer" data-za-not-track-link="true">
              <h2 class="HotItem-title">有哪些人生必看的影视剧 / 书籍？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>81
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549927722" title="有哪些人生必看的影视剧 / 书籍？"
            target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic4.zhimg.com/50/v2-f9368ee5d6062d104026197e40a25781_400x224.jpg" alt="有哪些人生必看的影视剧 / 书籍？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">35</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549774832"
              title="如何看待报告称欧洲可能正经历 500 年来最严重的干旱？情况有这么严重吗？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何看待报告称欧洲可能正经历 500 年来最严重的干旱？情况有这么严重吗？</h2>
              <p class="HotItem-excerpt">欧盟 23 日发布最新旱情报告，显示今年 8 月欧盟及英国旱情加剧，总计 64% 的领土受干旱波及，处于「干旱预警」或「干旱警告」状态。
                当日欧盟委员会联合研究中心发布「2022 年 8 月欧洲旱情报告」，指出 8 月欧洲多地旱情严峻，欧盟及英国 47% 的领土处于「干旱预警」状态，即降雨量较往年偏少，土壤含水量不足；17%
                的领土处于「干旱警告」状态，即旱情已对植被和农作物产生负面影响。 报告预计，尽管近日欧洲一些地区出现降雨，当地旱情得以缓解，但直到今年 11
                月，西欧—地中海地区气温可能较往年偏高，气候更加干燥；整体而言，欧盟委员会联合研究中心初步评估今年欧洲旱情或为「500 年一遇」。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>81
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549774832"
            title="如何看待报告称欧洲可能正经历 500 年来最严重的干旱？情况有这么严重吗？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic1.zhimg.com/80/v2-3289e3f12ba363e3f0c922b676838adb_400x224.png" alt="如何看待报告称欧洲可能正经历 500 年来最严重的干旱？情况有这么严重吗？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">36</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549624481"
              title="黑猫警长邮票即将发行，是你的童年吗？你会去收藏吗？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">黑猫警长邮票即将发行，是你的童年吗？你会去收藏吗？</h2>
              <p class="HotItem-excerpt">中国邮政定于 9 月 3 日发行《动画——黑猫警长》特种邮票。邮票一套 5 枚，计划发行 630 万套，全套邮票面值 5.20
                元。这套邮票表现了动画中制服强盗、捉捕恶鹰、保卫家园、并肩作战、大获全胜的故事情节。你最喜欢哪一款？ （来源：央视新闻微博）</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>81
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549624481"
            title="黑猫警长邮票即将发行，是你的童年吗？你会去收藏吗？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pica.zhimg.com/80/v2-d3f55b820e2c1c56d55ea94ce12addef_400x224.png" alt="黑猫警长邮票即将发行，是你的童年吗？你会去收藏吗？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">37</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549978424"
              title="俄罗斯防长称「俄军放慢进攻速度是有意为之，为尽量减少平民伤亡」，对此你怎么看？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">俄罗斯防长称「俄军放慢进攻速度是有意为之，为尽量减少平民伤亡」，对此你怎么看？</h2>
              <p class="HotItem-excerpt">今年 2 月 24 日，俄罗斯总统普京宣布俄军在乌克兰东部顿巴斯地区展开「特别军事行动」。到如今，这场俄乌冲突已经持续了半年时间。 当地时间 8
                月 24
                日，俄罗斯国防部长绍伊古在参加上海合作组织国防部长会议时表示，俄军在乌克兰展开「特别军事行动」期间放慢进攻速度是一个「有意识的决定」，这是出于尽量减少平民伤亡的目的，但乌军在此期间却使用「焦土战术」，公然违反国际准则。
                他还表示，俄乌冲突让美西方国家从战略上遏制俄罗斯找到了借口，尽管俄方作出了努力，但西方却忽视俄罗斯关切的根本性问题，这也让这场冲突就此发生，乌克兰沦为西方的「战争工具」。
                据俄新社报道，绍伊古在当天的会议上说：「在特别行动中，我们严格遵守人道主义准则，所采取的打击是使用高精度武器针对乌克兰武装部队的军事基础设施目标——指挥所、机场、仓库、防御区域、军工综合体设施。」
                「同时，我们尽一切努力避免平民伤亡。这无疑减缓了进攻的速度，但我们是‘有意识这样做的’。」绍伊古指出，俄军在「解放区」开展了系统性工作，以在那里建立和平稳定的生活。「我们提供了人道主义援助，重建基础设施和生命支援系统。」
                绍伊古表示，与之相反的是，乌克兰军队却使用了「焦土战术」，公然违反国际准则，充当了恐怖分子的角色。他说：「他们把居民区、学校、医院和幼儿园当作火力阵地，在那里部署坦克和火炮，以居民作为人盾。他们还有针对性地炮击居民区并布置地雷，显然是为了尽可能多地伤害平民和基础设施。」
                据塔斯社报道，在谈及这场已经持续六个月的俄乌冲突时，绍伊古认为，这场冲突成为了美国及其盟友对俄罗斯发动经济战和信息战的又一个借口。
                「今天对俄罗斯发动的严厉制裁和信息战，俄乌冲突只是又一个借口，美国及其同伙的既定目标是从战略上消耗俄罗斯，以消除竞争态势，并警告其他奉行独立自主外交政策的国家。」
                绍伊古指出，俄罗斯为在全新条件下建立欧洲稳定的法律基础作出了重大努力，然而以美国为首的西方国家却拒绝考虑俄方对于相互之间安全保障的担忧，首当其冲的就是乌克兰的中立地位问题。
                他表示，对于俄方而言的根本问题——北约不再东扩、北约不部署进攻性武器以及北约不在俄罗斯边境附近开展军事活动，这些都被西方忽视了，而乌克兰则被西方选为对俄发动混合战争的工具。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>81
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549978424"
            title="俄罗斯防长称「俄军放慢进攻速度是有意为之，为尽量减少平民伤亡」，对此你怎么看？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/80/v2-169dd113abd0193819efae3ed1059ec3_400x224.png" alt="俄罗斯防长称「俄军放慢进攻速度是有意为之，为尽量减少平民伤亡」，对此你怎么看？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">38</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549626219"
              title="如何看待民警抓捕现场遇涉毒嫌疑人的孩子，收起手铐，演绎「善意的谎言」？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何看待民警抓捕现场遇涉毒嫌疑人的孩子，收起手铐，演绎「善意的谎言」？</h2>
              <p class="HotItem-excerpt">8 月 17
                日，云南红河移民管理警察抓捕一名涉嫌吸毒人员张某时，现场张某的女儿突然出现，民警立刻悄悄收起手铐。担心女孩看出破绽，在送女孩回家路上，民警说用善意的谎言保护女孩。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>81
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549626219"
            title="如何看待民警抓捕现场遇涉毒嫌疑人的孩子，收起手铐，演绎「善意的谎言」？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://picx.zhimg.com/80/v2-23e92f03e10db8476d15c08ada51d7d6_400x224.png" alt="如何看待民警抓捕现场遇涉毒嫌疑人的孩子，收起手铐，演绎「善意的谎言」？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">39</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549744074"
              title="除了公考上岸，还有哪些发展前景广，福利待遇好的行业？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">除了公考上岸，还有哪些发展前景广，福利待遇好的行业？</h2>
              <p class="HotItem-excerpt">公考以外，还有哪些发展前景广，福利待遇好的行业？大家都在观望哪些城市的机会？</p>
            </a>
            <div class="HotItem-metrics"><svg width="18" height="18" viewBox="0 0 24 24" data-new-api="FireFill24"
                data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776" fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>81
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">40</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549343141"
              title="哪四队最有可能代表 LPL 前往 S12 世界赛？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">哪四队最有可能代表 LPL 前往 S12 世界赛？</h2>
              <p class="HotItem-excerpt">RNG 目前积分为 130，想进入世界赛需要 ［ TES 拿夏冠、 EDG 亚军且 V5 排名非前三。］
                如果打冒泡赛也会有胜者组跟败者组里出发，败者组出发需要 ［ EDG 冠军、 JDG 亚军、 V5 季军、 TES 殿军。］ TES 只要拿到前二都能进世界赛，拿到第三只要亚军不是 V5
                也能进。 但如果 TES 第四还想保送世界赛，那必须 EDG 亚军、 V5 不是第三才能保送。 保底是冒泡赛胜者组。 V5 拿到亚军就有世界赛名额。 拿到第三名只要亚军是
                EDG，也有世界赛名额。 果没有同时达成 EDG 冠军、 JDG 亚军、 TES 第四名，那么 V5 会从冒泡赛胜组开始打。 如果季后赛没拿到前三，保底有冒泡赛败者组能打。 EDG EDG
                只要拿到第二，只要 TES 不是第四，EDG 将从冒泡赛胜者组出发。 EDG 如果拿到第三，第四名必须是 LNG 或 JDG，EDG 才会从冒泡赛胜者组出发。 EDG
                如果拿到第四，就只能从冒泡赛败者组开始打。 JDG 想保送必须拿到第二名以及 TES 是第四名，就能依靠积分保送。 JDG 只要拿到第二就有冒泡赛胜者组。如果第三只要 TES
                不要第四，也是胜者组。 如果 JDG 拿到第四名，冒泡赛败者组。 LNG 想通过积分保送，必须最少拿到亚军，且冠军为 TES，其他组合都没办法。不过虽然不能保送，但保底会有冒泡赛胜者组。
                如果拿到第三只要第四名不是 TES，冒泡赛胜者组开始打。 如果没有前三得打冒泡赛败者组。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>80
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549343141"
            title="哪四队最有可能代表 LPL 前往 S12 世界赛？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic2.zhimg.com/50/v2-f0ed5b2b59a5333c77ef9c0f4de8eb57_400x224.jpg" alt="哪四队最有可能代表 LPL 前往 S12 世界赛？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">41</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/550066451"
              title="拜登签署实施芯片法行政令，中方此前已明确表示坚决反对，该法案出台后将产生怎样的影响？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">拜登签署实施芯片法行政令，中方此前已明确表示坚决反对，该法案出台后将产生怎样的影响？</h2>
              <p class="HotItem-excerpt">当地时间 8 月 25 日，美国总统拜登签署一项旨在实施《2022
                年芯片和科学法案》的行政命令。关于该法案，中国外交部、商务部此前已明确表示，中方坚决反对扰乱国际贸易。 根据白宫网站，拜登 25 日签署的行政令设置了实施《芯片和科学法案》的 6
                个优先事项，还设立了一个由 16 人组成的跨部门指导委员会，由美国总统国家安全事务助理沙利文等 3 人共同担任主席，其他成员包括美国国务卿布林肯、财长耶伦、防长奥斯汀以及商务部长雷蒙多等。
                就在十几天前，拜登 8 月 9
                日将《芯片和科学法案》签署成法律，他当时在法案签署仪式上的讲话中多次明确提到中国。该法案向在美国的芯片制造企业提供巨额补贴的同时，要求这些企业必须同意「不在中国发展精密芯片的制造」。
                对此，中国外交部发言人汪文斌 10
                日斥责，美国这个法案宣称旨在提升美科技和芯片业竞争力，但却对美国本土芯片产业提供巨额补贴，推行差异化产业扶持政策，包含一些限制有关企业在华正常投资与经贸活动、中美正常科技合作的条款，将对全球半导体供应链造成扭曲，对国际贸易造成扰乱，中方对此表示坚决反对。该法所谓「保护措施」，呈现出浓厚的地缘政治色彩，是美国大搞经济胁迫的又一例证。
                中国商务部新闻发言人束珏婷 18
                日表示，美方出台《芯片和科学法案》，对美本土芯片产业提供巨额补贴和税收优惠，是典型的差异化产业扶持政策。其中部分条款限制有关企业在华正常经贸与投资活动，具有明显的歧视性，严重违背了市场规律和国际经贸规则，将对全球半导体供应链造成扭曲，对国际贸易造成扰乱。中方对此坚决反对。美方法案的实施应符合世贸组织相关规则，符合公开、透明、非歧视的原则，有利于维护全球产业链供应链安全稳定，避免碎片化。中方将继续关注法案的实施情况，必要时采取有力措施维护自身合法权益。
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>77
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/550066451"
            title="拜登签署实施芯片法行政令，中方此前已明确表示坚决反对，该法案出台后将产生怎样的影响？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/50/v2-f74eb805480bcb25a2471b6b5dcdaae7_400x224.jpg" alt="拜登签署实施芯片法行政令，中方此前已明确表示坚决反对，该法案出台后将产生怎样的影响？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">42</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549886348"
              title="平常在网购时应该注意哪些问题？有哪些需要避坑的地方？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">平常在网购时应该注意哪些问题？有哪些需要避坑的地方？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>72
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549886348"
            title="平常在网购时应该注意哪些问题？有哪些需要避坑的地方？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/50/v2-a6e5467d0941021e2865440d9db7b5e3_400x224.jpg" alt="平常在网购时应该注意哪些问题？有哪些需要避坑的地方？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">43</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549950053"
              title="如何看待「荣耀平板是华为平板的平替」这种言论，说法正确吗？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何看待「荣耀平板是华为平板的平替」这种言论，说法正确吗？</h2>
              <p class="HotItem-excerpt">刷视频看到不少博主说荣耀平板是华为平板的平替，预算不够买不了华为可以买荣耀平板试试，两者生态很接近，这种言论正确吗？华为和荣耀平板有哪些值得购买？
              </p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>71
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549950053"
            title="如何看待「荣耀平板是华为平板的平替」这种言论，说法正确吗？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/50/v2-01e2aeca94496be9fd9a3135c5e389e7_400x224.jpg" alt="如何看待「荣耀平板是华为平板的平替」这种言论，说法正确吗？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">44</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549966820"
              title="「金三银四」消失了，「金九银十」还有什么好的就业建议？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">「金三银四」消失了，「金九银十」还有什么好的就业建议？</h2>
            </a>
            <div class="HotItem-metrics"><svg width="18" height="18" viewBox="0 0 24 24" data-new-api="FireFill24"
                data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776" fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>70
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">45</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549968800"
              title="如何看待清华大学未来实验室「脑机绘梦」系统造物节首秀引热议，该技术有哪些想象空间和应用前景？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何看待清华大学未来实验室「脑机绘梦」系统造物节首秀引热议，该技术有哪些想象空间和应用前景？</h2>
              <p class="HotItem-excerpt">8 月 25
                日，一台清华大学未来实验室最新研究的「脑机绘梦」装置在造物节首发，这台装置可自动捕捉记录人的脑电波数值，并根据脑电数据生成一幅抽象的画。
                「脑机绘梦」装置引来了雨果奖得主郝景芳前来现场一探究竟。郝景芳指着「脑机绘梦」生成的抽象画兴奋地表示，画面与她当时的心境有相通之处，「我自由翱翔在繁星点点的夜空下，下面是未来世界，人与自然、科技和谐相处。」
                清华大学未来实验室主任徐迎庆解释，「脑机绘梦」系统是把这些脑电信号变成一个个绘画元素，生成一幅抽象画。当然，系统无法捕捉梦境或者人的思绪的具体内容。
                据介绍，如果是好梦，「脑机绘梦」系统会生成色调明快、温暖的画面；如果是噩梦，生成的画面色调则偏冷偏暗，沉稳而幽静。
                「脑机绘梦」系统由清华大学未来实验室的陈赟冰博士领衔研发，项目组的成员普遍比较年轻，学科背景也很多元，以计算机、脑科学、艺术设计等专业为主。陈赟冰介绍，目前系统内有十几种风格的抽象画作，这些画作有借鉴中西方大师的作品风格，也有自主艺术设计的创作。清华大学「脑机绘梦」系统亮相造物节
                科幻作家现场实测</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>69
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549968800"
            title="如何看待清华大学未来实验室「脑机绘梦」系统造物节首秀引热议，该技术有哪些想象空间和应用前景？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic3.zhimg.com/50/v2-2662b0387bb73e138d058a7e0c2df1f8_400x224.jpg" alt="如何看待清华大学未来实验室「脑机绘梦」系统造物节首秀引热议，该技术有哪些想象空间和应用前景？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">46</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/400685460"
              title="为什么随着生产力的发展进步，人性本质却没有多大改变？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">为什么随着生产力的发展进步，人性本质却没有多大改变？</h2>
              <p class="HotItem-excerpt">人类的行为似乎从原始社会就被锁定，尽管生产方式、生活方式、道德观念不断发展，它的外在形式发生了改变，本质却变化不大。</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>67
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/400685460"
            title="为什么随着生产力的发展进步，人性本质却没有多大改变？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://picb.zhimg.com/50/v2-cb5e24d8d222db8ff1c5c86f14a321e8_400x224.jpg" alt="为什么随着生产力的发展进步，人性本质却没有多大改变？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">47</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549932127"
              title="如何看待数据显示「100 万 00 后开网店创业」，当代年轻人的择业观念发生了哪些变化？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">如何看待数据显示「100 万 00 后开网店创业」，当代年轻人的择业观念发生了哪些变化？</h2>
              <p class="HotItem-excerpt">今年第一批 00 后走出校园，走进职场。00 后逐渐成为当下职场的新兴血液和澎湃力量，在更新换代之下，00
                后们对于职场一些新的观念和态度，渐渐引起了广大关注。 不同于老一辈按部就班的去公司上班，在职业选择上，00 后则表现得更加开放，据中国青年报调研数据显示，有 88.1% 的 00
                后愿意尝试或正在灵活就业，九成 00 后正在发展或尝试做副业。00 后也渐渐成为当下创业的主力军。 清华经管学院与阿里研究院数据显示，淘宝 00 后商家数已接近 100 万。相当于每 10
                个商家就有一个 00 后。00 后倾向于把自己的各种小兴趣爱好，与工作结合，寻找创业土壤。 数据显示，过去两年，淘宝天猫新增了 2100 多个实物商品叶子类目，并从中产生了超过 100
                条过亿新赛道。而这些新赛道更多都是由 00 后为代表的年轻一代创造出来的。每 80 个年轻人就有 1 人在淘宝创业！00 后商家数已近 100 万 如何看待 100 万 00
                后开网店创业，为何 00 后不爱给老板打工？相比起 80 后、 90 后创业者，00 后创业群体有哪些特点？</p>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>67
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549932127"
            title="如何看待数据显示「100 万 00 后开网店创业」，当代年轻人的择业观念发生了哪些变化？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic2.zhimg.com/50/v2-5f7a59ea477028ecc410f4956e162606_400x224.jpg" alt="如何看待数据显示「100 万 00 后开网店创业」，当代年轻人的择业观念发生了哪些变化？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">48</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549958222"
              title="2022 年量子开发者大会开幕，国内量子计算行业应用技术发展到什么水平了？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">2022 年量子开发者大会开幕，国内量子计算行业应用技术发展到什么水平了？</h2>
              <p class="HotItem-excerpt">「量见未来」量子开发者大会 8 月 25 日在北京举办，政府部门、院士、专家、企业与会人士共同探讨量子计算未来发展。
                这次大会有什么现实意义？我国量子计算行业目前的发展趋势如何？</p>
            </a>
            <div class="HotItem-metrics"><svg width="18" height="18" viewBox="0 0 24 24" data-new-api="FireFill24"
                data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776" fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>65
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">49</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/436793124" title="皮肤修护能力不好跟熬夜有关吗？"
              target="_blank" rel="noopener noreferrer" data-za-not-track-link="true">
              <h2 class="HotItem-title">皮肤修护能力不好跟熬夜有关吗？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>65
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/436793124" title="皮肤修护能力不好跟熬夜有关吗？"
            target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic2.zhimg.com/50/v2-244606e75997f33f4d520aac791cc70f_400x224.jpg" alt="皮肤修护能力不好跟熬夜有关吗？"/></a>
        </section>
        <section class="HotItem" tabindex="0">
          <div class="HotItem-index">
            <div class="HotItem-rank">50</div>
            <div class="HotItem-label" style="background-color:#FF9607">新</div>
          </div>
          <div class="HotItem-content"><a href="https://www.zhihu.com/question/549839296"
              title="8 月 24 日晚 kpl 夏季赛苏州 KSG 对战北京 WB，KSG 被零封，你怎么看待这场比赛？" target="_blank" rel="noopener noreferrer"
              data-za-not-track-link="true">
              <h2 class="HotItem-title">8 月 24 日晚 kpl 夏季赛苏州 KSG 对战北京 WB，KSG 被零封，你怎么看待这场比赛？</h2>
            </a>
            <div class="HotItem-metrics HotItem-metrics--bottom"><svg width="18" height="18" viewBox="0 0 24 24"
                data-new-api="FireFill24" data-old-api="FireFill24" class="ZDI ZDI--FireFill24 css-15ro776"
                fill="currentColor">
                <path
                  d="M14.602 21.118a8.89 8.89 0 003.72-2.232 8.85 8.85 0 002.618-6.31c0-.928-.14-1.836-.418-2.697a8.093 8.093 0 00-1.204-2.356s.025.035-.045-.055-.1-.115-.1-.115c-.955-1.078-1.504-1.984-1.726-2.854-.06-.232-.138-.88-.22-1.824L17.171 2l-.681.02c-.654.018-1.089.049-1.366.096a7.212 7.212 0 00-3.77 1.863 6.728 6.728 0 00-1.993 3.544l-.088.431-.182-.4a5.032 5.032 0 01-.326-.946 71.054 71.054 0 01-.204-.916l-.199-.909-.833.42c-.52.263-.862.462-1.076.624a8.588 8.588 0 00-2.5 2.976 8.211 8.211 0 00-.888 3.723 8.93 8.93 0 002.616 6.35 8.87 8.87 0 003.093 2.027c-.919-.74-1.593-1.799-1.76-3.051-.186-.703.05-2.352.849-2.79 0 1.938 2.202 3.198 4.131 2.62 2.07-.62 3.07-2.182 2.773-5.688 1.245 1.402 1.65 2.562 1.838 3.264.603 2.269-.357 4.606-2.003 5.86z"
                  fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>63
              万热度<span class="HotItem-action"><div class="Popover ShareMenu"><div class="ShareMenu-toggler" id="null-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="null-content"><button type="button" class="Button Button--plain Button--withIcon Button--withLabel"><span style="display:inline-flex;align-items:center">​<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" data-new-api="PaperplaneFill24" data-old-api="Share" class="Zi Zi--Share Button-zi" fill="currentColor"><path d="M19.47 1.914a.8.8 0 011.204.778l-1.872 16.386a.9.9 0 01-1.204.743l-4.615-1.692a.7.7 0 00-.831.28l-1.927 3.02c-.43.674-1.474.369-1.474-.43v-3.865a.8.8 0 01.179-.504l5.808-7.148a.595.595 0 00-.897-.781l-5.93 6.354a1.1 1.1 0 01-1.258.252L2.57 13.46a.8.8 0 01-.08-1.415l16.98-10.13z"></path></svg></span>分享</button>
            </div>
          </div></span></div>
          </div><a class="HotItem-img" href="https://www.zhihu.com/question/549839296"
            title="8 月 24 日晚 kpl 夏季赛苏州 KSG 对战北京 WB，KSG 被零封，你怎么看待这场比赛？" target="_blank" rel="noopener noreferrer"
            data-za-not-track-link="true"><img loading="lazy" src="https://pic4.zhimg.com/50/v2-2b36601bd17c80a2c500af578a58df4d_400x224.jpg" alt="8 月 24 日晚 kpl 夏季赛苏州 KSG 对战北京 WB，KSG 被零封，你怎么看待这场比赛？"/></a>
        </section>
        </div>
        <div class="HotList-end">没有更多内容</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="GlobalSideBar">
          <div>
            <div class="Sticky">
              <div class="Card GlobalSideBar-category" role="complementary" aria-label="分类入口">
                <ul class="GlobalSideBar-categoryList">
                  <li class="GlobalSideBar-categoryItem"><a href="/lives" target="_blank" title="Live"
                      style="color:#ffcf00" data-za-not-track-link="true" type="button"
                      class="Button Button--plain"><span class="GlobalSideBar-categoryIcon"><svg width="24" height="24" viewBox="0 0 24 24" data-new-api="Live24" data-old-api="Live" class="Zi Zi--Live" fill="currentColor"><path d="M13.693 10.354l1.634-7.542c.195-.901-.16-1.083-.798-.39l-9.18 9.97c-.638.693-.377 1.254.582 1.254h5.376l-1.634 7.542c-.195.901.16 1.083.798.39l9.18-9.97c.638-.693.377-1.254-.582-1.254h-5.376z"></path></svg></span><span class="GlobalSideBar-categoryLabel">Live</span></a>
                  </li>
                  <li class="GlobalSideBar-categoryItem"><a href="/pub/" target="_blank" title="书店"
                      style="color:#43d480" data-za-not-track-link="true" type="button"
                      class="Button Button--plain"><span class="GlobalSideBar-categoryIcon"><svg width="24" height="24" viewBox="0 0 24 24" data-new-api="Ebook24" data-old-api="Ebook" class="Zi Zi--Ebook" fill="currentColor"><path d="M16 17.649V2.931a.92.92 0 00-.044-.283.943.943 0 00-1.183-.604L4.655 5.235A.932.932 0 004 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 00-.941-.931h-.773v12.834a.935.935 0 01-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 00.653-.886z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span><span class="GlobalSideBar-categoryLabel">书店</span></a>
                  </li>
                  <li class="GlobalSideBar-categoryItem"><a href="/roundtable" target="_blank" title="圆桌"
                      style="color:#0066FF" data-za-not-track-link="true" type="button"
                      class="Button Button--plain"><span class="GlobalSideBar-categoryIcon"><svg width="24" height="24" viewBox="0 0 24 24" data-new-api="Org24" data-old-api="Org" class="Zi Zi--Org" fill="currentColor"><path d="M10.786 8.41a8.938 8.938 0 00-3.968-2.528c-.305-1.719.814-3.337 2.442-3.741 1.221-.405 2.646.101 3.46 1.011 1.045 1.38.915 3.64.814 4.348-.102 1.315-1.221 3.034-1.323 3.135-.305-.809-.814-1.517-1.425-2.225zm-2.442 2.832c-1.526.202-3.052 1.01-4.171 2.123-1.12-.404-1.934-1.314-2.137-2.427-.316-2.427 1.526-3.64 2.849-3.842 1.628-.372 2.849.505 4.07 1.415 1.146 1.012 2.035 2.63 2.035 2.73-.916-.202-1.832-.1-2.646 0zm4.986.303c.509-.607.931-1.585 1.12-2.225.318-1.039.61-3.134.203-4.651 1.323-1.011 3.154-1.011 4.477.303 1.235 1.146 1.018 2.933.814 3.438-.663 1.581-1.933 2.326-3.256 2.832-1.221.404-3.256.303-3.358.303zm-2.645 1.011c-.51.607-.916 1.416-1.221 2.326-.407 1.314-.643 3.06-.102 4.55-1.323 1.011-3.256 1.011-4.477-.202-1.198-1.124-1.018-2.933-.814-3.438.599-1.605 1.933-2.326 3.256-2.831.916-.304 3.256-.405 3.358-.405zm9.259-1.82c1.018.404 1.933 1.315 2.035 2.427.233 2.57-1.526 3.64-2.849 3.842-1.526 0-2.85-.505-4.07-1.415-1.018-.81-2.035-2.528-2.035-2.63.916.203 1.831.102 2.645 0 1.628-.404 3.053-1.112 4.274-2.224zm-6.716 4.854c1.065 1.08 2.442 2.022 4.07 2.528.306 1.719-.814 3.235-2.442 3.741-1.22.404-2.645-.101-3.46-1.011-1.1-1.481-1.017-3.54-.915-4.247.102-1.315 1.221-3.034 1.323-3.135.305.708.721 1.44 1.424 2.124z"></path></svg></span><span class="GlobalSideBar-categoryLabel">圆桌</span></a>
                  </li>
                  <li class="GlobalSideBar-categoryItem"><a href="//zhuanlan.zhihu.com" target="_blank"
                      title="专栏" style="color:#0f88eb" data-za-not-track-link="true" type="button"
                      class="Button Button--plain"><span class="GlobalSideBar-categoryIcon"><svg width="24" height="24" viewBox="0 0 24 24" data-new-api="PencilFill24" data-old-api="Edit" class="Zi Zi--Edit" fill="currentColor"><path d="M7.841 20.043l-4.328 1.18a.6.6 0 01-.737-.736l1.18-4.324a1.2 1.2 0 01.314-.539l8.094-7.995a.9.9 0 011.268.003l2.736 2.736a.9.9 0 01.004 1.268l-7.196 7.296-.802.802a1.2 1.2 0 01-.533.31zM19.703 4.81l-.514-.513a2.542 2.542 0 00-3.595 0l-.999 1.067a.9.9 0 00.02 1.252l2.77 2.768a.9.9 0 001.25.02l1.068-.999a2.542 2.542 0 000-3.594z"></path></svg></span><span class="GlobalSideBar-categoryLabel">专栏</span></a>
                  </li>
                  <li class="GlobalSideBar-categoryItem"><a href="/consult" target="_blank" title="付费咨询"
                      style="color:#5478f0" data-za-not-track-link="true" type="button"
                      class="Button Button--plain"><span class="GlobalSideBar-categoryIcon"><svg width="24" height="24" viewBox="0 0 24 24" data-new-api="CurrencyBubbleFill24" data-old-api="Infinity" class="Zi Zi--Infinity" fill="currentColor"><path d="M2 5.4A2.4 2.4 0 014.4 3h15.2A2.4 2.4 0 0122 5.4v10.5a2.4 2.4 0 01-2.4 2.4h-2.208l-.24 2.878a.8.8 0 01-1.387.475L12.692 18.3H4.4A2.4 2.4 0 012 15.9V5.4zm8.758 1.849a.75.75 0 00-1.115 1.003l1.607 1.786v.462h-1.5a.75.75 0 000 1.5h1.5v1.75a.75.75 0 001.5 0V12h1.5a.75.75 0 000-1.5h-1.5v-.462l1.607-1.786a.75.75 0 00-1.115-1.003L12 8.629l-1.242-1.38z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span><span class="GlobalSideBar-categoryLabel">付费咨询</span></a>
                  </li>
                  <li class="GlobalSideBar-categoryItem"><a href="/wiki" target="_blank" title="百科"
                      style="color:#5868D1" data-za-not-track-link="true" type="button"
                      class="Button Button--plain"><span class="GlobalSideBar-categoryIcon"><svg width="24" height="24" viewBox="0 0 24 24" data-new-api="KnowledgeBase24" data-old-api="KnowledgeBase" class="Zi Zi--KnowledgeBase" fill="currentColor"><path d="M21 9.749v9.91c0 .74-.604 1.341-1.35 1.341H4.35C3.604 21 3 20.4 3 19.659V9.319c0-.503.283-.963.733-1.193l4.892-2.5V3.341c0-.74.604-1.341 1.35-1.341.267 0 .527.078.749.225l9.675 6.408c.375.249.601.668.601 1.116zM8.297 8.307L5.372 9.802A.223.223 0 005.25 10v8.54c0 .124.1.224.225.224h8.586a.223.223 0 00.124-.41l-4.959-3.259a1.339 1.339 0 01-.601-1.116V8.506a.224.224 0 00-.328-.199z"></path></svg></span><span class="GlobalSideBar-categoryLabel">百科</span></a>
                  </li>
                </ul>
              </div>
              <div class="Card" role="complementary" aria-label="更多分类入口">
                <ul class="GlobalSideBar-navList">
                  <li class="GlobalSideBar-navItem GlobalSideBar-starItem"><a target="_blank"
                      data-za-not-track-link="true" type="button"
                      class="Button GlobalSideBar-navLink Button--plain" href="/collections/mine"><svg
                        width="18" height="18" viewBox="0 0 24 24" data-new-api="StarFill24"
                        data-old-api="Star" class="Zi Zi--Star GlobalSideBar-navIcon"
                        fill="currentColor">
                        <path
                          d="M10.484 3.307c.673-1.168 2.358-1.168 3.032 0l2.377 4.122a.25.25 0 00.165.12l4.655.987c1.319.28 1.84 1.882.937 2.884l-3.186 3.535a.25.25 0 00-.063.193l.5 4.733c.142 1.34-1.222 2.33-2.453 1.782l-4.346-1.938a.25.25 0 00-.204 0l-4.346 1.938c-1.231.549-2.595-.442-2.453-1.782l.5-4.733a.25.25 0 00-.064-.193L2.35 11.42c-.903-1.002-.382-2.604.937-2.884l4.655-.987a.25.25 0 00.164-.12l2.378-4.122z">
                        </path>
                      </svg><span class="GlobalSideBar-navText">我的收藏</span></a></li>
                  <li class="GlobalSideBar-navItem GlobalSideBar-questionListItem"><a target="_blank"
                      data-za-not-track-link="true" type="button"
                      class="Button GlobalSideBar-navLink Button--plain"
                      href="/people/76117e4e624b5353c5856feec0923986/following/questions"><svg width="18"
                        height="18" viewBox="0 0 24 24" data-new-api="QuestionBubbleFill24"
                        data-old-api="HelpBubble" class="Zi Zi--HelpBubble GlobalSideBar-navIcon"
                        fill="currentColor">
                        <path
                          d="M5.088 1.968c.323-.044.72-.044 1.153-.044h11.518c.433 0 .83 0 1.152.044.356.047.732.16 1.04.469.31.309.422.685.47 1.04.043.323.043.72.043 1.153v13.232c0 .433 0 .83-.043 1.152-.048.356-.16.732-.47 1.04-.308.31-.684.422-1.04.47-.322.043-.72.043-1.152.043h-3.796l-3.932 2.857c-.115.084-.26.19-.397.26a.995.995 0 01-.827.071c-.359-.135-.509-.432-.573-.6a3.363 3.363 0 01-.125-.458l-.477-2.13H6.24c-.433 0-.83 0-1.153-.043-.355-.048-.73-.16-1.04-.47-.309-.308-.421-.684-.47-1.04-.042-.322-.042-.72-.042-1.152V4.63c0-.433 0-.83.043-1.153.048-.355.16-.731.47-1.04.308-.31.684-.422 1.04-.47zm5.827 8.93c0-.095 0-.142.029-.171.03-.03.076-.03.17-.03h1.01a1.63 1.63 0 001.5-1.629 1.63 1.63 0 00-1.626-1.634c-.832 0-1.531.655-1.616 1.469-.011.102-.016.153-.045.178-.028.026-.075.026-.168.026H8.947c-.095 0-.142 0-.172-.031s-.027-.077-.022-.168C8.847 7.201 10.27 5.8 11.998 5.8a3.26 3.26 0 013.25 3.268 3.264 3.264 0 01-2.7 3.222c-.041.007-.062.01-.074.024-.012.014-.012.035-.012.076v.797c0 .094 0 .141-.029.17-.03.03-.076.03-.17.03h-1.148c-.095 0-.142 0-.171-.03-.03-.029-.03-.076-.03-.17v-2.29zm-.31 4.05c0-.094 0-.141.03-.17.029-.03.076-.03.17-.03h1.922c.094 0 .141 0 .17.03.03.029.03.076.03.17v1.402c0 .094 0 .141-.03.17-.029.03-.076.03-.17.03h-1.922c-.094 0-.141 0-.17-.03-.03-.029-.03-.076-.03-.17v-1.402z"
                          fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg><span class="GlobalSideBar-navText">我关注的问题</span></a></li>
                  <li class="GlobalSideBar-navItem GlobalSideBar-inviteItem"><a target="_blank"
                      data-za-not-track-link="true" type="button"
                      class="Button GlobalSideBar-navLink Button--plain"
                      href="/question/waiting?type=invite"><svg width="18" height="18" viewBox="0 0 24 24"
                        data-new-api="UserPlusFill24" data-old-api="Invite"
                        class="Zi Zi--Invite GlobalSideBar-navIcon" fill="currentColor">
                        <path
                          d="M5.5 7.5A5.5 5.5 0 0111 2a5.5 5.5 0 015.5 5.5A5.5 5.5 0 0111 13a5.5 5.5 0 01-5.5-5.5zm8.11 9.498c.404-.408.91-1 1.17-1.51.067-.133.13-.284.165-.442.034-.15.058-.373-.033-.602a.872.872 0 00-.545-.509 1.37 1.37 0 00-.604-.043c-.657.082-1.518.184-2.373.24-.867.055-1.68.058-2.254-.041-1.189-.204-2.045-.19-2.781.087-.722.272-1.25.773-1.804 1.302-1.533 1.462-2.434 3.311-2.65 4.831-.11.78.535 1.339 1.199 1.339h8.1a.96.96 0 00.955-.929c.06-1.767.7-2.96 1.456-3.723zm5.596-2.292a.706.706 0 00-1.412 0v2.588h-2.588a.706.706 0 000 1.412h2.588v2.588a.706.706 0 101.412 0v-2.588h2.588a.706.706 0 000-1.412h-2.588v-2.588z"
                          fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg><span class="GlobalSideBar-navText">我的邀请</span></a></li>
                  <li class="GlobalSideBar-navItem GlobalSideBar-serviceItem"><a target="_blank"
                      data-za-not-track-link="true" type="button"
                      class="Button GlobalSideBar-navLink Button--plain" href="/community"><svg width="18"
                        height="18" viewBox="0 0 24 24" data-new-api="TextBubbleFill24"
                        data-old-api="Community" class="Zi Zi--Community GlobalSideBar-navIcon"
                        fill="currentColor">
                        <path
                          d="M4.4 3A2.4 2.4 0 002 5.4v10.5a2.4 2.4 0 002.4 2.4h8.292l3.073 3.353a.8.8 0 001.387-.475l.24-2.878H19.6a2.4 2.4 0 002.4-2.4V5.4A2.4 2.4 0 0019.6 3H4.4zm2.1 4.75a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm-.75 4.75a.75.75 0 01.75-.75h4.495a.75.75 0 010 1.5H6.5a.75.75 0 01-.75-.75z"
                          fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg><span class="GlobalSideBar-navText">站务中心</span></a></li>
                  <li class="GlobalSideBar-navItem GlobalSideBar-help-centerItem"><a target="_blank"
                      data-za-not-track-link="true" type="button"
                      class="Button GlobalSideBar-navLink Button--plain" href="/help-center"><svg
                        width="18" height="18" viewBox="0 0 16 16" data-new-api="HeadMicrophoneFill16"
                        data-old-api="HeadMicrophoneFill16"
                        class="ZDI ZDI--HeadMicrophoneFill16 GlobalSideBar-navIcon" fill="currentColor">
                        <path
                          d="M8 2.763a4.376 4.376 0 00-4.33 3.744h.065c.861 0 1.559.697 1.559 1.558v2.595c0 .861-.698 1.559-1.559 1.559A2.485 2.485 0 011.25 9.733v-.741c0-.867.444-1.63 1.117-2.075a5.638 5.638 0 0111.266 0 2.483 2.483 0 011.117 2.075v.741c0 1.19-.836 2.184-1.952 2.428a5.077 5.077 0 01-4.242 2.283H8a.631.631 0 010-1.263h.556c1.116 0 2.12-.478 2.818-1.241a1.557 1.557 0 01-.668-1.28V8.065a1.558 1.558 0 011.624-1.558A4.376 4.376 0 008 2.763z"
                          fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg><span class="GlobalSideBar-navText">帮助与客服</span></a></li>
                  <li class="GlobalSideBar-navItem GlobalSideBar-copyrightItem"><a target="_blank"
                      data-za-not-track-link="true" type="button"
                      class="Button GlobalSideBar-navLink Button--plain" href="/copyright"><svg width="18"
                        height="18" viewBox="0 0 24 24" data-new-api="CopyrightFill24"
                        data-old-api="Copyright" class="Zi Zi--Copyright GlobalSideBar-navIcon"
                        fill="currentColor">
                        <path
                          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-9.114-4.957a4.59 4.59 0 00-3.292.816 5 5 0 00-1.937 2.868 5.227 5.227 0 00.333 3.483 4.865 4.865 0 002.453 2.41 4.557 4.557 0 003.384.104 4.827 4.827 0 002.583-2.26.75.75 0 00-1.32-.712 3.327 3.327 0 01-1.777 1.562c-.74.27-1.547.245-2.273-.07a3.366 3.366 0 01-1.692-1.672 3.727 3.727 0 01-.236-2.48 3.5 3.5 0 011.35-2.01 3.09 3.09 0 012.219-.553c.774.107 1.495.51 2.022 1.146a.75.75 0 001.155-.958 4.703 4.703 0 00-2.972-1.674z"
                          fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg><span class="GlobalSideBar-navText">版权服务中心</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </main>
        <div data-zop-usertoken="{}"></div>
        </div>
        </div>
        <script id="js-clientConfig" type="text/json">
          {"fetchRoot":{"www":"https:\u002F\u002Fwww.zhihu.com","api":"https:\u002F\u002Fapi.zhihu.com","lens":"https:\u002F\u002Flens.zhihu.com","zhuanlan":"https:\u002F\u002Fzhuanlan.zhihu.com","walletpay":"https:\u002F\u002Fwalletpay.zhihu.com","captcha":"https:\u002F\u002Fcaptcha.zhihu.com","vzuu":"https:\u002F\u002Fv.vzuu.com","openapi":"https:\u002F\u002Fopenapi.zhihu.com","svip":"https:\u002F\u002Fsvip.zhihu.com"},"host":"zhihu.com","protocol":"https:","wwwHost":"www.zhihu.com","videoHost":"video.zhihu.com","allowSignUp":true}
        </script>
        <script id="js-initialData" type="text/json">
          {"initialState":{"common":{"ask":{}},"loading":{"global":{"count":0},"local":{"topstory\u002FgetCommercialBanner\u002F":false,"topstory\u002FgetHotList\u002F":false}},"club":{"tags":{},"admins":{"data":[]},"members":{"data":[]},"profile":{},"checkin":{},"comments":{"paging":{},"loading":{},"meta":{},"ids":{}},"postList":{"paging":{},"loading":{},"ids":{}},"recommend":{"data":[]},"silences":{"data":[]},"application":{"profile":null}},"entities":{"users":{"76117e4e624b5353c5856feec0923986":{"uid":782554159206383600,"userType":"people","id":"76117e4e624b5353c5856feec0923986"}},"questions":{},"answers":{},"articles":{},"columns":{},"topics":{},"roundtables":{},"favlists":{},"comments":{},"notifications":{},"ebooks":{},"activities":{},"feeds":{},"pins":{},"promotions":{},"drafts":{},"chats":{},"posts":{},"clubs":{},"clubTags":{},"zvideos":{},"zvideoContributions":{},"briefs":{},"eduCourses":{}},"currentUser":"76117e4e624b5353c5856feec0923986","account":{"lockLevel":{},"unlockTicketStatus":false,"unlockTicket":null,"challenge":[],"errorStatus":false,"message":"","isFetching":false,"accountInfo":{},"urlToken":{"loading":false},"cardUserInfo":{"vipInfo":{}},"handleWidget":{},"widgetList":[],"userWidgetId":""},"settings":{"socialBind":null,"inboxMsg":null,"notification":{},"email":{},"privacyFlag":null,"blockedUsers":{"isFetching":false,"paging":{"pageNo":1,"pageSize":6},"data":[]},"blockedFollowees":{"isFetching":false,"paging":{"pageNo":1,"pageSize":6},"data":[]},"ignoredTopics":{"isFetching":false,"paging":{"pageNo":1,"pageSize":6},"data":[]},"restrictedTopics":null,"laboratory":{}},"notification":{},"people":{"profileStatus":{},"activitiesByUser":{},"answersByUser":{},"answersSortByVotesByUser":{},"answersIncludedByUser":{},"votedAnswersByUser":{},"thankedAnswersByUser":{},"voteAnswersByUser":{},"thankAnswersByUser":{},"topicAnswersByUser":{},"zvideosByUser":{},"articlesByUser":{},"articlesSortByVotesByUser":{},"articlesIncludedByUser":{},"pinsByUser":{},"questionsByUser":{},"commercialQuestionsByUser":{},"favlistsByUser":{},"followingByUser":{},"followersByUser":{},"mutualsByUser":{},"followingColumnsByUser":{},"followingQuestionsByUser":{},"followingFavlistsByUser":{},"followingTopicsByUser":{},"publicationsByUser":{},"columnsByUser":{},"allFavlistsByUser":{},"brands":null,"creationsByUser":{},"creationsSortByVotesByUser":{},"creationsFeed":{},"infinity":{},"batchUsers":{},"profileInfinity":null},"env":{"ab":{"config":{"params":[{"id":"vessay_v2_sdk","type":"Int","value":"1","layerId":"Qtkm"},{"id":"pc_ppt_publish","type":"Int","value":"1","layerId":"pc_ppt_publish"},{"id":"helpcenter_pc","type":"Int","value":"1","layerId":"helpcenter_pc"},{"id":"pc_comment","type":"Int","value":"1","layerId":"EsOR"},{"id":"pc_follow","type":"Int","value":"1","layerId":"pc_follow"},{"id":"draftsentrance","type":"Int","value":"1","layerId":"draftsentrance"}],"experiments":[{"expId":"pc_ppt_publish-2_v2","expPrefix":"pc_ppt_publish","isDynamicallyUpdated":false,"isRuntime":false,"includeTriggerInfo":false},{"expId":"helpcenter_pc-2_v11","expPrefix":"helpcenter_pc","isDynamicallyUpdated":false,"isRuntime":false,"includeTriggerInfo":false},{"expId":"pc_comment-2_v4","expPrefix":"pc_comment","isDynamicallyUpdated":false,"isRuntime":false,"includeTriggerInfo":false},{"expId":"pc_follow-3_v5","expPrefix":"pc_follow","isDynamicallyUpdated":false,"isRuntime":false,"includeTriggerInfo":false}],"chains":[{"chainId":"_all_"}],"encodedParams":"CtoBGwA\u002FAEcAtABpAWoBdAE7AswC1wLYAk8DUAOgA6EDogO3A\u002FMD9AMzBIwEjQSmBNYEEQUpBTIFUQWLBYwFngUWBjAGMQZ+BusGJwdXB3cHeAebB9gH3AfdBycIZwh0CHYIeQjFCNoI5Qg\u002FCUIJVAlVCWAJjQmrCcMJxAnFCcYJxwnICckJygnLCcwJ0QnlCfEJ9AkECkkKZQprCpgKpQqpCr4KxArUCt0K7Qr9CikLOws8C0MLRgtxC3YLhQuHC40LuQvAC9cL4AvlC+YLOAxxDI8MrAzDDMkMtQsSbQAAAAACAAABAwAAAAAAAAAAAAAABAQABAAAAQEAAAEAAgAAAAABAAAAAAICAAQAAAYGAAEAAQAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAQAAAAABAAAHAAEAAQIAAAAAAQAAAgEAAAIEAAABAAM="},"triggers":{}},"userAgent":{"Edge":false,"IE":false,"Wechat":false,"Weibo":false,"QQ":false,"MQQBrowser":false,"Qzone":false,"Mobile":false,"Android":false,"iOS":false,"isAppleDevice":false,"Zhihu":false,"ZhihuHybrid":false,"isBot":false,"Tablet":false,"UC":false,"Quark":false,"Sogou":false,"Qihoo":false,"Baidu":false,"BaiduApp":false,"Safari":false,"GoogleBot":false,"AndroidDaily":false,"iOSDaily":false,"WxMiniProgram":false,"BaiduMiniProgram":false,"QQMiniProgram":false,"JDMiniProgram":false,"isWebView":false,"isMiniProgram":false,"origin":"PostmanRuntime\u002F7.29.2"},"appViewConfig":{},"ctx":{"path":"\u002Fhot","query":{},"href":"http:\u002F\u002Fwww.zhihu.com\u002Fhot","host":"www.zhihu.com"},"trafficSource":"production","edition":{"beijing":false,"baidu":false,"sogou":false,"baiduBeijing":false,"sogouBeijing":false,"sogouInput":false,"baiduSearch":false,"googleSearch":false,"shenma":false,"miniProgram":false,"xiaomi":false},"theme":"light","appHeaderTheme":{"current":"normal","disable":true,"normal":{"bgColor":"GBK99A"},"custom":{}},"enableShortcut":true,"referer":"http:\u002F\u002Fwww.zhihu.com\u002Fhot","xUDId":"AFATVlNgdhWPTh5uCoBo-4de8KQ3n6ZooA8=","mode":"ssr","conf":{},"xTrafficFreeOrigin":"","ipInfo":{},"logged":true,"vars":{"passThroughHeaders":{}}},"me":{"columnContributions":[]},"label":{"recognizerLists":{}},"ecommerce":{},"comments":{"pagination":{},"collapsed":{},"reverse":{},"reviewing":{},"conversation":{},"parent":{}},"commentsV2":{"stickers":[],"commentWithPicPermission":{},"notificationsComments":{},"pagination":{},"collapsed":{},"reverse":{},"reviewing":{},"conversation":{},"conversationMore":{},"parent":{}},"pushNotifications":{"default":{"isFetching":false,"isDrained":false,"ids":[]},"follow":{"isFetching":false,"isDrained":false,"ids":[]},"vote_thank":{"isFetching":false,"isDrained":false,"ids":[]},"currentTab":"default","notificationsCount":{"default":0,"follow":0,"vote_thank":0}},"messages":{"data":{},"currentTab":"common","messageCount":0},"register":{"registerValidateSucceeded":null,"registerValidateErrors":{},"registerConfirmError":null,"sendDigitsError":null,"registerConfirmSucceeded":null},"login":{"loginUnregisteredError":false,"loginBindWechatError":false,"loginConfirmError":null,"sendDigitsError":null,"needSMSIdentify":false,"validateDigitsError":false,"loginConfirmSucceeded":null,"qrcodeLoginToken":"","qrcodeLoginScanStatus":0,"qrcodeLoginError":null,"qrcodeLoginReturnNewToken":false},"switches":{},"captcha":{"captchaNeeded":false,"captchaValidated":false,"captchaValidationMessage":null,"loginCaptchaExpires":false},"sms":{"supportedCountries":[]},"chat":{"chats":{},"inbox":{"recents":{"isFetching":false,"isDrained":false,"isPrevDrained":false,"result":[],"next":null,"key":null},"strangers":{"isFetching":false,"isDrained":false,"isPrevDrained":false,"result":[],"next":null,"key":null},"friends":{"isFetching":false,"isDrained":false,"isPrevDrained":false,"result":[],"next":null,"key":null},"search":{"isFetching":false,"isDrained":false,"isPrevDrained":false,"result":[],"next":null,"key":null},"config":{"newCount":0,"strangerMessageSwitch":false,"strangerMessageUnread":false,"friendCount":0}},"global":{"isChatMqttExisted":false}},"emoticons":{"emoticonGroupList":[],"emoticonGroupDetail":{}},"creator":{"currentCreatorUrlToken":null,"homeData":{"recommendQuestions":[]},"tools":{"question":{"invitationCount":{"questionFolloweeCount":0,"questionTotalCount":0},"goodatTopics":[]},"customPromotion":{"itemLists":{}},"recommend":{"recommendTimes":{}}},"explore":{"academy":{"tabs":[],"article":{}}},"rights":[],"newRights":[],"rightsStatus":{},"levelUpperLimit":10,"account":{"growthLevel":{}},"mcn":{},"applyStatus":{},"videoSupport":{},"textBenefit":{},"mcnManage":{},"tasks":{},"newTasks":{"creatorTask":{"tasks":[],"des":[]}},"scoreInfo":{},"recentlyCreated":[],"analysis":{"all":{},"answer":{},"zvideo":{},"article":{},"pin":{},"singleContent":{}},"announcement":{},"bannerList":[],"school":{"tabs":[],"contents":[],"banner":null,"entities":{}},"creatorsRecommendInfo":{},"menusShowControlByServer":{"bVipRecomend":false,"creationRelationship":false},"income":{"aggregation":{}}},"question":{"followers":{},"concernedFollowers":{},"answers":{},"hiddenAnswers":{},"updatedAnswers":{},"ariaAnswers":{},"collapsedAnswers":{},"notificationAnswers":{},"invitedQuestions":{"total":{"count":null,"isEnd":false,"isLoading":false,"questions":[]},"followees":{"count":null,"isEnd":false,"isLoading":false,"questions":[]}},"laterQuestions":{"count":null,"isEnd":false,"isLoading":false,"questions":[]},"waitingQuestions":{"recommend":{"isEnd":false,"isLoading":false,"questions":[]},"invite":{"isEnd":false,"isLoading":false,"questions":[]},"newest":{"isEnd":false,"isLoading":false,"questions":[]},"hot":{"isEnd":false,"isLoading":false,"questions":[]}},"invitationCandidates":{},"inviters":{},"invitees":{},"similarQuestions":{},"questionBanners":{},"relatedCommodities":{},"bio":{},"brand":{},"permission":{},"adverts":{},"advancedStyle":{},"commonAnswerCount":0,"hiddenAnswerCount":0,"topicMeta":{},"bluestarRanklist":{},"relatedSearch":{},"autoInvitation":{},"simpleConcernedFollowers":{},"draftStatus":{},"disclaimers":{},"isShowMobileSignInModal":false},"shareTexts":{},"answers":{"voters":{},"copyrightApplicants":{},"favlists":{},"newAnswer":{},"entityWords":{},"concernedUpvoters":{},"simpleConcernedUpvoters":{},"paidContent":{},"settings":{}},"banner":{},"topic":{"bios":{},"hot":{},"newest":{},"top":{},"sticky":{},"pin":{},"unanswered":{},"questions":{},"followers":{},"contributors":{},"parent":{},"children":{},"bestAnswerers":{},"wikiMeta":{},"index":{},"intro":{},"meta":{},"schema":{},"creatorWall":{},"wikiEditInfo":{},"committedWiki":{},"landingBasicData":{},"landingExcellentItems":[],"landingExcellentEditors":[],"landingCatalog":[],"landingEntries":{}},"explore":{"recommendations":{},"specials":{"entities":{},"order":[]},"roundtables":{"entities":{},"order":[]},"collections":{},"columns":{},"square":{"hotQuestionList":[],"potentialList":[]}},"articles":{"voters":{},"concernedUpvoters":{}},"favlists":{"relations":{}},"pins":{"reviewing":{}},"topstory":{"recommend":{"isFetching":false,"isDrained":false,"afterId":0,"items":[],"next":null},"follow":{"isFetching":false,"isDrained":false,"afterId":0,"items":[],"next":null},"room":{"meta":{},"isFetching":false,"afterId":0,"items":[],"next":null},"followWonderful":{"isFetching":false,"isDrained":false,"afterId":0,"items":[],"next":null},"sidebar":null,"announcement":{},"hotList":[{"type":"hot_list_feed","styleType":"1","id":"0_1661501821.323379","cardId":"Q_550062890","feedSpecific":{"answerCount":439},"target":{"titleArea":{"text":"美国拟取消 26 个中方承运赴华航班，为何会做出这一决定？这将带来哪些影响？"},"excerptArea":{"text":"当地时间 8 月 25 日，美国交通部发布通告，由于美国航司多个赴华航班被取消，计划自九月起取消 26 个由中国航司（国航、南航、东航、厦航）承运的美国赴华航班。 这意味着，原本就供不应求的中美航线航班运力将再遭削减，除了影响几家中方航空公司的收益，直接影响的还有回国乘客以及中美航线票价。 根据通告，计划被取消的中美航班包括国航，南航，东航和厦航的多个航班，几乎囊括了整个九月。 其中国航洛杉矶 - 深圳被取消 9 月 6 、 13 、 20 和 27 日，国航洛杉矶 - 北京被取消 9 月 18 和 25 日；东航纽约 - 上海被取消 9 月 7 、 12 、 14 、 19 、 21 、 26 和 28 日；南航 洛杉矶 - 广州被取消 9 月 10 、 12 、 17 、 19 、 24 和 26 日；厦航洛杉矶 - 厦门被取消 9 月 5 、 8 、 12 、 15 、 19 、 22 和 26 日。 来源：第一财经"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-c1fd8c8662a37ab210eca028b426cc8f_1440w.png"},"metricsArea":{"text":"1773 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550062890"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NTE5OTMyIPzpoJgGMEE41gdAAHIJNTUwMDYyODkweACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"1_1661501821.324427","cardId":"Q_549906723","feedSpecific":{"answerCount":892},"target":{"titleArea":{"text":"人社部表示 10 年来城镇新增就业 1.3 亿人，工资较 2012 年翻一倍，如何解读该数据？"},"excerptArea":{"text":"2022 年 8 月 25 日，中共中央宣传部就党的十八大以来就业和社会保障工作进展与成效举行新闻发布会。人力资源和社会保障部副部长李忠在回答界面新闻提问时介绍，党的十八大以来，城镇新增就业年均超过 1300 万人，10 年累计实现城镇新增就业 1.3 亿人。 李忠介绍，党的十八大以来，以习近平同志为核心的党中央高度重视就业工作，明确把就业摆在「六稳」「六保」之首，强化就业优先政策，推动就业工作在十年间取得历史性成就。这 10 年，就业局势保持总体稳定，在 14 亿多人口的大国实现了比较充分的就业。 李忠表示，我国城镇就业规模不断扩大，调查失业率总体低于预期控制目标。而且，城乡就业格局发生历史性改变，2021 年城镇就业人员占比达到 62.7%，第三产业成为就业最大「容纳器」，三次产业「倒金字塔型」的就业结构逐步形成。 此外，就业质量稳步提升，工资水平不断提高。2021 年城镇单位人员工资较 2012 年翻了一倍，社会保险覆盖范围继续扩大，灵活就业人员权益保障不断完善。 来源：界面新闻"},"imageArea":{"url":"https:\u002F\u002Fpica.zhimg.com\u002F80\u002Fv2-2641a0d34a341a528daafa01cc77513d_1440w.png"},"metricsArea":{"text":"1189 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549906723"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDg1MzU4IObrm5gGMG04vQpAAXIJNTQ5OTA2NzIzeACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"2_1661501821.3253486","cardId":"Q_549854528","feedSpecific":{"answerCount":828},"target":{"titleArea":{"text":"诗歌研究专家称普通读者无法鉴赏贾浅浅的诗，你认同这一观点吗？鉴赏诗歌是否需具备某些素养？"},"excerptArea":{"text":"近日，作家贾平凹之女贾浅浅出现在 2022 年中国作家协会会员发展名单中引发热议。中国现代文学研究会会员荣光启表示，贾浅浅在诗歌方面的造诣是够资格进入作协的，「她写诗的水平在当代女诗人中是比较优秀的」，读者会把她写孩子屙屎屙尿的事情放大。贾浅浅拟入作协遭质疑，诗歌研究专家：她够资格，和其父贾平凹无关，普通读者无法鉴赏"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-9404a44cf653be5dd05d7aa2b5dc6a6e_1440w.png"},"metricsArea":{"text":"1182 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549854528"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDczNzU4IOehmZgGMFQ49QdAAnIJNTQ5ODU0NTI4eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"3_1661501821.3260715","cardId":"Q_549868234","feedSpecific":{"answerCount":457},"target":{"titleArea":{"text":"如何评价上海凤凰自行车半年营收过亿，净利润仅为 9.63 万元？你觉得凤凰牌自行车骑起来体验如何？"},"excerptArea":{"text":"营收和利润差距真的很大......"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-98acd5602d91bfab2c00e845a12d93d1_1440w.png"},"metricsArea":{"text":"1142 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549868234"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDc2ODE0IK6Gm5gGMD84qgdAA3IJNTQ5ODY4MjM0eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"4_1661501821.32796","cardId":"Q_550027748","feedSpecific":{"answerCount":144},"target":{"titleArea":{"text":"重庆北碚山火被有效封控，起决定性作用的「以火灭火」是啥战术？还有哪些救火战术？"},"excerptArea":{"text":"「我们胜利了！」8 月 25 日 23 时许，阵阵欢呼声响彻缙云山上空。经过各方救援力量奋力扑救，北碚区歇马街道山火明火得到有效封控。在这场与山火的拉锯战中，「以火灭火」的方式，助力了阶段性胜利时刻的到来。 「点火」！当天 20 时许，随着一声令下，一团火苗在半山腰的防火隔离带旁边被点燃。随后，一条「火龙」在现场熊熊燃起，利用隔离带和风向优势向原本的火线蜿蜒烧去… 什么是「以火灭火」？记者采访了参与此次救援的云南森林消防一名工作人员。他介绍，「以火灭火」又称「火攻法」，主要原理是由人工点燃火头（火线）与相向烧来的林火对接，使结合部骤然缺氧失去燃烧条件，在此次北碚山火的扑灭过程中起到了决定性作用。 「这一方法的优点是灭火效率较高，不需要特殊装备，是控制大面积、高能量森林火灾的有效措施，但必须有经验丰富的指挥员组织，盲目火攻容易造成更大的火灾或人员伤亡。」该工作人员介绍。 此外，在实战中运用火攻，必须周密计划，落实安全保障，认真组织实施。一要选择有利地形，如利用林间道路、小溪、防火线、山脊为依托；二要做好点烧前的各项准备工作，如点火器、灭火机具等，清点人员并及时疏散无关人员；三要划分点烧组、扑救组、清守组的职责，明确任务；四要彻底清理余火，确保不跑火、不复燃、不留隐患；五要控制好点烧火的发展方向，稳步推进，确保达到以火攻火的目的。视频 | 啥是「以火灭火」？消防救援人员科普北碚山火拉锯战中的反向点火战术"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-5c6f372aa8060915260ce206d40320c5_1440w.png"},"metricsArea":{"text":"851 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550027748"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDg0NTEyMTE4IIKxoJgGMBo41wNABHIJNTUwMDI3NzQ4eACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"5_1661501821.3289812","cardId":"Q_549973547","feedSpecific":{"answerCount":318},"target":{"titleArea":{"text":"「美人鱼」儒艮在我国已功能性灭绝，14 年来无出现记录，为何会出现这一悲剧？我们能做些什么？"},"excerptArea":{"text":"据 BBC 报道，激发美人鱼故事的动物 - 儒艮，在中国面临灭绝危机。来自伦敦动物学会（ZSL）的塞缪尔 - 特维教授是这项研究的共同作者，他说 「 儒艮在中国的可能消失是一个毁灭性的损失 」。ZSL 和中国科学院的科学家们审查了所有关于以前在中国发现儒艮的历史数据。他们发现，自 2000 年以来，科学家们没有核实过目击事件。此外，研究人员求助于公民科学，采访了居住在这些沿海地区的 788 名社区成员，以确定当地人最后一次看到儒艮的时间。平均而言，居民报告说他们已经 23 年没有见过儒艮了。只有三个人在过去五年中见过儒艮。1988 年，儒艮被中国列为国家一级重点保护动物，然而自 2008 年以来，已没有儒艮在中国出现的记录。科学家调查研究后认为，儒艮在中国已经功能上灭绝——这意味着「它已不再能自我维持生存」。「美人鱼」儒艮（gèn）在中国已功能性灭绝，14 年来无出现记录"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F80\u002Fv2-43a8cda31304ee28bea9f50d99fcb5fc_1440w.jpg?source=1940ef5c"},"metricsArea":{"text":"576 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549973547"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NTAwMTgwIILRnZgGMD04vwVABXIJNTQ5OTczNTQ3eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"6_1661501821.329792","cardId":"Q_549940544","feedSpecific":{"answerCount":120},"target":{"titleArea":{"text":"刺杀安倍的枪手山上彻也收到大量慰问品，六千余人请愿为他减刑，这对日本政界会有何影响？哪些信息值得注意？"},"excerptArea":{"text":"据雅虎新闻 8 月 24 日消息，「彻也送来了一个纸箱，他在拘留所里好像收到了很多礼物，好像有很多钱。纸箱里有糖果和漫画书。」山下彻也 77 岁的叔叔如是说道。 在刺杀日本前首相安倍晋三后 ，枪手山下彻也仍在拘留所进行精神评估，以调查他是否具备刑事责任能力。此前，山上曾表示自己作案的动机是因其「人生因‘统一教会’变得一团糟」，因此也让外界民众关注到「统一教会」不为人知的一面。目前许多媒体仍在调查该教会的商业影响力以及其与政客的关系。 据此前报道，山下的父亲自杀后，其母将 6000 万日元保险金全部捐给了教会，山下的哥哥因对未来充满悲观而自杀，山下自己也没钱上大学。 事件曝光后，「统一教会受害者协会」及「全国维权律师协会」收到大量的咨询 ，似乎越是揭露该教会的真相，民众对于山下的同情就越大。据日媒 12 日报道，日本一网站发起了要求给山上彻也减刑的签名请愿活动，已有超 6000 人在请愿书上签名。"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-6d4a9fc9df7d94d8c1d3961c6af0b1c3_1440w.png"},"metricsArea":{"text":"432 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549940544"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDkyODYyIO\u002FanJgGMCM4zAJABnIJNTQ5OTQwNTQ0eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"7_1661501821.3306541","cardId":"Q_549924874","feedSpecific":{"answerCount":424},"target":{"titleArea":{"text":"如何看待报告称「超七成观众愿接受付费直播大结局」？直播大结局收费是否合理？你愿意付费吗？"},"excerptArea":{"text":"8 月 25 日，中国消费者报发布《2022 长视频平台用户满意度报告》。报告显示，七成以上消费者愿意为优质内容买单，更倾向于开通半年以上时长的会员。随着「视频内容也是商品」的观念深入人心，消费者需求逐渐多元化，六成用户希望平台能够分层级收费，提供更多元服务。平台提前告知规则的前提下，其中超七成观众愿意接受付费直播大结局，可见消费者对于喜爱的影视内容「解锁提前观看」的诉求强烈。"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F80\u002Fv2-efea78aec20e5df4a25469cba359aeb9_1440w.png"},"metricsArea":{"text":"404 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549924874"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDg5MzgwIO6unJgGMEw48QNAB3IJNTQ5OTI0ODc0eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"8_1661501821.3314044","cardId":"Q_550055580","feedSpecific":{"answerCount":237},"target":{"titleArea":{"text":"如何评价专家称「可以给 00 后增加工作强度，其能力不可小觑」？现实情况如何？"},"excerptArea":{"text":"近日，在《来点财经范儿》节目中，中国生物营销中心副总经理张轶楠表示，在我们的工作中，我觉得对于 00 后，（工作强度）是可以给他加码的。因为我认为他们具备一个很好素质的人。我举个例子，就是 00 后和 95 后，他们获取信息可能更多元化，而且他们具备独立思考的能力。所以，作为我们这种创新型的企业，当我们给他们一个 idea 的时候，他们通过自我的这种检索、信息搜集，反而能交出来一个具有独立观点的报告或者一些项目的案例，我觉得这个例子就让我觉得 00 后的能力是不可小觑的。"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-3873813674afb34cc7b5080dd84e535f_1440w.png"},"metricsArea":{"text":"369 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550055580"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NTE4MjkwINvZoJgGMCU4qQNACHIJNTUwMDU1NTgweACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"9_1661501821.3321393","cardId":"EV_12218818","feedSpecific":{"answerCount":0},"target":{"titleArea":{"text":"有什么嚼着就能解困的健康零食？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpica.zhimg.com\u002Fv2-9a84a4e88ac57e7171d257c71309f4d6.jpg?source=6a64a727"},"metricsArea":{"text":"广告","fontColor":"GBK06A","background":"GBK06A","weight":"BOLD"},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fzhuanlan.zhihu.com\u002Fp\u002F557052412"}},"attachedInfo":"CmUIkZ\u002FQxI2o1vgvEBgaBDY3OTMgq6WdmAZACXIIMTIyMTg4MTh4AKoBCWJpbGxib2FyZMoBJmh0dHBzOi8vemh1YW5sYW4uemhpaHUuY29tL3AvNTU3MDUyNDEy8gEHCAESA3ZpcA=="},{"type":"hot_list_feed","styleType":"1","id":"10_1661501821.3326602","cardId":"Q_549591725","feedSpecific":{"answerCount":418},"target":{"titleArea":{"text":"绍兴「网瘾」少年被骂后跳下 11 楼致终身残疾，为何有些孩子会沉迷网络游戏？父母或社会该如何正确引导？"},"excerptArea":{"text":"如何将自己 14 岁的儿子小军（化名）从游戏世界中拯救出来，是浙江绍兴一名大学老师王刚（化名）这两三年一直在思考的问题。 2020 年年初疫情居家期间，读初一的小军开始对网络游戏沉迷，在复课后，放学后第一件事也是捧起手机。 为此王刚曾动手「教训」过小军，但收效甚微。冲突在当年 10 月爆发，王刚在听说小军在考试中成绩倒数之后，看到仍在玩游戏的他，说了几句「难听」的话，小军从 11 楼的家中跳了下去，身负重伤。但即使在医院治疗期间，小军也仍在病床上玩游戏。 王刚曾经以为，经过这件事，小军会明白，生命并不像他经常玩的《王者荣耀》，在「been slayed」（被杀）之后，还能很快重启。 今年 4 月底，小军才从医院出院，落下残疾，但网瘾依旧。 8 月 18 日，王刚告诉潇湘晨报记者，对于出院后的小军仍沉迷王者荣耀等游戏，一方面他心疼儿子，另一方面他又担心孩子继续沉沦。一次他实在没忍住，再次打了小军，因为他得知小军往一款游戏中充值了一万多元。 实际上，针对青少年沉迷网络游戏现象，国家相关部门近年来不断升级关于防止未成年人沉迷网络游戏的规定。 在政策指导下，一些游戏厂家实际一直在优化反沉迷系统，并取得实效，但部分机制仍有漏洞可钻。专家也同时指出，解决青少年网瘾问题，也绝不是单单通过游戏厂家一方能够解决的，还需要监管部门、学校、家庭等各方面的努力。 因沉迷手机游戏，父亲没收手机后儿子从 11 楼跳下 14 岁的小军是王刚的独子。王刚是一名大学老师，七八年前，王刚与妻子离婚，小军跟在了王刚身边。王刚说，可能由于家庭因素的影响，他们父子俩之间交流不算太多。但以前小军还算「听话」，小学阶段的成绩还可以。但自从 2020 年初后，他开始有些焦虑。 当时正值疫情期间，学校都停课了，居民也在家不得随意外出。读初一的小军在这个阶段因在家无聊，开始迷上了手机游戏，虽然以前他也玩游戏，但家长还能够控制。 自那之后小军沉迷其中一发不可收拾。「每天在家打游戏，也不愿意和我说话。」王刚说，他看在眼里急在心里，原本以为开学后会好一些，但小军依旧每天回家便开始打游戏，成绩也一落千丈，变成了班上的倒数几名。 王刚说，他自己不玩游戏，也不懂游戏，儿子用的手机是自己淘汰的旧手机，账号则是用王刚自己的身份证注册的。 他之前将小军的账号注销过，他也动手打过儿子，也摔烂几个手机，但「效果」只能维持几天，之后儿子又悄悄玩游戏。儿子有时也会央求他，如果不从就生闷气不吃饭。「我只有一个儿子，有时候实在也不忍心，我又把手机给他了。」王刚承认自己有时决心不大，儿子也曾在游戏中充值购买游戏服务，花了大几千块钱，其中一部分是他给儿子的压岁钱，另一部分是他前妻给儿子的。 去年 10 月 1 日，父子俩再次爆发矛盾。当天是国庆节，王刚做完午饭，看到儿子又在玩《王者荣耀》，而之前学校老师和他说，小军最近一次考试考得很差，他立马上前，将儿子的手机没收，并开始破口大骂。 小军被父亲吓得不敢作声，又生起了闷气，并拒绝吃饭，王刚则说了几句「难听的话」，突然小军跑到房间把房门反锁。王刚用力踹门没有踹开，跑到窗户边一看，儿子竟然赌气直接从自家小区 11 楼跳了下去。 被吓到的王刚赶紧跑到了楼下，小军已经晕了过去，王刚立即将孩子送到了医院。在 ICU 呆了六天后，小军才恢复了意识，并在当年 10 月 23 日转入普通病房。王刚的前妻知道此事后，也赶过来照顾小军。 潇湘晨报记者在浙江大学医学院附属儿童医院的一份诊断书上看到，小军一共有 23 处诊断记录，包括重型颅脑损伤，失血性休克，消化道出血，全身多处骨头骨折等等。 王刚在学校的课不多，除了上课时间，他就跑来照顾小军。在担心小军身体的同时，他也有另一个焦虑：小军依旧痴迷于网络游戏，即使在病床上。 王刚说，在孩子住院期间，孩子和他的交流依旧很少，每天睁开眼就是拿出手机，躺在病床上玩游戏。王刚在小军住院期间拍摄一段视频，视频中小军躺在病床上，双手拿着手机，屏幕里传来游戏中的厮杀声——那是手游《王者荣耀》的界面。 绍兴少年被骂后跳下 11 楼致终身残疾：躺在病床上仍整天玩游戏，难戒网瘾 _ 长江云 - 湖北网络广播电视台官方网站"},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002Fv2-bad827e5991af9fcdeec602f0282448e_b.jpg"},"metricsArea":{"text":"315 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549591725"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDE1MjI0IObukJgGMHs4jgZACnIJNTQ5NTkxNzI1eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"11_1661501821.3340766","cardId":"Q_549653138","feedSpecific":{"answerCount":159},"target":{"titleArea":{"text":"陕西正在搭建商用可控核聚变堆装置，什么是商业聚变？核聚变发电要实现了吗？"},"excerptArea":{"text":"核聚变被形象的称之为「人造太阳」，近日，我国首个小型化、可快速迭代的商用可控核聚变反应堆在秦创原开始建设，这标志着在全球核聚变的赛道上又多了一名中国选手。 这里是位于西安经济技术开发区的我国首个商用可控聚变堆——星环聚能实验场的装置区，硕大的钢筋铁柱已为将来的「核聚变」实验筑起了「铜墙铁壁」防护网。自今年 6 月份开工以来，已完成了实验基地改造，技术设备进场等关键环节。球型托卡马克装置的安装部件于 8 月份已运至实验场地，目前公司核心研发团队的十多位聚变能及相关技术领域的博士、硕士已开始组装工作。 据了解，近年来，随着高温超导、先进材料等技术的进步，以紧凑、快速迭代为主要特征的商业化聚变能开发迎来新的发展风口。星环聚能自 2021 年 7 月入驻秦创原清控科创西部创新加速中心以来，到今年 6 月份已获得数亿元投资。预计今年 10 月完成一代装置组装，明年实现加热等离子体到 1700 万度的预期目标。未来将有望应用于聚变能电站、大中型船舶、海上作业平台，以及近地轨道器等场景的动力系统，也将为我省实现「双碳」目标提供新的技术路径和产业模式。起点新闻：【奋进新征程建功新时代】陕西将建成我国首个商用可控聚变堆 - 陕西省科学技术厅"},"imageArea":{"url":"https:\u002F\u002Fpica.zhimg.com\u002F80\u002Fv2-40783c9f68180737d2821485dd8eeb42_1440w.png"},"metricsArea":{"text":"295 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549653138"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDI4OTI3IP2ukpgGMCE4twRAC3IJNTQ5NjUzMTM4eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"12_1661501821.3348997","cardId":"Q_549615300","feedSpecific":{"answerCount":81},"target":{"titleArea":{"text":"天津大学 00 后本科生以第一作者身份在 Science 发表论文，这是什么水平？"},"excerptArea":{"text":"2022 年 8 月 18 日，美国西北大学 William R. Dichtel 、加利福尼亚大学洛杉矶分校 K. N. Houk 院士及中国科学院上海有机化学研究所薛小松等多团队合作（西北大学 Brittany Trang 和天津大学 Li Yuli 是共同第一作者）在 Science 在线发表题为「Low-temperature mineralization of perfluorocarboxylic acids」的研究论文，该研究发现全氟烷基羧酸 (PFCA) 可以通过氢氧化钠介导的脱氟途径进行矿化。 值得注意的是，天津大学理学院 2018 级本科生李预立作为共同第一作者，而他是一名「00 后」。 李预立从 2020 年下半年开始参与到课题的研究中，他所做的计算工作为合作的实验团队对结果的假设进行了检验工作，同时他还基于自己的认识提出了新的假设，这种猜测最终被证明是对的。 近年来，天津大学理学院本科生在高水平期刊上发表学术论文已经不是个例。 学院一直注重本科生科研能力的培养，鼓励学生参与高水平的科学研究和国际合作，出台《天津大学理学院本科生科研能力提升计划》，激发学生主动学习意识和潜能，不断提升学生的学习能力、创新能力、实践能力和合作精神。 英雄出少年，这几年，越来越的 95 后、甚至是 00 后在学术圈展露头角。"},"imageArea":{"url":"https:\u002F\u002Fpic2.zhimg.com\u002F50\u002Fv2-ce3b1134c142e24b8e3654c57eda1fde_b.jpg"},"metricsArea":{"text":"264 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549615300"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDIwNDc2IMi7kZgGMAU44AFADHIJNTQ5NjE1MzAweACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"13_1661501821.3357565","cardId":"Q_550015026","feedSpecific":{"answerCount":121},"target":{"titleArea":{"text":"普京签署命令将俄武装力量编制增加 13.7 万人，俄军总人数将达到 115 万人，这释放了什么信号？"},"excerptArea":{"text":"据俄卫星网 25 日报道，俄罗斯法律信息官方网站的文件显示，在 2017 年 11 月 17 日生效的总统令中规定，俄武装力量在役人数为 1902758 人，其中 1013628 人为军人。而在新的命令中，俄武装力量在役人数为 2039758 人，其中 1150628 人为军人。该命令将于 2023 年 1 月 1 日生效。 根据介绍，在俄罗斯的国家体系中，俄罗斯联邦武装力量的最高指挥官为俄罗斯联邦总统。俄罗斯联邦武装力量除了军队，还有内卫部队、边防军、铁道兵、通信部队等。 俄卫星网的这篇报道可以说是字少事大，虽然没有直接分析增加兵力的意图，但引发外界的广泛猜测。 路透社 25 日以「普京签署法令扩大俄罗斯武装部队规模」为题称，普京周四签署一项法令，随着俄乌冲突进入第七个月，俄罗斯武装部队的规模从 190 万增加到 204 万。 路透社的报道不仅将俄军规模的扩大与俄乌冲突直接挂钩，还宣称「莫斯科自冲突的头几周以来就没有透露任何人员损失数，但西方官员和基辅政府表示，损失人数已达数千人」。 美国广播公司网站 25 日则报道称，在莫斯科对乌克兰的特别军事行动中，俄罗斯总统弗拉基米尔·普京已下令俄罗斯武装部队规模增加 13.7 万人。 《莫斯科时报》25 的文章援引一位美国专家的分析称，像这样的扩张是当俄总参谋部内部对未来的战略预期非常悲观时采取的行动，或者有一个长期的冲突或项目。报道称，美国官员估计，在对乌克兰特别军事行动的六个月战斗中，俄罗斯有 7.5 万名士兵伤亡，西方媒体还一直在渲染俄罗斯军队正遭受严重的人力短缺。 报道援引一些独立媒体的说法称，一些俄罗斯将军认为，俄乌冲突可能会持续数年。 真的是这样吗？老刘认为，西方媒体估算的这个伤亡数据过于夸张，有宣传的成分。据俄《真理报》25 日报道，俄军事专家弗拉季斯拉夫·舒里金评论了乌克兰特别行动期间官方战斗损失报告中的差异。该专家表示，如果从公开来源获取平均数据，那么在乌克兰进行为期六个月的特别行动中，俄罗斯军队和两个「共和国」的民兵的死亡总数约为 1.1 万人。该俄罗斯专家还评估乌克兰军方有 3-4 万人丧生。 综合来看俄专家提出的这个数据是有一定参考价值的。 老刘认为，俄总统普京签署的这一增兵法令试图传递以下两条信息： 首先，这是一条战略级别的重磅信息，而非战术级别的。从这个层面来看，普京的增兵法令并不是直接针对俄军在对乌特别军事行动中的兵力伤亡。换句话说，即便俄军真如西方媒体炒作的的那样有数万伤亡，俄军原有的兵力员额也完全不需要通过增兵法案来实现兵力补充。 其次，俄扩军的这一举动意味着，俄方对于自己所处的安全环境持非常悲观的态度，认为在相当长一段时间之内，这种被美国为首北约敌对的环境将会持续。 这从美国最新宣布的对乌军事援助就可以看出。 白宫 8 月 24 日宣布对乌克兰提供 30 亿美元的安全援助。这是俄乌冲突六个月来，美国提供的最大一笔军援。至此，美国为这场已持续 184 天的冲突共付出了 136 亿美元。 美国媒体认为，与此前应对当前军事需求的援助不同，此次新的援助计划侧重的是中长期军事援助，需要数月甚至数年才会落地。而这些态势可能促使俄总统做出了签署扩军法令的决心。普京突然签令扩军 13.7 万，外媒炸锅了"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F80\u002Fv2-c39b157cfab218d5454f69b2d3859266_1440w.png"},"metricsArea":{"text":"262 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550015026"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NTA5Mjk3IIOXoJgGMAw4jQJADXIJNTUwMDE1MDI2eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"14_1661501821.3370833","cardId":"Q_548865736","feedSpecific":{"answerCount":150},"target":{"titleArea":{"text":"「大旱之后必有大震」的理论站得住脚吗？如何从科学角度进行解释？"},"excerptArea":{"text":"罕见的高温让更多人担忧起全球变暖。与此同时，各种耸人听闻的谣言也接连出现，比如「高温让臭氧细菌感染加剧」「三伏天汗出透了能排毒」。 其中最离谱的、恐吓架势最足的，是警告大家「大旱之后有大震」的「旱震理论」。不少人信以为真，相关内容被大量转发。 倒不是大家辨别能力的问题。只是这个「旱震理论」真的有模有样：不仅有百度百科的词条，提出者还有地震科学家的头衔，甚至还就此出版了一本书，书中列出了相当多的数据来论证——通过分析 1957 年至 1971 年中国降水量的资料，他得出结论：在中国大地震前 1 至 3 年半内，震中区往往是干旱区。 但这个理论真的立得住吗？ 只要时空范围够大，总能中一次 根据「旱震理论」提出者的研究，全国大旱之后 3 年内有大震的概率高达 84.8%，只有 15.2% 的旱区在灾后 3 年内没有发生大地震。 我们首先来看看他所说的旱区是什么？ 《中国旱震关系研究》中关于「旱区」定义的截图 25.2 万平方公里有多大？相当于江浙沪三地陆地面积的总和。 这么大的圈意味着，如果城市 A 今年发生了大旱，而远在 283 公里外的城市 B 如果发生了大地震，就能证明「旱震理论」的有效性。 另一个不易被察觉的放大条件是「旱灾后 1 至 3 年」。 统计一下就会发现，在过去的一百多年内，中国许多区域发生旱灾的次数并不少。再加上「未来 3 年」这个条件，有的地方甚至大多数时候都处在该理论所说的可能会发生大地震的时段。 以发生过大地震的汶川为例，在 1900 年至 2013 年这 114 年中，汶川有 58 年都处于大旱或大旱后的 3 年内，占比超过一半。如果大地震发生的年份落入这 58 年中，「旱震理论」就可以宣告有效。事实上，在汶川大地震发生的前一年，周边就正好发生了大旱。 这也是为什么，早在 2011 年，时任中国地震台网中心地震预报部副主任张永仙在接受媒体采访时就说，利用干旱和气候异常预测地震，虚报率很高，很难用于震前预测。 根据该理论提出者自己的统计，大地震前 3 年半内有大旱的比例是 96.6%，可谓是「大震前必有大旱」。 《中国旱震关系研究》截图 但如果把统计时间拉长，结果就没那么「准了」。根据我们的统计，从 1900 年至 2013 年，中国大陆共发生过 142 次 6 级及以上的大地震，而这其中，大震之前 1 至 4 年（因大旱数据未精确到月，我们在统计中把理论中的 3 年半放宽到 4 年）为旱区的情况有 79 次，仅占一半出头。 而之所以还会有这 56% 的占比，也离不开前文提到的足够大的时空范围。一把巨大而刻度稀疏的尺子，你能指望它有多精确呢？ 至于反过来， 不过如果要说以上的统计还有什么可以商榷的，那就是地震的中心不一定是大旱的中心。所以这次我们画一个更大的圆。 这么一个面积达 100 多万平方公里的圆，超过中国领土面积的十分之一，统计结果依然是：1297 次大旱，1 至 3 年后发生大震的次数是 119 次，仅占 9%。 除了「旱震理论」，民间还流传着许多地震发生的前兆，比如「地震云」「雾霾预示地震」。但专家对此表示，首先要有充分的事实证明二者间内在关联性的存在，其次要能找出合理的物理理论论证二者的关联。只有符合这两个条件，才能证明这些现象与地震确实存在关联。 举一个极端的例子：齐齐哈尔发生旱灾的那几年，当地人上网搜「老虎」的频次异常高。按照「旱震理论」的逻辑，这里或许隐藏着一个「大旱老虎理论」：大旱发生之后，齐齐哈尔人就会陷入对老虎的痴迷之中。 同样地，还有「干旱螃蟹理论」：邯郸人在发生大旱的时候，特别关心螃蟹过得怎么样。 至少到目前为止，科学家们还没有监测到任何大地震发生前似乎必定会有的信号。 而目前人类能做到的，只有在地震发生之后，向地震横波尚未到达的可能受灾区域，提前数秒至几十秒发出警报信息。"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F80\u002Fv2-bfad9eff95d5e470f65b0d1352f6ce34_1440w.png"},"metricsArea":{"text":"229 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F548865736"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDg0MjUzODIxIOH185cGMAk42ARADnIJNTQ4ODY1NzM2eACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"15_1661501821.3385003","cardId":"Q_549790307","feedSpecific":{"answerCount":195},"target":{"titleArea":{"text":"芬兰女总理马林在其总理官邸传出两名女子不雅照，该事件对她的政治生涯有何影响？"},"excerptArea":{"text":"据 BBC8 月 24 日报道，丑闻缠身的芬兰总理桑娜·马林（Sanna Marin）近日又被曝出在总理宫邸开派对，其中两名女子裸露胸部并互相亲吻的照片流出。马林随后为这张「不合适」的照片道歉，表示照片于今年 7 月拍摄，并无特别的事情发生。 据芬兰媒体报道，这些在总理宫邸拍摄的不雅照被曝光至社交媒体。在照片当中，可以看到两名衣着火辣的女性互相亲吻，同时用一块写着“芬兰“的标志遮挡彼此裸露的胸部。本周一，马林出面表示，该照片于今年 7 月在总理宫邸拍摄。 然而当地媒体指出，这张极具争议性的照片是于总理宫邸楼下厕所拍摄的。马林回应并谴责称，这是在当月的 Ruisrock 音乐节结束之后拍摄的：「我们一起蒸桑拿、游泳和共度时光，那种照片不应该被拍，聚会上没有什么特别的事情发生。」不过她确实承认这张照片「不合适」，并为此道歉。 BBC 报道称，图中两名女子均是马林的客人。 此前，马林曾被德国《图片报》称为世界上「最酷的政治家」。除了本次报道中的不雅照事件以外，最近她在一次聚会上跳舞、唱歌和喝酒的相关视频在网上也引起了轩然大波。不过在视频曝光之初，马林就表示：「我没有吸毒，除了喝酒，我也没有吃任何东西。我跳舞、唱歌、开派对、拥抱我的朋友…这些都是完全合法的事情。我没有什么东西需要隐瞒，并且我会坚定决心继续做自己。」 据悉，芬兰 36 岁的总理马林于 2019 年上台，迄今为止为世界上最年轻的总理。许多芬兰人都为马林的个人风格着迷，包括她的穿着和生活方式。然而近期马林由于个人私生活频遭曝光，露骨画面令芬兰国内外民众应接不暇，引发极大争议。总理官邸传出两名女子不雅照，芬兰女总理道歉"},"imageArea":{"url":"https:\u002F\u002Fpica.zhimg.com\u002F80\u002Fv2-4769d92de3efc146db279331b1ff62ba_1440w.png"},"metricsArea":{"text":"213 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549790307"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDg0NDU5NDg2IIS0l5gGMCo4lgNAD3IJNTQ5NzkwMzA3eACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"16_1661501821.3394108","cardId":"Q_543217119","feedSpecific":{"answerCount":76},"target":{"titleArea":{"text":"电影《隐入尘烟》里的马有铁勤劳能干、有生产资料，为什么会是全村最穷的人？"},"excerptArea":{"text":"非农村出生，可能问题有点二？确实不明白，求解答~"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F80\u002Fv2-64d1276b0e2a0e53ce4a829dc189d824_1440w.png"},"metricsArea":{"text":"197 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F543217119"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDgyOTk3MTkyIJ6EvpYGMAg4ogFAEHIJNTQzMjE3MTE5eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"17_1661501821.3399742","cardId":"Q_549751687","feedSpecific":{"answerCount":163},"target":{"titleArea":{"text":"如何评价《原神》3.0 版本最新魔神任务主线剧情？"},"excerptArea":{"text":"请不要将问题笼统的改成对须弥主线的评价，修改还请麻烦说明一下是前两幕，3.0 未须弥主线内容未更新完全，谢谢"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F50\u002Fv2-91b406b55de31b3ee7663037ef125644_b.jpg"},"metricsArea":{"text":"171 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549751687"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDUwODc1INyvlpgGMAY4hwJAEXIJNTQ5NzUxNjg3eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"18_1661501821.3405566","cardId":"Q_549982930","feedSpecific":{"answerCount":97},"target":{"titleArea":{"text":"2022 KPL 夏季赛武汉 eStar Pro 4:1 重庆狼队，如何评价这场比赛？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F50\u002Fv2-22ee21d1426099843e31d75b77869e6a_b.jpg"},"metricsArea":{"text":"156 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549982930"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NTAyMjQ3IIP1nZgGMAA4bEAScgk1NDk5ODI5MzB4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"19_1661501821.3413372","cardId":"Q_550017654","feedSpecific":{"answerCount":51},"target":{"titleArea":{"text":"我国亚轨道运载器重复使用飞行试验取得圆满成功，你对此项科技有哪些期待？"},"excerptArea":{"text":"2022 年 8 月 26 日，由中国航天科技集团有限公司所属中国运载火箭技术研究院自主研制的升力式亚轨道运载器重复使用飞行试验获得圆满成功。 飞行试验采用的运载器，经健康检测维护后，在酒泉卫星发射中心再次点火垂直起飞，按照设定程序完成亚轨道飞行，平稳水平着陆于阿拉善右旗机场，成功实现我国亚轨道运载器的首次重复使用飞行。本次飞行试验的圆满成功，有力推动了我国航天运输技术由一次性使用向重复使用的跨越式发展。"},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F80\u002Fv2-778de340742fc3972fef75f2a32b2fbe_1440w.png"},"metricsArea":{"text":"156 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550017654"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDg0NTA5ODk3IOmioJgGMAU4ywFAE3IJNTUwMDE3NjU0eACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"20_1661501821.3421223","cardId":"Q_549216943","feedSpecific":{"answerCount":66},"target":{"titleArea":{"text":"32 岁在私企每月工资一万二，还有必要考公务员吗?"},"excerptArea":{"text":"32 岁，未婚，家境一般，目前在私企，12000 月薪，有必要去考公务员？有些纠结。"},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F50\u002Fv2-345e4f94a2dcff5ce88471d46f720734_b.jpg"},"metricsArea":{"text":"155 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549216943"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDg0MzMxODY5IIHVgZgGMAU4ggFAFHIJNTQ5MjE2OTQzeACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"21_1661501821.3429458","cardId":"Q_547535589","feedSpecific":{"answerCount":130},"target":{"titleArea":{"text":"外卖员迟到一个半小时导致我没吃到午饭，我给了差评，却被指责不懂共情，我真的错了吗?"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic2.zhimg.com\u002F80\u002Fv2-675793d9cb64b013c9c02db1156ae078_1440w.png"},"metricsArea":{"text":"155 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F547535589"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDgzOTU3Nzk4ILqIw5cGMBA4iwFAFXIJNTQ3NTM1NTg5eACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"22_1661501821.3436756","cardId":"Q_549974548","feedSpecific":{"answerCount":207},"target":{"titleArea":{"text":"芬兰总理哽咽回应丑闻「我也是人，也需要寻找快乐」，如何看待芬兰总理的热舞风波？"},"excerptArea":{"text":"近日，芬兰总理桑娜·马林（Sanna Marin）因「热舞视频」「官邸不雅照」陷入争议，她当地时间 24 日含泪再次回应：「我也是人，也需要寻找快乐」。 当地时间 8 月 24 日，马林在社会民主党会议上发表讲话时哽咽。 \t 据《卫报》报道，当地时间 24 日，马林在社会民主党会议上讲话时对过去一周的描述是「非常艰难」。 \t 马林坚称，作为芬兰总理她努力工作，但也应该享有私人生活。 \t 马林讲话时眼眶含泪、声音哽咽，仿佛要哭出来了，她表示，「我也是人」，有时也渴望「在乌云中寻找快乐、光明和乐趣」。 \t 她补充说，自己并未耽误任何一天的工作，「我相信人们会关注我们在工作中所做的事，而不是我们的业余生活」。 \t 马林强调，自己没有也不会留下未完成的任务，「直到现在这一刻，我都一直在做好自己的工作。我正在考虑乌克兰，我正在考虑你们，我正在做我的工作」。 \t 据此前报道，上周，马林与朋友在派对上狂欢热舞的视频泄露，视频背景音中还疑似提到毒品，掀起轩然大波。 在视频泄露后，马林承认自己喝过酒，但坚决否认吸毒，并表示，没有看到参加派对的任何人吸毒。芬兰总理办公室当地时间 22 日透露，马林的药检结果呈阴性。 \t 然而「热舞视频」风波还未过去，马林又因一张拍摄于总理官邸的不雅照片陷入麻烦。当地时间 23 日，马林承认照片属实，并为此道歉。她说：「这种照片本不该拍摄出来，但除此之外，聚会上没有发生其他特别的事情。」 \t《卫报》报道称，当被问及是否会改变自己的行为时，马林表示，她个人认为「政客也有空闲时间，和我们的朋友一起度过没有任何问题」。 \t 反对者称马林这种行为是「不恰当的」，并表示，她对身边的朋友缺乏判断力，泄露照片和视频可能会使她受到批评甚至敲诈。但有许多人捍卫她参加派对的权利。"},"imageArea":{"url":"https:\u002F\u002Fpic2.zhimg.com\u002F80\u002Fv2-48ae330c7880b3d2c39d1e2c91ab457e_1440w.png"},"metricsArea":{"text":"155 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549974548"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDg0NTAwNDA0INXVnZgGMBg41QJAFnIJNTQ5OTc0NTQ4eACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"23_1661501821.3448184","cardId":"Q_549630500","feedSpecific":{"answerCount":20},"target":{"titleArea":{"text":"长春航展开幕，歼 -20 、运 -20 亮相，你觉得长春航展与珠海航展有哪些不同？"},"excerptArea":{"text":"长春航展开幕，歼 -20 、运 -20 、歼 -16 都会亮相。而且今年的珠海航展也会如期举行，大家觉得长春航展与珠海航展有哪些不同？"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-306edc3ac5b826766bcb6e0f6a1767ce_1440w.jpg?source=1940ef5c"},"metricsArea":{"text":"155 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549630500"}},"attachedInfo":"ClQIkZ\u002FQxI2o1vgvEAMaCDg0NDIzODk1IL\u002FykZgGMAU4KkAXcgk1NDk2MzA1MDB4AKoBCWJpbGxib2FyZNIBAPIBEwgBEg9kb21haW5fb3BlcmF0b3I="},{"type":"hot_list_feed","styleType":"1","id":"24_1661501821.3455176","cardId":"Q_550039643","feedSpecific":{"answerCount":48},"target":{"titleArea":{"text":"南京女大学生被害案 8 月 26 日二审，女生父亲称「拒绝一切赔偿只求维持死刑」，二审改判可能性大吗？"},"excerptArea":{"text":"8 月 26 日，南京女大学生李某月被害案在西双版纳中级人民法院二审。此前，3 名被告洪峤、张晨光、曹泽青在 7 月 7 日一审被判处死刑，其中洪峤数罪并罚被决定执行死刑，张晨光、曹泽青被判处死刑缓期二年执行，三人均提出上诉。 李某月父亲李胜介绍，女儿已被带回老家安葬，妻子至今未能走出阴影，几乎完全不与外人交流，时常情绪奔溃；他反复告诉自己要坚强，到处在奔走，但夜深人静的时候总是躲在阳台抽烟、流泪。李胜说，为了避免睹物思人，女儿的衣服全部被捐出，照片全部随着下葬，家里没敢留一件纪念物。他说洪峤一审时否认所有指控，并申请精神鉴定，他拒绝了一切赔偿只要求维持死刑。南京女大学生被害案二审 女生父亲：9 天后是她生日 希望维持原判"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-dd094db11de8739a7b6e8f7e09d87d36_1440w.png"},"metricsArea":{"text":"154 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550039643"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NTE0NzMzIPa+oJgGMAc4lAFAGHIJNTUwMDM5NjQzeACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"25_1661501821.3462205","cardId":"Q_549949734","feedSpecific":{"answerCount":251},"target":{"titleArea":{"text":"生活中有哪些让幸福值瞬间拉满的健康小神器？"},"excerptArea":{"text":"健康安心的生活才是幸福的起点，这背后有时候还需要得益于一些居家健康小神器的助力，既能够守护我们的健康还能瞬间提高生活幸福感。不知道大家都入了什么值得推荐的健康神器呢？又给生活带来了怎样的幸福感的提升？欢迎大家来分享自己的幸福故事～"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F50\u002Fv2-3d5f94a5fee5931b345f19f4d574371d_b.jpg"},"metricsArea":{"text":"107 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549949734"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDk0ODgzINDznJgGMAA42gJAGXIJNTQ5OTQ5NzM0eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"26_1661501821.3467362","cardId":"Q_549881530","feedSpecific":{"answerCount":287},"target":{"titleArea":{"text":"金铲铲之战一周年了，分享下你遇到过的神级阵容和操作？"},"excerptArea":{"text":"金铲铲之战已经陪伴我们一年了，在过去的不同版本中，时有令人惊艳的阵容和操作出现。大家遇到过的神级阵容，是在时空裂缝里重回三星亚索，还是九剑下天山？又或是在巨龙之巢里养出三星奶妈？在「弈」周年之际，诚邀大家一起分享神级阵容和操作，各位大佬也可以讲讲自己的运营思路，分享真知灼见。脑力博弈，好运常在！"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F50\u002Fv2-203e309423a04ca5dbcc0119419d631e_b.jpg"},"metricsArea":{"text":"105 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549881530"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDc5NzkyIKWsm5gGMAA4wQJAGnIJNTQ5ODgxNTMweACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"27_1661501821.3473427","cardId":"Q_549662320","feedSpecific":{"answerCount":48},"target":{"titleArea":{"text":"国产少女漫画《怦然心动》完结，如何评价这部作品?"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F50\u002Fv2-a18e4cd2da5ac69ebbf02205ece54f36_b.jpg"},"metricsArea":{"text":"103 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549662320"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDMwOTk5INLKkpgGMAA4RkAbcgk1NDk2NjIzMjB4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"28_1661501821.3477547","cardId":"Q_549754907","feedSpecific":{"answerCount":36},"target":{"titleArea":{"text":"Q2 中国高端智能手机份额排行出炉：苹果占比 46% 稳居第一，华为依然跻身前三，对此你如何看待？"},"excerptArea":{"text":"8 月 24 日消息，今日，Counterpoint Research 发布报告称，中国高端智能手机市场（批发价 400 美元约合人民币 2750 元及以上）的销量份额从 2021 年第二季度的 31% 微升至 2022 年第二季度的 33%。 IT 之家了解到，报告指出，与整体市场的 14% 同比下降相比，高端市场的销量（包括准高端、高端和旗舰高端细分市场）仅下降了 10%。600-799 美元的高端（约合人民币 4100-5470 元）和 1000 美元及以上的旗舰高端（约合人民币 6850 元）的细分市场在 2022 年第二季度均录得增长。 数据显示，2022 年第二季度中国高端智能手机份额前六位分别为苹果（46%）、 vivo（13%）、华为（11%）、荣耀（ 9%）、小米（ 8%）、 OPPO（ 8%）。 Counterpoint 表示，2022 年第二季度，前六大 OEM 占据了整个高端市场 95% 的份额。与此同时，vivo 销量同比增长 91%，取代了华为首次在中国高端市场占据第二位。"},"imageArea":{"url":"https:\u002F\u002Fpic2.zhimg.com\u002F50\u002Fv2-e0822b0f61016908e17533f26090adab_b.jpg"},"metricsArea":{"text":"100 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549754907"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDUxNjAwIPW5lpgGMBA4YEAccgk1NDk3NTQ5MDd4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"29_1661501821.3485386","cardId":"Q_549102585","feedSpecific":{"answerCount":43},"target":{"titleArea":{"text":"为什么老龄化严重的日本，文化产品的题材却十分青少年化？"},"excerptArea":{"text":"比如日本 ACG 产品，大量以青少年和幼态外表的角色为主角。对比别国的文化产业和产品（好莱坞，宝莱坞，英剧，韩剧，音乐，主播，偶像，网文，时装，奢侈品······），从题材与受众的针对性来看，很容易产生问题里这种感觉 附：各国中位数年龄"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-39999e2b6066a275a9fe4550b5985ea3_720w.gif"},"metricsArea":{"text":"89 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549102585"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0MzA2NDU1IKf+\u002FJcGMAI4UEAdcgk1NDkxMDI1ODV4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"30_1661501821.3492124","cardId":"Q_550073179","feedSpecific":{"answerCount":132},"target":{"titleArea":{"text":"如何看待 00 后男同事因「失恋快死掉了」请假 0.5 天这件事？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F80\u002Fv2-5278ff01cbd5bdea7a2b24612cbbf98e_1440w.png"},"metricsArea":{"text":"87 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550073179"}},"attachedInfo":"ClUIkZ\u002FQxI2o1vgvEAMaCDg0NTIyMjAzIMyIoZgGMAs4ugFAHnIJNTUwMDczMTc5eACqAQliaWxsYm9hcmTSAQDyARMIARIPZG9tYWluX29wZXJhdG9y"},{"type":"hot_list_feed","styleType":"1","id":"31_1661501821.349835","cardId":"Q_482967292","feedSpecific":{"answerCount":311},"target":{"titleArea":{"text":"程序员兄弟们生涯中写过最大的 bug 是什么？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F80\u002Fv2-3e19cfdfe2d7340383cb61135de45f67_1440w.jpg?source=1940ef5c"},"metricsArea":{"text":"84 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F482967292"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDY5NjA3OTYyIKXDo4kGMAU43BBAH3IJNDgyOTY3MjkyeACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"32_1661501821.3504062","cardId":"Q_549684718","feedSpecific":{"answerCount":44},"target":{"titleArea":{"text":"哪些细节设计能让汽车更接近艺术品？"},"excerptArea":{"text":"历史上，出现过无数的汽车车型。但只有极少数汽车超越了交通工具的属性，成为了人们心中无与伦比的艺术品。那些被称为艺术品的汽车都有哪些特征？究竟是哪些设计细节助力它们突破了汽车的上限？"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F50\u002Fv2-2e1ce6034a58b4aae80d150ace9701ee_b.jpg"},"metricsArea":{"text":"82 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549684718"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDM1OTc2IJmjk5gGMAA4iwFAIHIJNTQ5Njg0NzE4eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"33_1661501821.3508828","cardId":"Q_549927722","feedSpecific":{"answerCount":134},"target":{"titleArea":{"text":"有哪些人生必看的影视剧 \u002F 书籍？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic4.zhimg.com\u002F50\u002Fv2-f9368ee5d6062d104026197e40a25781_b.jpg"},"metricsArea":{"text":"81 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549927722"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDkwMDA1ILe2nJgGMAE4wQJAIXIJNTQ5OTI3NzIyeACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"34_1661501821.3513646","cardId":"Q_549774832","feedSpecific":{"answerCount":41},"target":{"titleArea":{"text":"如何看待报告称欧洲可能正经历 500 年来最严重的干旱？情况有这么严重吗？"},"excerptArea":{"text":"欧盟 23 日发布最新旱情报告，显示今年 8 月欧盟及英国旱情加剧，总计 64% 的领土受干旱波及，处于「干旱预警」或「干旱警告」状态。 当日欧盟委员会联合研究中心发布「2022 年 8 月欧洲旱情报告」，指出 8 月欧洲多地旱情严峻，欧盟及英国 47% 的领土处于「干旱预警」状态，即降雨量较往年偏少，土壤含水量不足；17% 的领土处于「干旱警告」状态，即旱情已对植被和农作物产生负面影响。 报告预计，尽管近日欧洲一些地区出现降雨，当地旱情得以缓解，但直到今年 11 月，西欧—地中海地区气温可能较往年偏高，气候更加干燥；整体而言，欧盟委员会联合研究中心初步评估今年欧洲旱情或为「500 年一遇」。"},"imageArea":{"url":"https:\u002F\u002Fpic1.zhimg.com\u002F80\u002Fv2-3289e3f12ba363e3f0c922b676838adb_1440w.png"},"metricsArea":{"text":"81 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549774832"}},"attachedInfo":"ClQIkZ\u002FQxI2o1vgvEAMaCDg0NDU2MDQ0II6Hl5gGMAU4WEAicgk1NDk3NzQ4MzJ4AKoBCWJpbGxib2FyZNIBAPIBEwgBEg9kb21haW5fb3BlcmF0b3I="},{"type":"hot_list_feed","styleType":"1","id":"35_1661501821.3522081","cardId":"Q_549624481","feedSpecific":{"answerCount":25},"target":{"titleArea":{"text":"黑猫警长邮票即将发行，是你的童年吗？你会去收藏吗？"},"excerptArea":{"text":"中国邮政定于 9 月 3 日发行《动画——黑猫警长》特种邮票。邮票一套 5 枚，计划发行 630 万套，全套邮票面值 5.20 元。这套邮票表现了动画中制服强盗、捉捕恶鹰、保卫家园、并肩作战、大获全胜的故事情节。你最喜欢哪一款？ （来源：央视新闻微博）"},"imageArea":{"url":"https:\u002F\u002Fpica.zhimg.com\u002F80\u002Fv2-d3f55b820e2c1c56d55ea94ce12addef_1440w.png"},"metricsArea":{"text":"81 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549624481"}},"attachedInfo":"ClQIkZ\u002FQxI2o1vgvEAMaCDg0NDIyNTE2IKjfkZgGMAE4GkAjcgk1NDk2MjQ0ODF4AKoBCWJpbGxib2FyZNIBAPIBEwgBEg9kb21haW5fb3BlcmF0b3I="},{"type":"hot_list_feed","styleType":"1","id":"36_1661501821.3530629","cardId":"Q_549978424","feedSpecific":{"answerCount":41},"target":{"titleArea":{"text":"俄罗斯防长称「俄军放慢进攻速度是有意为之，为尽量减少平民伤亡」，对此你怎么看？"},"excerptArea":{"text":"今年 2 月 24 日，俄罗斯总统普京宣布俄军在乌克兰东部顿巴斯地区展开「特别军事行动」。到如今，这场俄乌冲突已经持续了半年时间。 \t 当地时间 8 月 24 日，俄罗斯国防部长绍伊古在参加上海合作组织国防部长会议时表示，俄军在乌克兰展开「特别军事行动」期间放慢进攻速度是一个「有意识的决定」，这是出于尽量减少平民伤亡的目的，但乌军在此期间却使用「焦土战术」，公然违反国际准则。 \t 他还表示，俄乌冲突让美西方国家从战略上遏制俄罗斯找到了借口，尽管俄方作出了努力，但西方却忽视俄罗斯关切的根本性问题，这也让这场冲突就此发生，乌克兰沦为西方的「战争工具」。 据俄新社报道，绍伊古在当天的会议上说：「在特别行动中，我们严格遵守人道主义准则，所采取的打击是使用高精度武器针对乌克兰武装部队的军事基础设施目标——指挥所、机场、仓库、防御区域、军工综合体设施。」 \t「同时，我们尽一切努力避免平民伤亡。这无疑减缓了进攻的速度，但我们是‘有意识这样做的’。」绍伊古指出，俄军在「解放区」开展了系统性工作，以在那里建立和平稳定的生活。「我们提供了人道主义援助，重建基础设施和生命支援系统。」 \t 绍伊古表示，与之相反的是，乌克兰军队却使用了「焦土战术」，公然违反国际准则，充当了恐怖分子的角色。他说：「他们把居民区、学校、医院和幼儿园当作火力阵地，在那里部署坦克和火炮，以居民作为人盾。他们还有针对性地炮击居民区并布置地雷，显然是为了尽可能多地伤害平民和基础设施。」 \t 据塔斯社报道，在谈及这场已经持续六个月的俄乌冲突时，绍伊古认为，这场冲突成为了美国及其盟友对俄罗斯发动经济战和信息战的又一个借口。 「今天对俄罗斯发动的严厉制裁和信息战，俄乌冲突只是又一个借口，美国及其同伙的既定目标是从战略上消耗俄罗斯，以消除竞争态势，并警告其他奉行独立自主外交政策的国家。」 \t 绍伊古指出，俄罗斯为在全新条件下建立欧洲稳定的法律基础作出了重大努力，然而以美国为首的西方国家却拒绝考虑俄方对于相互之间安全保障的担忧，首当其冲的就是乌克兰的中立地位问题。 \t 他表示，对于俄方而言的根本问题——北约不再东扩、北约不部署进攻性武器以及北约不在俄罗斯边境附近开展军事活动，这些都被西方忽视了，而乌克兰则被西方选为对俄发动混合战争的工具。"},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F80\u002Fv2-169dd113abd0193819efae3ed1059ec3_1440w.png"},"metricsArea":{"text":"81 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549978424"}},"attachedInfo":"ClQIkZ\u002FQxI2o1vgvEAMaCDg0NTAxMjYzIM7lnZgGMAI4LkAkcgk1NDk5Nzg0MjR4AKoBCWJpbGxib2FyZNIBAPIBEwgBEg9kb21haW5fb3BlcmF0b3I="},{"type":"hot_list_feed","styleType":"1","id":"37_1661501821.3540816","cardId":"Q_549626219","feedSpecific":{"answerCount":60},"target":{"titleArea":{"text":"如何看待民警抓捕现场遇涉毒嫌疑人的孩子，收起手铐，演绎「善意的谎言」？"},"excerptArea":{"text":"8 月 17 日，云南红河移民管理警察抓捕一名涉嫌吸毒人员张某时，现场张某的女儿突然出现，民警立刻悄悄收起手铐。担心女孩看出破绽，在送女孩回家路上，民警说用善意的谎言保护女孩。"},"imageArea":{"url":"https:\u002F\u002Fpicx.zhimg.com\u002F80\u002Fv2-23e92f03e10db8476d15c08ada51d7d6_1440w.png"},"metricsArea":{"text":"81 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"trend","trend":0,"nightColor":"#B7302D","normalColor":"#F1403C"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549626219"}},"attachedInfo":"ClQIkZ\u002FQxI2o1vgvEAMaCDg0NDIyOTA1IKXlkZgGMAk4bUAlcgk1NDk2MjYyMTl4AKoBCWJpbGxib2FyZNIBAPIBEwgBEg9kb21haW5fb3BlcmF0b3I="},{"type":"hot_list_feed","styleType":"1","id":"38_1661501821.354937","cardId":"Q_549744074","feedSpecific":{"answerCount":88},"target":{"titleArea":{"text":"除了公考上岸，还有哪些发展前景广，福利待遇好的行业？"},"excerptArea":{"text":"公考以外，还有哪些发展前景广，福利待遇好的行业？大家都在观望哪些城市的机会？"},"imageArea":{"url":""},"metricsArea":{"text":"81 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549744074"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDg0NDQ5MTgyIL6YlpgGMAM4lwFAJnIJNTQ5NzQ0MDc0eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"39_1661501821.355349","cardId":"Q_549343141","feedSpecific":{"answerCount":26},"target":{"titleArea":{"text":"哪四队最有可能代表 LPL 前往 S12 世界赛？"},"excerptArea":{"text":"RNG 目前积分为 130，想进入世界赛需要 ［ TES 拿夏冠、 EDG 亚军且 V5 排名非前三。］ 如果打冒泡赛也会有胜者组跟败者组里出发，败者组出发需要 ［ EDG 冠军、 JDG 亚军、 V5 季军、 TES 殿军。］ TES 只要拿到前二都能进世界赛，拿到第三只要亚军不是 V5 也能进。 但如果 TES 第四还想保送世界赛，那必须 EDG 亚军、 V5 不是第三才能保送。 保底是冒泡赛胜者组。 V5 拿到亚军就有世界赛名额。 拿到第三名只要亚军是 EDG，也有世界赛名额。 果没有同时达成 EDG 冠军、 JDG 亚军、 TES 第四名，那么 V5 会从冒泡赛胜组开始打。 如果季后赛没拿到前三，保底有冒泡赛败者组能打。 EDG EDG 只要拿到第二，只要 TES 不是第四，EDG 将从冒泡赛胜者组出发。 EDG 如果拿到第三，第四名必须是 LNG 或 JDG，EDG 才会从冒泡赛胜者组出发。 EDG 如果拿到第四，就只能从冒泡赛败者组开始打。 JDG 想保送必须拿到第二名以及 TES 是第四名，就能依靠积分保送。 JDG 只要拿到第二就有冒泡赛胜者组。如果第三只要 TES 不要第四，也是胜者组。 如果 JDG 拿到第四名，冒泡赛败者组。 LNG 想通过积分保送，必须最少拿到亚军，且冠军为 TES，其他组合都没办法。不过虽然不能保送，但保底会有冒泡赛胜者组。 如果拿到第三只要第四名不是 TES，冒泡赛胜者组开始打。 如果没有前三得打冒泡赛败者组。"},"imageArea":{"url":"https:\u002F\u002Fpic2.zhimg.com\u002F50\u002Fv2-f0ed5b2b59a5333c77ef9c0f4de8eb57_b.jpg"},"metricsArea":{"text":"80 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549343141"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0MzYwMDEwIJCwh5gGMAA4GkAncgk1NDkzNDMxNDF4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"40_1661501821.356249","cardId":"Q_550066451","feedSpecific":{"answerCount":21},"target":{"titleArea":{"text":"拜登签署实施芯片法行政令，中方此前已明确表示坚决反对，该法案出台后将产生怎样的影响？"},"excerptArea":{"text":"当地时间 8 月 25 日，美国总统拜登签署一项旨在实施《2022 年芯片和科学法案》的行政命令。关于该法案，中国外交部、商务部此前已明确表示，中方坚决反对扰乱国际贸易。 根据白宫网站，拜登 25 日签署的行政令设置了实施《芯片和科学法案》的 6 个优先事项，还设立了一个由 16 人组成的跨部门指导委员会，由美国总统国家安全事务助理沙利文等 3 人共同担任主席，其他成员包括美国国务卿布林肯、财长耶伦、防长奥斯汀以及商务部长雷蒙多等。 就在十几天前，拜登 8 月 9 日将《芯片和科学法案》签署成法律，他当时在法案签署仪式上的讲话中多次明确提到中国。该法案向在美国的芯片制造企业提供巨额补贴的同时，要求这些企业必须同意「不在中国发展精密芯片的制造」。 对此，中国外交部发言人汪文斌 10 日斥责，美国这个法案宣称旨在提升美科技和芯片业竞争力，但却对美国本土芯片产业提供巨额补贴，推行差异化产业扶持政策，包含一些限制有关企业在华正常投资与经贸活动、中美正常科技合作的条款，将对全球半导体供应链造成扭曲，对国际贸易造成扰乱，中方对此表示坚决反对。该法所谓「保护措施」，呈现出浓厚的地缘政治色彩，是美国大搞经济胁迫的又一例证。 中国商务部新闻发言人束珏婷 18 日表示，美方出台《芯片和科学法案》，对美本土芯片产业提供巨额补贴和税收优惠，是典型的差异化产业扶持政策。其中部分条款限制有关企业在华正常经贸与投资活动，具有明显的歧视性，严重违背了市场规律和国际经贸规则，将对全球半导体供应链造成扭曲，对国际贸易造成扰乱。中方对此坚决反对。美方法案的实施应符合世贸组织相关规则，符合公开、透明、非歧视的原则，有利于维护全球产业链供应链安全稳定，避免碎片化。中方将继续关注法案的实施情况，必要时采取有力措施维护自身合法权益。"},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F50\u002Fv2-f74eb805480bcb25a2471b6b5dcdaae7_b.jpg"},"metricsArea":{"text":"77 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F550066451"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NTIwNzQ0IID0oJgGMAI4LUAocgk1NTAwNjY0NTF4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"41_1661501821.3570817","cardId":"Q_549886348","feedSpecific":{"answerCount":65},"target":{"titleArea":{"text":"平常在网购时应该注意哪些问题？有哪些需要避坑的地方？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F50\u002Fv2-a6e5467d0941021e2865440d9db7b5e3_b.jpg"},"metricsArea":{"text":"72 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549886348"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDgwODQzIKi4m5gGMAA4S0Apcgk1NDk4ODYzNDh4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"42_1661501821.3574975","cardId":"Q_549950053","feedSpecific":{"answerCount":32},"target":{"titleArea":{"text":"如何看待「荣耀平板是华为平板的平替」这种言论，说法正确吗？"},"excerptArea":{"text":"刷视频看到不少博主说荣耀平板是华为平板的平替，预算不够买不了华为可以买荣耀平板试试，两者生态很接近，这种言论正确吗？华为和荣耀平板有哪些值得购买？"},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F50\u002Fv2-01e2aeca94496be9fd9a3135c5e389e7_b.jpg"},"metricsArea":{"text":"71 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549950053"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDk0OTU0IM70nJgGMAA4OUAqcgk1NDk5NTAwNTN4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"43_1661501821.3579779","cardId":"Q_549966820","feedSpecific":{"answerCount":62},"target":{"titleArea":{"text":"「金三银四」消失了，「金九银十」还有什么好的就业建议？"},"excerptArea":{"text":""},"imageArea":{"url":""},"metricsArea":{"text":"70 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549966820"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDk4NjY0IO6znZgGMAA4S0Arcgk1NDk5NjY4MjB4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"44_1661501821.3584154","cardId":"Q_549968800","feedSpecific":{"answerCount":38},"target":{"titleArea":{"text":"如何看待清华大学未来实验室「脑机绘梦」系统造物节首秀引热议，该技术有哪些想象空间和应用前景？"},"excerptArea":{"text":"8 月 25 日，一台清华大学未来实验室最新研究的「脑机绘梦」装置在造物节首发，这台装置可自动捕捉记录人的脑电波数值，并根据脑电数据生成一幅抽象的画。 「脑机绘梦」装置引来了雨果奖得主郝景芳前来现场一探究竟。郝景芳指着「脑机绘梦」生成的抽象画兴奋地表示，画面与她当时的心境有相通之处，「我自由翱翔在繁星点点的夜空下，下面是未来世界，人与自然、科技和谐相处。」 清华大学未来实验室主任徐迎庆解释，「脑机绘梦」系统是把这些脑电信号变成一个个绘画元素，生成一幅抽象画。当然，系统无法捕捉梦境或者人的思绪的具体内容。 据介绍，如果是好梦，「脑机绘梦」系统会生成色调明快、温暖的画面；如果是噩梦，生成的画面色调则偏冷偏暗，沉稳而幽静。 「脑机绘梦」系统由清华大学未来实验室的陈赟冰博士领衔研发，项目组的成员普遍比较年轻，学科背景也很多元，以计算机、脑科学、艺术设计等专业为主。陈赟冰介绍，目前系统内有十几种风格的抽象画作，这些画作有借鉴中西方大师的作品风格，也有自主艺术设计的创作。清华大学「脑机绘梦」系统亮相造物节 科幻作家现场实测"},"imageArea":{"url":"https:\u002F\u002Fpic3.zhimg.com\u002F50\u002Fv2-2662b0387bb73e138d058a7e0c2df1f8_b.jpg"},"metricsArea":{"text":"69 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549968800"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDk5MTA0ILe8nZgGMAE4TEAscgk1NDk5Njg4MDB4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"45_1661501821.3591592","cardId":"Q_400685460","feedSpecific":{"answerCount":69},"target":{"titleArea":{"text":"为什么随着生产力的发展进步，人性本质却没有多大改变？"},"excerptArea":{"text":"人类的行为似乎从原始社会就被锁定，尽管生产方式、生活方式、道德观念不断发展，它的外在形式发生了改变，本质却变化不大。"},"imageArea":{"url":"https:\u002F\u002Fpicb.zhimg.com\u002F50\u002Fv2-cb5e24d8d222db8ff1c5c86f14a321e8_b.jpg"},"metricsArea":{"text":"67 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F400685460"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDUxMzIwMjI2IL+phPcFMAE4ekAtcgk0MDA2ODU0NjB4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"46_1661501821.3596206","cardId":"Q_549932127","feedSpecific":{"answerCount":70},"target":{"titleArea":{"text":"如何看待数据显示「100 万 00 后开网店创业」，当代年轻人的择业观念发生了哪些变化？"},"excerptArea":{"text":"今年第一批 00 后走出校园，走进职场。00 后逐渐成为当下职场的新兴血液和澎湃力量，在更新换代之下，00 后们对于职场一些新的观念和态度，渐渐引起了广大关注。 不同于老一辈按部就班的去公司上班，在职业选择上，00 后则表现得更加开放，据中国青年报调研数据显示，有 88.1% 的 00 后愿意尝试或正在灵活就业，九成 00 后正在发展或尝试做副业。00 后也渐渐成为当下创业的主力军。 清华经管学院与阿里研究院数据显示，淘宝 00 后商家数已接近 100 万。相当于每 10 个商家就有一个 00 后。00 后倾向于把自己的各种小兴趣爱好，与工作结合，寻找创业土壤。 数据显示，过去两年，淘宝天猫新增了 2100 多个实物商品叶子类目，并从中产生了超过 100 条过亿新赛道。而这些新赛道更多都是由 00 后为代表的年轻一代创造出来的。每 80 个年轻人就有 1 人在淘宝创业！00 后商家数已近 100 万 如何看待 100 万 00 后开网店创业，为何 00 后不爱给老板打工？相比起 80 后、 90 后创业者，00 后创业群体有哪些特点？"},"imageArea":{"url":"https:\u002F\u002Fpic2.zhimg.com\u002F50\u002Fv2-5f7a59ea477028ecc410f4956e162606_b.jpg"},"metricsArea":{"text":"67 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549932127"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDkwOTg4IJbDnJgGMAE4T0Aucgk1NDk5MzIxMjd4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"47_1661501821.3603847","cardId":"Q_549958222","feedSpecific":{"answerCount":26},"target":{"titleArea":{"text":"2022 年量子开发者大会开幕，国内量子计算行业应用技术发展到什么水平了？"},"excerptArea":{"text":"「量见未来」量子开发者大会 8 月 25 日在北京举办，政府部门、院士、专家、企业与会人士共同探讨量子计算未来发展。 这次大会有什么现实意义？我国量子计算行业目前的发展趋势如何？"},"imageArea":{"url":""},"metricsArea":{"text":"65 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549958222"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDk2NzgxIKaQnZgGMAA4IkAvcgk1NDk5NTgyMjJ4AKoBCWJpbGxib2FyZNIBAA=="},{"type":"hot_list_feed","styleType":"1","id":"48_1661501821.3609557","cardId":"Q_436793124","feedSpecific":{"answerCount":199},"target":{"titleArea":{"text":"皮肤修护能力不好跟熬夜有关吗？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic2.zhimg.com\u002F50\u002Fv2-244606e75997f33f4d520aac791cc70f_b.jpg"},"metricsArea":{"text":"65 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F436793124"}},"attachedInfo":"Cj8IkZ\u002FQxI2o1vgvEAMaCDU5MzQzODIwIJL0ov8FMAA4mQJAMHIJNDM2NzkzMTI0eACqAQliaWxsYm9hcmTSAQA="},{"type":"hot_list_feed","styleType":"1","id":"49_1661501821.361377","cardId":"Q_549839296","feedSpecific":{"answerCount":57},"target":{"titleArea":{"text":"8 月 24 日晚 kpl 夏季赛苏州 KSG 对战北京 WB，KSG 被零封，你怎么看待这场比赛？"},"excerptArea":{"text":""},"imageArea":{"url":"https:\u002F\u002Fpic4.zhimg.com\u002F50\u002Fv2-2b36601bd17c80a2c500af578a58df4d_b.jpg"},"metricsArea":{"text":"63 万热度","fontColor":"","background":"","weight":""},"labelArea":{"type":"text","text":"新","nightColor":"#FF9607","normalColor":"#FF9607"},"link":{"url":"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F549839296"}},"attachedInfo":"Cj4IkZ\u002FQxI2o1vgvEAMaCDg0NDcwMzU3IJjimJgGMAI4QEAxcgk1NDk4MzkyOTZ4AKoBCWJpbGxib2FyZNIBAA=="}],"guestFeeds":{"isFetching":false,"isDrained":false,"afterId":0,"items":[],"next":null},"followExtra":{"isNewUser":null,"isFetched":false,"followCount":0,"followers":[]},"hotDaily":{"data":[],"paging":{}},"hotHighlight":{"isFetching":false,"isDrained":false,"data":[],"paging":{}},"banner":{},"commercialBanner":{"show":false,"banner":{},"trackData":{}},"video":{"items":[],"next":null,"isLoading":false,"isDrained":false}},"upload":{},"video":{"data":{},"shareVideoDetail":{},"last":{}},"zvideos":{"campaignVideoList":{},"campaigns":{},"tagoreCategory":[],"recommendations":{},"insertable":{},"recruit":{"form":{"platform":"","nickname":"","followerCount":"","domain":"","contact":""},"submited":false,"ranking":[]},"club":{},"qyActivityData":{},"talkActivityData":{},"party2022ActivityData":{},"batchVideos":{},"contribution":{"selectedContribution":null,"campaign":null,"configs":{},"contributionLists":{},"recommendQuestions":{"isLoading":true,"paging":{"isEnd":false,"isStart":true,"totals":0},"data":[]},"questionSearchResults":{"isLoading":true,"paging":{"isEnd":false,"isStart":true,"totals":0},"data":[]}},"creationReferences":{},"zvideoCollection":{},"zvideoGrant":{},"collectData":{"isFetching":false,"list":[]},"videoSource":{"isLoaded":false}},"guide":{"guide":{"isFetching":false,"isShowGuide":false}},"reward":{"answer":{},"article":{},"question":{}},"search":{"recommendSearch":[],"topSearch":{},"searchValue":{},"suggestSearch":{},"attachedInfo":{"generalByQuery":{}},"nextOffset":{"generalByQuery":{}},"topicReview":{},"calendar":{},"scores":null,"majors":{},"university":{},"generalByQuery":{},"generalByQueryInADay":{},"generalByQueryInAWeek":{},"generalByQueryInThreeMonths":{},"peopleByQuery":{},"topicByQuery":{},"zvideoByQuery":{},"scholarByQuery":{},"columnByQuery":{},"liveByQuery":{},"albumByQuery":{},"eBookByQuery":{},"kmGeneralByQuery":{},"kmCourseByQuery":{},"customFilter":{"requestFinished":false,"keys":[],"tags":[]}},"creatorSalt":{"recommendQuestionList":[],"bannerList":[],"claimBannerList":[],"sites":[],"domains":{},"hasRecored":false,"hasClaim":false,"hasContributedList":[],"notContributedList":[],"contributesTotal":null,"previewPageTitle":"","previewPageContent":"","restContributionNumber":"-"},"publicEditPermission":{},"vessay":{"common":{"draftId":null,"source":{"type":null,"id":null},"autoSave":true,"blockUnload":true,"isCalibratingEditing":false,"editingTrackData":{"editingOutlines":[],"editingVideos":[]},"newAddMaterialData":{},"audioCache":{},"showTimbreRecordPanel":false},"loading":{"isLoading":true,"text":"开始初始化"},"player":{"currentTime":0,"totalTime":0,"playing":false,"containerSize":null},"library":{"material":{},"materialSearchResult":{},"music":{},"musicLibraryCategories":[],"musicUrls":{}},"track":{"trackData":{"dataVersion":1,"videoTrack":[],"audioTrack":[],"musicTrack":[],"voiceOverData":{}},"extra":{"themeId":null},"previewEditingTrackData":{"editingSubtitleItem":{},"editingVideoItem":{}},"selectedTrackItems":[],"outlineRemoveMaterial":{},"outlineAppliedStyle":{},"timbres":[],"timbreId":"","timbreTests":[],"newRecordBlob":{},"exportErrorUrls":[],"defaultTimbreId":"1"}},"readStatus":{},"draftHistory":{"history":{},"drafts":{}},"notifications":{"recent":{"isFetching":false,"isDrained":false,"isPrevDrained":false,"result":[],"next":null,"key":null},"history":{"isFetching":false,"isDrained":false,"isPrevDrained":false,"result":[],"next":null,"key":null},"notificationActors":{"isFetching":false,"isDrained":false,"isPrevDrained":false,"result":[],"next":null,"key":null},"recentNotificationEntry":"all"},"specials":{"entities":{},"all":{"data":[],"paging":{},"isLoading":false}},"collections":{"hot":{"data":[],"paging":{},"isLoading":false},"collectionFeeds":{}},"userProfit":{"permission":{"permissionStatus":{"zhiZixuan":0,"recommend":-1,"task":0,"plugin":0,"infinity":0},"visible":false}},"mcn":{"bindInfo":{},"memberCategoryList":[],"producerList":[],"categoryList":[],"lists":{},"banners":{},"protocolStatus":{"isAgreedNew":true,"isAgreedOld":true},"probationCountdownDays":0},"mcnActivity":{"household":{"products":{},"rankList":{"total":{},"yesterday":{}}}},"brand":{"contentPlugin":{}},"host":{"roundtable":{"subjects":{},"applications":{"total":0},"online":{"total":0},"applies":{},"details":{},"includedResource":{},"hotQuestions":{},"warmupContents":{},"batchInclude":{}},"special":{"applications":{"total":0,"pages":{},"entities":{}},"censorHistory":{},"drafts":{}}},"campaign":{"single":{},"list":{},"videoMakerAcq":{},"vote":{},"cardCollecting":{"message":null,"profile":{"balance":"0","chance":0,"coinNum":0,"gatherClose":false,"isGotMagicCard":false,"isPay":false,"partitionStart":false,"totalDone":0,"withdrawStart":false},"sharePoster":{"share":"","sendCard":"","invite":""},"shareLink":null,"shareIntention":"share","shareKey":null,"shareCardId":null,"inviterInfo":null,"giverInfo":null,"prize":null,"receivedCard":null,"newCoinCount":null,"newCardList":[],"newUserCardCount":1,"taskList":[],"prizeList":null,"cardList":null,"panel":{"showTaskPanel":false,"showRewardPanel":false},"modal":{"showWelcomeModal":false,"showFusionModal":false,"showFusionPromptModal":false,"showShareModal":false,"showBackModal":false}},"zhiboPandian2020":null,"boarding":{},"searchGaokaoSubPage":{},"searchHealth":{}},"knowledgePlan":{"lists":{},"allCreationRankList":{},"featuredQuestions":{}},"wallE":{"protectHistory":{"total":0,"pages":{},"entities":{}}},"roundtables":{"hotQuestions":{},"warmupContents":{},"hotDiscussions":{},"selectedContents":{},"roundtables":{}},"helpCenter":{"entities":{"question":{},"category":{}},"categories":[],"commonQuestions":[],"relatedQuestions":{},"faqTypes":[]},"republish":{},"commercialReport":{"commercialTypes":[]},"creatorMCN":{"mcn":{},"mcnStatistics":{},"isNoAuth":false,"creatorManageData":[],"creatorManageDataTotal":1,"mcnDomains":[]},"commentManage":{"commentList":{"ids":[],"entities":{},"nextOffset":0,"urlToken":""},"subCommentList":{"ids":[],"entities":{},"paging":{"next":"","isEnd":false}}},"commentPermission":{},"creatorRightStatus":{"list":[]},"zhiPlus":{"permissionStatus":9999},"streaming":{},"creationRanking":{},"eduSections":{"eduSectionState":{}}},"subAppName":"main"}
        </script>
        <script crossorigin="" src="https://static.zhihu.com/heifetz/vendor.4bb309fcb0b4b803488b.js"></script>
        <script crossorigin="" src="https://static.zhihu.com/heifetz/main.lib_09e9ad9b.480e84454d13f86cffb8.js">
        </script>
        <script crossorigin="" src="https://static.zhihu.com/heifetz/main.app.b625ce78268310600008.js"></script>
        <script crossorigin="" src="https://static.zhihu.com/heifetz/main.lib_0ad37f8a.bd7c5709597ed4db8e8f.js">
        </script>
        <script crossorigin="" src="https://static.zhihu.com/heifetz/main.lib_79b5cf47.03821a18eccd5adc11f1.js">
        </script>
        <script crossorigin="" src="https://static.zhihu.com/heifetz/main.lib_29107295.43b2bbafe37b47ab90fd.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_5cac3ab8a563f9bbb56eca3256b8ed78b8d955b6.57853b5cb459edfa95ee.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_d9c4af3142c7e58a3052d003654d0b6edcdc2557.d77e2e3cd136552363ee.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_aceb948abc92cedfcb43920aaab33f473f677a2f.c81dc078e360d00dff30.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_14774065bb21e3f9eef3fe9784ae4bf5f7d3a6cd.86662cd9517917a9fd56.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_fd8c48af45a7bc6cb4eae40eddb4c3adc56093d9.3000bf33f2c152afe017.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_5166cb19070d8185522b38ec72e2338c7ea0fe84.88c80750da59da7c18ed.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_6bf0a13bcfa9814fe1b4124d7db7ad6562f515d2.c3fafa3f266cb06c6c01.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_3b14b6a6793bcf6a28a30e974ba641b4cb31d3af.1a900d8267ca8167018e.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_f30f7459f944e851b885959dfde412e92f3a8d2e.41be16baf3f8a0ee8666.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_3b14b6a6793bcf6a28a30e974ba641b4cb31d3af_CSS.7aaf328d78db36c62118.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_f30f7459f944e851b885959dfde412e92f3a8d2e_CSS.da8b93b13f4c39647c81.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_1104b8f2b63afffb41e814c682e6b97a8e41b800.b79fb9bfdec718ed1c60.js">
        </script>
        <script crossorigin=""
          src="https://static.zhihu.com/heifetz/main.shared_1679dafdec5942113b512c7479f90fe8c8cc0c34.2f9b1d0e386c2356b670.js">
        </script>
        <script crossorigin="" src="https://static.zhihu.com/heifetz/main.topstory-routes.68946fa162f09c7ff83c.js">
        </script>
        <script defer="" src="https://static.zhihu.com/event/wza/31035/aria.js?appid=a3637ace5dc3a347f6863b0bac487599">
        </script>
    </body>
    <script src="https://hm.baidu.com/hm.js?98beee57fd2ef70ccdd5ca52b9740c49" async=""></script>
    
    </html>`
    let i = htmlstr.indexOf('<body>')
    let lasti = htmlstr.lastIndexOf('</body>')
    if (i > 0) {
      htmlstr = htmlstr.slice(i, lasti + 7)
    }
    let obj = this.htmlPaser.htmlParser(htmlstr)
    this.jsUtil.findItem(obj,v=>{
      if(v.attributes.some(val=>val.value=='HotItem-content')){
        console.log(v)
      }
    })
    console.log(obj)
  }
}
