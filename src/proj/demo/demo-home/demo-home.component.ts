import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-home',
  templateUrl: './demo-home.component.html',
  styleUrls: ['./demo-home.component.less']
})
export class DemoHomeComponent implements OnInit {

  data = [
    { genre: '33', sold: 150 },
  ];
  constructor() { }

  ngOnInit(): void {
    let n=1
    console.log(n)
    setInterval(()=>{
      n++
      // this.data =[...this.data, { genre: n.toString(), sold: n+10 }]
    },2000)
  }
}
