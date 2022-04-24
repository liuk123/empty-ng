import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bookmark',
  templateUrl: './navigation-bookmark.component.html',
  styleUrls: ['./navigation-bookmark.component.less']
})
export class NavigationBookmarkComponent implements OnInit {

  navData = []
  constructor() { }

  ngOnInit(): void {
  }

  selectNav(data){}

}
