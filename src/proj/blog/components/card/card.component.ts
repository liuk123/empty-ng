import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() data = null;
  defaultBanners = environment.defaultBanners
  constructor() { }

  ngOnInit(): void {
  }
  getRandom(val){
    return val[Math.floor(Math.random()*val.length)]
  }

}
