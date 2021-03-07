import { Directive, HostListener, ElementRef, Renderer2, Input, ViewContainerRef } from '@angular/core';
import { ViewService } from '../service/views.service';

@Directive({
  selector: '[ins-droppable]',
})
export class DropDirective {
  _dropId
  @Input('dragEnterClass') dragEnterClass: string = 'q';
  @Input('ins-droppable') set dropId(val) {
    this._dropId = val
    // this.srv.setDropData(val,{left:this.el.nativeElement.offsetLeft,top:this.el.nativeElement.offsetTop})
  }
  get dropId() {
    return this._dropId
  }
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private srv: ViewService) {

  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
     
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      // console.log('dragover')
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      // console.log('dragleave');
      // this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {

      
      // this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

}


//设置dom元素属性
// if (this.dropTags.indexOf(dragData.tag) > -1) {
//   this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
//   this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
// } else {
//   this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
//   this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
// }