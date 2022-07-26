import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/biz/services/common/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  
  title=ConfigService.Config.systemName
  constructor() { }

  ngOnInit(): void {}
}
