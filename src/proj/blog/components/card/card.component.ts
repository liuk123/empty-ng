import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  cardData=null
  @Input() set data(val){
    if(!val.postImage){
      this.cardData = {
        ...val,
        postImage: this.getRandom(this.defaultBanners)
      }
    }else{
      this.cardData = val
    }
  }
  defaultBanners = [
    'assets/image/blog/d01.jpg',
    'assets/image/blog/d02.jpg',
    'assets/image/blog/d03.jpg',
    'assets/image/blog/d04.jpg',
    'assets/image/blog/d05.jpg',
    'assets/image/blog/d06.jpg',
    'assets/image/blog/d07.jpg',
    'assets/image/blog/d08.jpg',
    'assets/image/blog/d09.jpg',
    'assets/image/blog/d10.jpg',
    'assets/image/blog/d11.jpg',
    'assets/image/blog/d12.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getRandom(val){
    return val[Math.floor(Math.random()*val.length)]
  }

}
