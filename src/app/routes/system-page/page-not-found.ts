import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    page not found 404
    <div>
      <a href="/">返回首页</a>
    </div>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
