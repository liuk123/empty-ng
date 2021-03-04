import { Directive, HostListener, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[ins-droppable]',
})
export class DropDirective {
  @Input('dragEnterClass') dragEnterClass:string='adsd';
  constructor(
    private el:ElementRef,
    private rd:Renderer2,) {
       
    }
//设置dom元素属性
// if (this.dropTags.indexOf(dragData.tag) > -1) {
//   this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
//   this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
// } else {
//   this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
//   this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
// }
  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      // console.log('dragenter');
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
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
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

}
