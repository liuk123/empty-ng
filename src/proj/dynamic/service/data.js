export let viewdata =
	[
		{
			"id": "b85ceb94-c8ad-48c3-9cba-17b9eee1ff50",
			"selector": "app-title-panel",
			"title": "标题panel",
			"inputs": {
				"data": [
					"panel"
				]
			},
			"params": {
				"ngcontents": [
					{
						"label": "标题右侧",
						"style": {}
					},
					{
						"label": "body",
						"style": {
							"display": "flex",
							"flexDirection": 'column'
						}
					}
				]
			},
			"outputs": {},
			"events": {},
			"icon": "",
			"styles": {
				"width": 752,
				"height": 304,
				"left": 48,
				"top": 32,
				"status": true,
				"alignX": "left",
				"alignY": "top"
			},
			"children": [
				null,
				[
					{
						"id": "48ba51f6-41ee-458a-9d78-8de7e41564eb",
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
							"width": 98.79,
							"height": 30.44,
							"left": 0,
							"top": 0,
							"status": false,
							"alignX": 1,
							"alignY": 1
						},
						"children": [],
						"desc": "列表",
						"type": "block"
					},
					{
						"id": "283c3f20-863c-4f1e-92c6-151c5a076819",
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
							"width": 98.79,
							"height": 61.25,
							"left": 0,
							"top": 0,
							"status": false,
							"alignX": 1,
							"alignY": 1
						},
						"children": [],
						"desc": "图标",
						"type": "block"
					}
				]
			],
			"desc": "panel-1",
			"type": "absolute"
		}
	]