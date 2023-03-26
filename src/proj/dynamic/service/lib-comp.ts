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
          list: ['list', 'demo1']
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
          // ngcontents: ['tab11', 'tab21', 'tab31']
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
          width: 200,
          height: 100,
          left: 0,
          top: 0,
          status: false
        },
        moduleLoaderFunction: () => import("../views/views.module").then(m => m.ViewsModule),
        children: []
      },{
        id: "",
        selector: "app-blank-panel",
        title: "空白panel",
        inputs: {
        },
        params: {
          ngcontents: [
           {
              label: 'body',
              style: {
                display: "flex",
							  flexDirection: 'column'
              }
            }
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
      {
        id: "",
        selector: "app-title-panel",
        title: "标题panel",
        inputs: {
          data: ['panel'],
        },
        params: {
          ngcontents: [
            {
              label: '标题右侧',
              style: {}
            },{
              label: 'body',
              style: {
                display: "flex",
							  flexDirection: 'column'
              }
            }
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
      }
    ]
  },
  {
    title: 'list、table',
    children: [
      {
        id: "",
        selector: "app-m-table",
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
          width: 200,
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
        selector: "app-text-value",
        title: "文本value",
        inputs: {
          data: ['text', 'text1']
        },
        params: {
          
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
      },{
        id: "",
        selector: "app-text-value-list",
        title: "文本value列表",
        inputs: {
        },
        params: {
          
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
      },{
        id: "",
        selector: "app-text-value-icon",
        title: "文本value图标",
        inputs: {
        },
        params: {
          
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
      },{
        id: "",
        selector: "app-image",
        title: "图片",
        inputs: {
          src: ['image', 'img1'],
          alt: [],
          style: {}
        },
        params: {
          
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
      },{
        id: "",
        selector: "app-icon",
        title: "图标",
        inputs: {
          data: ['image','icon'],
          fontSize: []
        },
        params: {
          
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
      },{
        id: "",
        selector: "app-button",
        title: "按钮",
        inputs: {
          text: ['buttons','btn']
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
          width: 200,
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
    title: 'chart',
    children: [
      {
        id: "",
        selector: "app-line-chart",
        title: "chart图表",
        inputs: {
          data: ['chartList']
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
  }
]