import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {

  // banner 背景图片
  @Input() bannerUrl:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
