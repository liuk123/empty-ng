import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ArtList } from '../../model/artlist.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.less']
})
export class ArtListComponent implements OnInit {

  @Input() listData:ArtList[] = [];
  @Output() OpenEvent: EventEmitter<string> = new EventEmitter();
  constructor(
  ) { }

  ngOnInit(): void {
  }
  open(id){
    this.OpenEvent.emit(id);
  }

}
