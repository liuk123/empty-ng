import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { MessageUtilService } from 'src/app/core/services/message-util.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationHomeComponent implements OnInit {
  isLoading = false

  constructor(private srv: NavigationService,private message: MessageUtilService,private cf: ChangeDetectorRef) { }

  ngOnInit(): void {}

  randomPage(){
    this.message.info('探索中')
    this.isLoading = true
    this.srv.getRandomBookmark(700).subscribe(res=>{
      this.isLoading = false
      this.cf.markForCheck()
      if(res.isSuccess()){
        zip(
          this.message.success(`即将前往-${res.data.title}`).onClose,
          this.message.success(res.data.descItem).onClose,
        ).subscribe(v=>{
          window.open(res.data.link, '_blank')
        })
      }
    })
  }

  goPage(url){
    window.open(url, '_blank')
  }
}
