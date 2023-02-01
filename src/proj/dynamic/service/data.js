export let viewdata =
[
	{
		"id": "d0f05d49-6115-4c17-9a13-d7664cd18d5c",
		"selector": "app-title-panel",
		"title": "标题panel",
		"inputs": {
			"data": [
				"panel"
			]
		},
		"params": {
			"ngcontents": [
				"标题右侧",
				"body"
			]
		},
		"outputs": {},
		"events": {},
		"icon": "",
		"styles": {
			"width": 668,
			"height": 360,
			"left": 40,
			"top": 10,
			"status": true
		},
		"children": [
			null,
			[
				{
					"id": "de79e5ec-bd3e-42c4-867f-26f187526c7a",
					"selector": "app-demo2",
					"title": "组件2",
					"inputs": {
						"list": [
							"list"
						]
					},
					"outputs": {},
					"icon": "",
					"styles": {
						"width": 100,
						"height": 26,
						"left": 0,
						"top": -8,
						"status": false
					},
					"children": [],
					"desc": "table数据",
					"type": "block"
				},
				{
					"id": "920f643c-a840-4edd-934c-20349bf90148",
					"selector": "app-line-chart",
					"title": "chart图表",
					"inputs": {
						"data": [
							"chartList"
						]
					},
					"outputs": {},
					"events": {},
					"icon": "",
					"styles": {
						"width": 100,
						"height": 72,
						"left": 0,
						"top": 0,
						"status": false
					},
					"children": [],
					"desc": "图表",
					"type": "block"
				}
			]
		],
		"desc": "测试panel",
		"type": "absolute"
	}
]