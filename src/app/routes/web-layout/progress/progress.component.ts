import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpLogService } from 'src/app/core/services/http-log.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent implements OnInit, OnDestroy {

  httpLoading
  unsub$ = new Subject()

  constructor(
    private httplog: HttpLogService,
    private cf: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.httplog.loadingEvent.pipe(takeUntil(this.unsub$)).subscribe(v=>{
      this.httpLoading = v
      this.cf.markForCheck()
    })
  }
  ngOnDestroy(): void {
    this.unsub$.next()
    this.unsub$.complete()
  }

}
