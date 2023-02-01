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
          list: ['list']
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
          ngcontents: ['tab11', 'tab21', 'tab31']
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
          ngcontents: ['tab11', 'tab21', 'tab31']
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
        selector: "app-title-panel",
        title: "标题panel",
        inputs: {
          data: ['panel'],
        },
        params: {
          ngcontents: ['标题右侧', 'body']
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
  }
]