import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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

  $httpLoading
  unsub$ = new Subject()

  constructor(
    private httplog: HttpLogService
  ) { }

  ngOnInit(): void {
    this.$httpLoading = this.httplog.loadingEvent.pipe(takeUntil(this.unsub$))
  }
  ngOnDestroy(): void {
    this.unsub$.next(null)
    this.unsub$.complete()
  }

}
