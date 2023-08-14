import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-panel',
  templateUrl: './tabs-panel.component.html',
  styleUrls: ['./tabs-panel.component.less']
})
export class TabsPanelComponent implements OnInit {

  @Input() contentIndex = 0
  @Input() ngcontents=[]
  constructor() { }

  ngOnInit(): void {
  }

  selTab(i){
    this.contentIndex = i
  }

  trackByTabs(index: number, item){return item}

}
