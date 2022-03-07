export let viewdata =
  [
    {
      "id": "ee5eb883-90d6-4119-a00e-3930d0ad899c",
      "selector": "app-demo1",
      "title": "组件1",
      "inputs": {
        "data": 121
      },
      "outputs": {
        "timeEvent": ""
      },
      "events": {},
      "icon": "",
      "styles": {
        "width": 200,
        "height": 100,
        "left": 40,
        "top": 0
      },
      "children": [
        [
          {
            "id": "55923f04-691b-4860-b08a-b96761db5011",
            "selector": "app-demo2",
            "title": "组件23",
            "inputs": {
              "data": 122
            },
            "outputs": {},
            "icon": "",
            "styles": {
              "width": 100,
              "height": 150,
              "left": -30,
              "top": 120
            },
            "children": [

            ]
          }
        ],
        [
          {
            "id": "55923f04-691b-4860-b08a-b96761db5011",
            "selector": "app-demo2",
            "title": "组件23",
            "inputs": {
              "data": 122
            },
            "outputs": {},
            "icon": "",
            "styles": {
              "width": 100,
              "height": 150,
              "left": 410,
              "top": 70
            },
            "children": []
          }
        ]
      ]
    }
  ]

export let compLibData = [
  {
    "id": "",
    "selector": "app-demo1",
    "title": "组件1",
    "inputs": {
      "data": 121
    },
    "outputs": {
      "timeEvent": "",
    },
    "events": {
      "timeEvent1": (e, v) => {
        console.log(v)
        console.log(e)
      }
    },
    "icon": "",
    "styles": {
      "width": 200,
      "height": 100,
      "left": 0,
      "top": 0
    },
    "moduleLoaderFunction": () => import("../views/views.module").then(m => m.ViewsModule),
    "children": []
  },
  {
    "id": "",
    "selector": "app-demo2",
    "title": "组件23",
    "inputs": {
      "data": 122
    },
    "outputs": {

    },
    "icon": "",
    "styles": {
      "width": 100,
      "height": 150,
      "left": 0,
      "top": 0
    },
    "moduleLoaderFunction": () => import("../views/views.module").then(m => m.ViewsModule),
    "children": []
  },
]