import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-g2',
  templateUrl: './g2.component.html',
  styleUrls: ['./g2.component.less']
})
export class G2Component implements OnInit {

  data = [
    { genre: '33', sold: 150 },
    { genre: '34', sold: 250 },
    { genre: '35', sold: 350 },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
