export let viewdata =
[
	{
			"id": "bd26a364-bfaa-4813-a6fd-ec473c82dfa0",
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
											"flexDirection": "column"
									}
							}
					]
			},
			"outputs": {},
			"events": {},
			"icon": "",
			"styles": {
					"width": 480,
					"height": 308,
					"left": 12,
					"top": 8,
					"status": false,
					"alignX": "left",
					"alignY": "top"
			},
			"children": [
					[
							{
									"id": "b8d51f63-97e8-40c7-b05e-cea5b3015150",
									"selector": "app-button",
									"title": "按钮",
									"inputs": {
											"text": [
													"buttons",
													"btn"
											]
									},
									"params": {},
									"outputs": {},
									"events": {},
									"icon": "",
									"styles": {
											"width": 18.26,
											"height": 100,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [],
									"desc": "按钮1",
									"type": "block"
							}
					],
					[
							{
									"id": "19d6803c-b497-4a23-b56b-84f4086e824c",
									"selector": "app-m-table",
									"title": "table",
									"inputs": {
											"headerData": [
													"table",
													"header"
											],
											"data": [
													"table",
													"data"
											]
									},
									"params": {},
									"outputs": {},
									"events": {},
									"icon": "",
									"styles": {
											"width": 100,
											"height": 97.62,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [],
									"desc": "计划列表",
									"type": "block"
							}
					]
			],
			"desc": "个人计划",
			"type": "absolute"
	},
	{
			"id": "bc418d0d-cf54-4929-89f2-e8a32622d644",
			"selector": "app-tabs-panel",
			"title": "切换panel",
			"inputs": {
					"contentIndex": [
							"tabs",
							"contentIndex"
					]
			},
			"params": {
					"ngcontents": [
							{
									"label": "概览1",
									"style": {
											"display": "flex"
									}
							},
							{
									"label": "图片",
									"style": {
											"display": "flex"
									}
							},
							{
									"label": "文本",
									"style": {
											"display": "flex"
									}
							}
					]
			},
			"outputs": {},
			"events": {},
			"icon": "",
			"styles": {
					"width": 528,
					"height": 308,
					"left": 504,
					"top": 8,
					"status": false,
					"alignX": "left",
					"alignY": "top"
			},
			"children": [
					[
							{
									"id": "34d40885-68ec-48e2-8049-ae042a7ccf2a",
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
											"width": 99.3,
											"height": 100,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [],
									"desc": "概览",
									"type": "block"
							}
					],
					[
							{
									"id": "2e45e9ac-eb49-4050-acec-337a9723092c",
									"selector": "app-image",
									"title": "图片",
									"inputs": {
											"src": [
													"image",
													"img1"
											],
											"alt": [],
											"style": {}
									},
									"params": {},
									"outputs": {},
									"events": {},
									"icon": "",
									"styles": {
											"width": 99.3,
											"height": 91.79,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [],
									"desc": "个人",
									"type": "block"
							}
					],
					[
							{
									"id": "76eb34f3-299c-4cbe-a619-21a6357ff9c3",
									"selector": "app-text-value",
									"title": "文本value",
									"inputs": {
											"data": [
													"text",
													"text1"
											]
									},
									"params": {},
									"outputs": {},
									"events": {},
									"icon": "",
									"styles": {
											"width": 96.95,
											"height": 48.16,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [],
									"desc": "完成情况",
									"type": "block"
							},
							{
									"id": "1218ee21-6c6e-4a8f-a803-c81dca419d69",
									"selector": "app-demo2",
									"title": "组件2",
									"inputs": {
											"list": [
													"list",
													"demo1"
											]
									},
									"outputs": {},
									"icon": "",
									"styles": {
											"width": 96.95,
											"height": 48.16,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [],
									"desc": "列表",
									"type": "block"
							}
					]
			],
			"desc": "历史记录",
			"type": "absolute",
			"selected": true
	},
	{
			"id": "d115d99c-43c8-495c-90ed-ff339b10d35e",
			"selector": "app-blank-panel",
			"title": "空白panel",
			"inputs": {},
			"params": {
					"ngcontents": [
							{
									"label": "body",
									"style": {
											"display": "flex",
											"flexDirection": "column"
									}
							}
					]
			},
			"outputs": {},
			"events": {},
			"icon": "",
			"styles": {
					"width": 480,
					"height": 268,
					"left": 12,
					"top": 328,
					"status": false,
					"alignX": "left",
					"alignY": "top"
			},
			"children": [
					[
							{
									"id": "068d2c2f-3075-457b-96f6-084d127d8b91",
									"selector": "app-simple-list",
									"title": "simpleList",
									"inputs": {
											"data": [
													"list",
													"demo1"
											]
									},
									"params": {},
									"outputs": {},
									"events": {},
									"icon": "",
									"styles": {
											"width": 45.65,
											"height": 100,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [
											[]
									],
									"desc": "列表",
									"type": "block"
							},
							{
									"id": "ec60f302-4964-4257-be72-1e9c622314a6",
									"selector": "app-for-list",
									"title": "for",
									"inputs": {
											"data": [
													"list",
													"demo1"
											]
									},
									"params": {},
									"outputs": {},
									"events": {},
									"icon": "",
									"styles": {
											"width": 200,
											"height": 100,
											"left": 0,
											"top": 0,
											"status": false,
											"alignX": "left",
											"alignY": "top"
									},
									"children": [
											[
													{
															"id": "7fca6f91-2260-493f-9832-76177633f700",
															"selector": "app-template",
															"title": "template",
															"inputs": {
																	"data": [
																			"list",
																			"demo1"
																	]
															},
															"params": {},
															"outputs": {},
															"events": {},
															"icon": "",
															"styles": {
																	"width": 200,
																	"height": 100,
																	"left": 0,
																	"top": 0,
																	"status": false,
																	"alignX": "left",
																	"alignY": "top"
															},
															"children": [
																	[
																			{
																					"id": "2c60d9ae-a8b2-4532-af56-d752fd94e317",
																					"selector": "app-text-value",
																					"title": "文本value",
																					"inputs": {
																							"data": [
																									"text",
																									"text1"
																							]
																					},
																					"params": {},
																					"outputs": {},
																					"events": {},
																					"icon": "",
																					"styles": {
																							"width": 200,
																							"height": 100,
																							"left": 0,
																							"top": 0,
																							"status": false,
																							"alignX": "left",
																							"alignY": "top"
																					},
																					"children": [],
																					"desc": "121212",
																					"type": "block"
																			}
																	]
															],
															"desc": "t",
															"type": "inline"
													}
											]
									],
									"desc": "111",
									"type": "block"
							}
					]
			],
			"desc": "个人展示",
			"type": "absolute"
	}
]