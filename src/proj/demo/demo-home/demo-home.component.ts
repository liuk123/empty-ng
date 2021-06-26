import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.less']
})
export class DemoHomeComponent implements OnInit {

  data = [
    { genre: '33', sold: 150 },
    { genre: '34', sold: 250 },
    { genre: '35', sold: 350 },
  ];
  constructor() { }

  ngOnInit(): void {
    // let n=1
    // console.log(n)
    // setTimeout(()=>{
    //   n++
    //   this.data =[...this.data, { genre: n.toString(), sold: n+10 }]
    // },0)
  }
}
