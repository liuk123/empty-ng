import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  replyValue
  // 评论列表
  @Input() data;
  // 评论事件
  @Output() commentEvent = new EventEmitter();
  // 回复事件
  @Output() replyEvent = new EventEmitter();

  // 提交按钮状态（disable）
  private _submitting
  @Input() set submitting(val){
    this._submitting = val
    this.inputValue = ''
  };
  get submitting(){
    return this._submitting
  }
  @Output() submittingChange = new EventEmitter();

  // 输入框数据
  inputValue='';
  constructor(
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.commentEvent.emit(this.inputValue);
  }
  replySubmit(commentId,toUserId,toUsername, tpl){
    this.replyValue = null
    const modal = this.modal.create({
      nzTitle: 'reply',
      nzMaskClosable: false,
      nzContent: tpl,
      nzOnOk:()=>{
        this.replyEvent.emit({
          content: this.replyValue,
          commentId,
          toUserId,
          toUsername,
        });
      },
    });
  }
}
