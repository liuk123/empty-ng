import { DragItem } from "../model/drag.model";

export let compLibData: {title: string, children: DragItem[]}[] = [
  {
    title: 'demo',
    children: [
      {
        id: "",
        selector: "app-demo1",
        title: "组件1",
        inputs: {
          data: ['users'],
          title: ['users']
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          width: 200,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
      {
        id: "",
        selector: "app-demo2",
        title: "组件2",
        inputs: {
          list: ['list', 'list1']
        },
        outputs: {},
        icon: "",
        styles: {
          width: 100,
          height: 150,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
      {
        id: "",
        selector: "app-tabs",
        title: "tabs切换",
        inputs: {
          contentIndex: ['tabs', 'contentIndex']
        },
        params: {
          ngcontents: [
            {
              label: 'tab11',
              style: {
                display: 'flex',
              }
            },{
              label: 'tab12',
              style: {
                display: 'flex',
              }
            },{
              label: 'tab13',
              style: {
                display: 'flex',
              }
            },
          ]
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          width: 200,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
    ]
  },
  {
    title: 'template',
    children: [
      {
        id: "",
        selector: "app-template",
        title: "template",
        inputs: {
          data: ['list', 'list1']
        },
        params: {
          
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          status: false
        },
        moduleLoaderFunction: () => import("../dynamic.module").then(m => m.DynamicModule),
        children: []
      }
    ]
  },
  {
    title: 'panel',
    children: [
      {
        id: "",
        selector: "app-tabs-panel",
        title: "切换panel",
        inputs: {
          contentIndex: ['tabs', 'contentIndex']
        },
        params: {
          ngcontents: [
            {
              label: 'tab11',
              style: {
                display: 'flex',
              }
            },{
              label: 'tab12',
              style: {
                display: 'flex',
              }
            },{
              label: 'tab13',
              style: {
                display: 'flex',
              }
            }
          ]
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          width: 100,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      }
    ]
  },
  {
    title: 'text',
    children: [
      {
        id: "",
        selector: "app-div",
        title: "div",
        inputs: {
        },
        params: {},
        outputs: {},
        events: {},
        icon: "",
        styles: {
          width: 100,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
      {
        id: "",
        selector: "app-text",
        title: "文本",
        inputs: {
          text: ['text', 'default']
        },
        params: {
         
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
      {
        id: "",
        selector: "app-table",
        title: "table",
        inputs: {
          headerData: ['table', 'header'],
          data: ['table', 'data']
        },
        params: {
          
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          width: 100,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
      {
        id: "",
        selector: "app-image",
        title: "图片",
        inputs: {
          src: ['url', 'default'],
          alt: [],
          style: []
        },
        params: {
          
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          width: 100,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },{
        id: "",
        selector: "app-icon",
        title: "图标",
        inputs: {
          data: ['url','iconName'],
          fontSize: []
        },
        params: {
          
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },{
        id: "",
        selector: "app-button",
        title: "按钮",
        inputs: {
          text: ['buttons','confirm']
        },
        params: {
          
        },
        outputs: {
        },
        events: {
          btnEmit: function(e,data){
            console.log(e)
            console.log(this)
            console.log(data)
          }
        },
        icon: "",
        styles: {
          width: 100,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
      {
        id: "",
        selector: "app-header",
        title: "标题",
        inputs: {
          text: ['text','default'],
          name: ['header', '标题一']
        },
        params: {
          
        },
        outputs: {
        },
        events: {
          
        },
        icon: "",
        styles: {
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
      {
        id: "",
        selector: "app-a",
        title: "超链接",
        inputs: {
          text: ['text','default'],
          url: ['url', 'default']
        },
        params: {
          
        },
        outputs: {
        },
        events: {
          
        },
        icon: "",
        styles: {
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      }
    ]
  },
  {
    title: 'chart',
    children: [
      {
        id: "",
        selector: "app-base-chart",
        title: "chart图表",
        inputs: {
          data: ['chartList']
        },
        outputs: {},
        events: {},
        icon: "",
        styles: {
          width: 100,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },
    ]
  }
]