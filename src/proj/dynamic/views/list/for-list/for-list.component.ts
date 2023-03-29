import { AfterContentInit, ApplicationRef, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { TemplateValueComponent } from '../template/template-value/template-value.component';

@Component({
  selector: 'app-for-list',
  templateUrl: './for-list.component.html',
  styleUrls: ['./for-list.component.less']
})
export class ForListComponent implements OnInit, AfterContentInit {

  @ContentChild('tempContent', {read: TemplateRef, static: true}) contentTpl!:TemplateRef<any>
  @Input() data = []
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.contentTpl)
  }
}
