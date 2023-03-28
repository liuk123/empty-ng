import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-for-list',
  templateUrl: './for-list.component.html',
  styleUrls: ['./for-list.component.less']
})
export class ForListComponent implements OnInit, AfterContentInit {

  @ContentChild('tempContent', {static: false}) contentTpl: TemplateRef<any>
  @Input() data = []
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    console.log(this.contentTpl)
  }

}
