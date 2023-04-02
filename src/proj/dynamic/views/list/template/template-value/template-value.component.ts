import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-value',
  templateUrl: './template-value.component.html',
  styleUrls: ['./template-value.component.less']
})
export class TemplateValueComponent implements OnInit, AfterContentInit {

  // @ViewChild('tempContent', {read: TemplateRef, static: true}) contentTpl: TemplateRef<any>
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // console.log(this.contentTpl)
  }

}
