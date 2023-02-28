import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  
  @Input() src=null
  @Input() alt=null
  @Input() style=null

  constructor() { }

  ngOnInit(): void {
  }

}
