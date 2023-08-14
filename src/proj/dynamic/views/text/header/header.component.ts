import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

type HeaderName= 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  private _name:HeaderName=null
  private _text:string = null
  @Input() set text(val){
    this._text = val
    this.refresh(this._name, this._text)
  }
  @Input() set name(val:HeaderName){
    this._name = val
    this.refresh(this._name, this._text)
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2
  ){}
  refresh(name,text){
    if(name != null && text != null){
      let h = this.rd.createElement(name)
      let t = this.rd.createText(text)
      this.rd.appendChild(h,t)
      this.rd.appendChild(this.el.nativeElement,h)
    }
  }
}
