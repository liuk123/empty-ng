export let compLibData = [
  {
    "id": "",
    "selector": "app-demo1",
    "title": "组件1",
    "inputs": {
      "data": ['users'],
      "title": ['users']
    },
    "outputs": {},
    "events": {},
    "icon": "",
    "styles": {
      "width": 200,
      "height": 100,
      "left": 0,
      "top": 0,
      "status": false
    },
    "moduleLoaderFunction": () => import("../views/views.module").then(m => m.ViewsModule),
    "children": []
  },
  {
    "id": "",
    "selector": "app-demo2",
    "title": "组件2",
    "inputs": {
      "list": ['list']
    },
    "outputs": {},
    "icon": "",
    "styles": {
      "width": 100,
      "height": 150,
      "left": 0,
      "top": 0,
      "status": false
    },
    "moduleLoaderFunction": () => import("../views/views.module").then(m => m.ViewsModule),
    "children": []
  },
  {
    "id": "",
    "selector": "app-tabs",
    "title": "tabs切换",
    "inputs": {
      "ngcontents": ['tabs', 'ngcontents'],
      "contentIndex": ['tabs', 'contentIndex']
    },
    "outputs": {},
    "events": {},
    "icon": "",
    "styles": {
      "width": 200,
      "height": 100,
      "left": 0,
      "top": 0,
      "status": false
    },
    "moduleLoaderFunction": () => import("../views/views.module").then(m => m.ViewsModule),
    "children": []
  },
  {
    "id": "",
    "selector": "app-line-chart",
    "title": "chart图表",
    "inputs": {
      "data": ['chartList','value'],
      "axis": ['chartList','axis']
    },
    "outputs": {},
    "events": {},
    "icon": "",
    "styles": {
      "width": 200,
      "height": 100,
      "left": 0,
      "top": 0,
      "status": false
    },
    "moduleLoaderFunction": () => import("../views/views.module").then(m => m.ViewsModule),
    "children": []
  },
]