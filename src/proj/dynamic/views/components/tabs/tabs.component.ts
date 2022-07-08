import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

  contentIndex = 0
  ngcontents=[]

  constructor() { }

  ngOnInit(): void {
  }
  
  selTab(i){
    this.contentIndex = i
  }

  trackByTabs(index: number, item){return item}

}
