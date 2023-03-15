import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationHomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {}

}
