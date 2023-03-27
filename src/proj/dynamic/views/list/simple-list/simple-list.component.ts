import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.less']
})
export class SimpleListComponent implements OnInit {

  @Input() data = []
  constructor() { }

  ngOnInit(): void {
  }

}
