import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  private userInfo: User = {};
  private userSource = new BehaviorSubject<User>(this.userInfo);
  userEvent = this.userSource.asObservable();

  reLoadUserInfo(data:User){
    this.userInfo = data
    this.userSource.next(this.userInfo)
  }
}
