import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-img-to-base64',
  templateUrl: './img-to-base64.component.html',
  styleUrls: ['./img-to-base64.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgToBase64Component implements OnInit {
  constructor(
    private util: UtilService
  ) {}

  ngOnInit(): void {
  }
  copy(){
    this.util.copyToClipboard('123456')
  }
}
