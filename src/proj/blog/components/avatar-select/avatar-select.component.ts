import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.less']
})
export class AvatarSelectComponent implements OnInit {

  @Input() items: string[]
  @Input() selectItem: string
  @Output() selectItemChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  selectAvatar(data){
    this.selectItemChange.emit(data)
  }

}
