import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MessageUtilService {


  MSG_SUCESS = "操作成功";
  MSG_ERROR = "操作失败";
  MSG_WARN = "操作有误";

  constructor(private message: NzMessageService) { }

  /**
   * 操作成功的消息
   * @param message:需要提醒的消息
   */
  success(message = this.MSG_SUCESS): void {
    this.message.create('success', message);
  }

  /**
   * 操作失败的消息
   * @param message:需要提醒的消息
   */
  error(message = this.MSG_ERROR): void {
    this.message.create('error', message);
  }

  /**
   * 操作有误的消息
   * @param message:需要提醒的消息
   */
  warning(message = this.MSG_WARN): void {
    this.message.create('warning', message);
  }
  /**
   * 提示的消息
   * @param message:需要提醒的消息
   */
   info(message = this.MSG_SUCESS): void {
    this.message.create('info', message);
  }
}
