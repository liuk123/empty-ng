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
						console.log(v)
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
		}
	]