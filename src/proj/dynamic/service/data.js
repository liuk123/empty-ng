export let viewdata =
	[
		{
			"id": "ee5eb883-90d6-4119-a00e-3930d0ad899c",
			"selector": "app-demo1",
			"desc": "默认组件",
			"title": "组件1",
			"inputs": {
				"data": ['users'],
				"title": ['users']
			},
			"outputs": {
				"timeEvent": ""
			},
			"events": {
				timeEvent: function(v, srv) {
					srv[this.ajax]?.(v).subscribe(v => {
						srv.orignData.chartList.value=v
					})
				}
			},
			ajax: 'fetchUserData',
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
			"id": "6c814a43-32e2-4989-8e6d-72145b8418603",
			"selector": "app-line-chart",
			"title": "chart图表",
			"desc": "默认2组件",
			"inputs": {
				"data": ['chartList']
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
				"contentIndex": ['tabs', 'contentIndex']
			},
			params: {
				ngcontents: ['tab11', 'tab21', 'tab31']
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
				[{
					"id": "6c814a43-32e2-4989-8e6d-72145b8418601",
					"selector": "app-line-chart",
					"title": "chart图表",
					"desc": "默认2组件",
					"inputs": {
						 "data": ['chartList']
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
				}],
				[{
					"id": "6c814a43-32e2-4989-8e6d-72145b8418602",
					"selector": "app-line-chart",
					"title": "chart图表",
					"desc": "默认2组件",
					"inputs": {
						"data": ['chartList']
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
				}]
			],
			"desc": "pingji121212"
		}
	]