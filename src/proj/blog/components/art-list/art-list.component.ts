import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArtItem } from '../../model/artlist.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.less']
})
export class ArtListComponent implements OnInit {

  defaultBanners = environment.defaultBanners
  @Input() listData:ArtItem[] = [];
  @Output() OpenEvent: EventEmitter<string> = new EventEmitter();
  constructor(
  ) { }

  ngOnInit(): void {
  }
  getRandom(val){
    return val[Math.floor(Math.random()*val.length)]
  }
}
