import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() data = null
  defaultBanner = 'assets/image/blog/d01.jpg'

  constructor() { }

  ngOnInit(): void {
  }
  getRandom(val){
    return val[Math.floor(Math.random()*val.length)]
  }

}
