export let compLibData = [
  {
    "id": "",
    "selector": "app-demo1",
    "title": "组件1",
    "inputs": {
      "data": 1
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
      "list": [{
        title: '标题1',
        value: 10
      },{
        title: '标题2',
        value: 10
      },{
        title: '标题3',
        value: 10
      },{
        title: '标题4',
        value: 10
      }]
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
      "ngcontents": ["tab1","tab2","tab3"],
      "contentIndex": 0
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
      "data": [
        { genre: '33', sold: 150 },
        { genre: '34', sold: 250 },
        { genre: '35', sold: 350 },
      ],
      "axis": 'genre*sold'
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