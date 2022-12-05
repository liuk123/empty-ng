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
				timeEvent(v, srv) {
					srv[this.ajax]?.(v).subscribe(v => {
						// this.inputs.data.v = '333ajax'
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
			"id": "6c814a43-32e2-4989-8e6d-72145b841860",
			"selector": "app-line-chart",
			"title": "chart图表",
			"desc": "默认2组件",
			"inputs": {
				"data": ['chartList','value'],
				"axis": ['chartList','axis']
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
				"ngcontents": ['tabs', 'ngcontents'],
				"contentIndex": ['tabs', 'contentIndex']
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
					"id": "6c814a43-32e2-4989-8e6d-72145b841860",
					"selector": "app-line-chart",
					"title": "chart图表",
					"desc": "默认2组件",
					"inputs": {
						"data": ['chartList','value'],
						"axis": ['chartList','axis']
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
					"id": "6c814a43-32e2-4989-8e6d-72145b841860",
					"selector": "app-line-chart",
					"title": "chart图表",
					"desc": "默认2组件",
					"inputs": {
						"data": ['chartList','value'],
						"axis": ['chartList','axis']
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