export let viewdata = [
  {
    "id": "18412da9-78f0-4924-8be1-dc1c466d407a",
    "title": "画布1",
    "x": "",
    "y": "",
    "children": [
      [
        {
          "id": "ee5eb883-90d6-4119-a00e-3930d0ad899c",
          "parentId": "18412da9-78f0-4924-8be1-dc1c466d407a",
          "selector": "app-demo1",
          "title": "组件1",
          "inputs": {
            "data": 123
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
          "children": [
            [
              {
                "id": "55923f04-691b-4860-b08a-b96761db5011",
                "parentId": "18412da9-78f0-4924-8be1-dc1c466d407a",
                "selector": "app-demo2",
                "title": "组件23",
                "inputs": {
                  "data": 123
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
                "children": [
                  [
                    {
                      "id": "ee5eb883-90d6-4119-a00e-3930d0ad899c",
                      "parentId": "18412da9-78f0-4924-8be1-dc1c466d407a",
                      "selector": "app-demo1",
                      "title": "组件1",
                      "inputs": {
                        "data": 123
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
                      "children": [
                        
                      ]
                    },
                    {
                      "id": "55923f04-691b-4860-b08a-b96761db5011",
                      "parentId": "18412da9-78f0-4924-8be1-dc1c466d407a",
                      "selector": "app-demo2",
                      "title": "组件23",
                      "inputs": {
                        "data": 123
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
                      "children": [
                        [
                          {
                            "id": "55923f04-691b-4860-b08a-b96761db5011",
                            "parentId": "18412da9-78f0-4924-8be1-dc1c466d407a",
                            "selector": "app-demo2",
                            "title": "组件23",
                            "inputs": {
                              "data": 123
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
                          }
                        ]
                      ]
                    }
                  ]
                ]
              },
              {
                "id": "55923f04-691b-4860-b08a-b96761db5011",
                "parentId": "18412da9-78f0-4924-8be1-dc1c466d407a",
                "selector": "app-demo2",
                "title": "组件23",
                "inputs": {
                  "data": 123
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
              }
            ]
          ]
        },
        
      ]
    ]
  },
]