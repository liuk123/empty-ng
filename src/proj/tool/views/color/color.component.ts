import { Component, OnInit } from '@angular/core';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';
import colorCN from '../../../../assets/data/colors-cn.json'

@Component({
	selector: 'app-color',
	templateUrl: './color.component.html',
	styleUrls: ['./color.component.less']
})
export class ColorComponent implements OnInit {

	curColor = null
	cn = null
	constructor(private http: HttpUtilService) {}

	ngOnInit(): void {
		// this.getData()
		this.cn = colorCN
		let index = Math.floor(Math.random() * this.cn.length)
		this.curColor = this.cn[index]
	}

	selectColor(data) {
		this.curColor = data
	}
	randomColor() {
		let index = Math.floor(Math.random() * this.cn.length)
		this.selectColor(this.cn[index])
	}
	// getData() {
	// 	this.http.get('/assets/data/colors-cn.json').subscribe(res => {
	// 		this.cn = res.data
	// 		let index = Math.floor(Math.random() * this.cn.length)
	// 		this.curColor = this.cn[index]
	// 	})
	// }
}
