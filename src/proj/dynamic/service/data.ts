export let viewdata =
  [
    {
      "id": "ee5eb883-90d6-4119-a00e-3930d0ad899c",
      "selector": "app-demo1",
      "title": "组件1",
      "inputs": {
        "data": '配置文件的数据data1'
      },
      "outputs": {
        "timeEvent": ""
      },
      "events": {
        "eventEmit": (v) => {
          console.log(v)
        }
      },
      "icon": "",
      "styles": {
        "width": 200,
        "height": 100,
        "left": 40,
        "top": 0,
        "status": false
      },
      "children": [
      ]
    }
  ]

export let compLibData = [
  {
    "id": "",
    "selector": "app-demo1",
    "title": "组件1",
    "inputs": {
      "data": 1
    },
    "outputs": {
      
    },
    "events": {
      "eventEmit": (v) => {
        console.log(v)
      }
    },
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
    "outputs": {

    },
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
    "selector": "app-demo3",
    "title": "组件3",
    "inputs": {
      "title": '这是组件的标题',
      "ngcontents": ['tab1','tab2'],
      "contentIndex": 0
    },
    "outputs": {
      
    },
    "events": {

    },
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