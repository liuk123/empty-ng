import { AfterContentInit, Component, ContentChild, Directive, Input, OnInit,  TemplateRef } from '@angular/core';

@Directive({
  selector: '[appZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}


@Component({
  selector: 'app-for-list',
  templateUrl: './for-list.component.html',
  styleUrls: ['./for-list.component.less']
})
export class ForListComponent implements OnInit, AfterContentInit {

  // @ContentChild('tempContent', {read: TemplateRef, static: true}) contentTpl!:TemplateRef<any>
  @ContentChild(ZippyContentDirective) contentTpl!: ZippyContentDirective;

  @Input() data = []
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.contentTpl)
  }
}
