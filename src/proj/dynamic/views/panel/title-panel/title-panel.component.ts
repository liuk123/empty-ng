import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.less']
})
export class TitlePanelComponent implements OnInit {

  @Input() data=null

  constructor() { }

  ngOnInit(): void {
  }

}
