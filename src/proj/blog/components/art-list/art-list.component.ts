import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

export class ArtList{
  constructor(
    public id: string,
    public title: string,
    public desc: string,
    public author: any,
    public imgUrl: string,
    public content: string,
    public tag: string[],
  ){}
}
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
