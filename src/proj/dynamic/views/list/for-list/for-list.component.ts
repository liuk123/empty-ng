import { ɵRender3ComponentFactory } from '@angular/core';
import { AfterContentInit, Component, ComponentRef, ContentChild, Directive, Input, OnInit,  TemplateRef, ViewContainerRef } from '@angular/core';

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

  @ContentChild('tempContent', {read: TemplateRef, static: true}) contentTpl: TemplateRef<any>
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  
  @Input() data = []
  constructor(private vf: ViewContainerRef) { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.contentTpl)
    console.log(this.content)
  }
}
