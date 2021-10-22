import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageUtilService } from 'src/app/core/services/message-util.service';

@Component({
  selector: 'app-operate-list',
  templateUrl: './operate-list.component.html',
  styleUrls: ['./operate-list.component.less']
})
export class OperateListComponent implements OnInit {

  initLoading = true
  isShowMoreBtn: boolean = true

  @Input() isShowAction = false
  _page;
  @Input() set page(v){
    this.initLoading = false
    this.isShowMoreBtn = !v.loading && (v.pages > v.pageIndex)
    this._page = v
  }
  get page(){
    return this._page
  }
  @Output() loadMoreEvent = new EventEmitter<null>()
  @Output() editEvent = new EventEmitter<number>()
  @Output() delEvent = new EventEmitter<number>()
  @Output() openEvent = new EventEmitter<number>()
  constructor(
    private message: MessageUtilService
  ) { }

  ngOnInit(): void {
  }

  onLoadMore(){
    this.loadMoreEvent.emit(this.page.pageIndex+1);
  }
  edit(id: any): void {
    this.editEvent.emit(id)
  }
  del(id){
    this.delEvent.emit(id)
  }
  open(id){
    this.openEvent.emit(id)
  }
  cancel(): void {
    this.message.info('click cancel');
  }
}
