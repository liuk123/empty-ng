export let viewdata =
[
  {
      "id": "ee5eb883-90d6-4119-a00e-3930d0ad899c",
      "selector": "app-demo1",
      "desc": "默认组件",
      "title": "组件1",
      "inputs": {
          "data": "配置文件的数据data1"
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
          "top": 0,
          "status": false
      },
      "children": []
  },
  {
      "id": "6c814a43-32e2-4989-8e6d-72145b841860",
      "selector": "app-line-chart",
      "title": "chart图表",
      "desc": "默认2组件",
      "inputs": {
          "data": [
              {
                  "genre": "33",
                  "sold": 150
              },
              {
                  "genre": "34",
                  "sold": 250
              },
              {
                  "genre": "35",
                  "sold": 350
              }
          ],
          "axis": "genre*sold"
      },
      "outputs": {},
      "events": {},
      "icon": "",
      "styles": {
          "width": 410,
          "height": 180,
          "left": 40,
          "top": 130,
          "status": false
      },
      "children": []
  },
  {
      "id": "4fa23d57-119c-46ae-9bf2-836f0f69ad17", 
      "selector": "app-tabs",
      "title": "tabs切换",
      "inputs": {
          "ngcontents": [
              "tab1",
              "tab2",
              "tab3"
          ],
          "contentIndex": 0
      },
      "outputs": {},
      "events": {},
      "icon": "",
      "styles": {
          "width": 630,
          "height": 280,
          "left": 480,
          "top": 10,
          "status": false
      },
      "children": [
          [
              {
                  "id": "36f8a98f-d4b0-45a0-99ef-1358a8a12e16",
                  "selector": "app-demo1",
                  "title": "组件1",
                  "inputs": {
                      "data": 1
                  },
                  "outputs": {},
                  "events": {},
                  "icon": "",
                  "styles": {
                      "width": 180,
                      "height": 110,
                      "left": 0,
                      "top": 50,
                      "status": false
                  },
                  "children": [
                      []
                  ],
                  "desc": "111"
              },
              {
                  "id": "00525a19-15f8-483c-abd1-09a20dbf9b8e",
                  "selector": "app-demo1",
                  "title": "组件1",
                  "inputs": {
                      "data": 1
                  },
                  "outputs": {},
                  "events": {},
                  "icon": "",
                  "styles": {
                      "width": 210,
                      "height": 90,
                      "left": 410,
                      "top": 70,
                      "status": false
                  },
                  "children": [],
                  "desc": "112"
              }
          ],
          [
              {
                  "id": "1a2da151-09cb-47ba-9177-d5d84066ad8b",
                  "selector": "app-demo2",
                  "title": "组件2",
                  "inputs": {
                      "list": [
                          {
                              "title": "标题1",
                              "value": 10
                          },
                          {
                              "title": "标题2",
                              "value": 10
                          },
                          {
                              "title": "标题3",
                              "value": 10
                          },
                          {
                              "title": "标题4",
                              "value": 10
                          }
                      ]
                  },
                  "outputs": {},
                  "icon": "",
                  "styles": {
                      "width": 600,
                      "height": 80,
                      "left": 10,
                      "top": 70,
                      "status": false
                  },
                  "children": [
                      []
                  ],
                  "desc": "222"
              },
              {
                  "id": "2a2ae589-0d83-48db-bcaf-1f202ce43d97",
                  "selector": "app-demo2",
                  "title": "组件2",
                  "inputs": {
                      "list": [
                          {
                              "title": "标题1",
                              "value": 10
                          },
                          {
                              "title": "标题2",
                              "value": 10
                          },
                          {
                              "title": "标题3",
                              "value": 10
                          },
                          {
                              "title": "标题4",
                              "value": 10
                          }
                      ]
                  },
                  "outputs": {},
                  "icon": "",
                  "styles": {
                      "width": 610,
                      "height": 100,
                      "left": 10,
                      "top": 170,
                      "status": false
                  },
                  "children": [],
                  "desc": "221"
              }
          ]
      ],
      "desc": "pingji121212"
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
    "selector": "app-tabs",
    "title": "tabs切换",
    "inputs": {
      "ngcontents": ["tab1","tab2","tab3"],
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