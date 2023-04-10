
import { Component, ComponentRef, HostBinding, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { JsUtilService } from 'src/app/shared/utils/js-util';

@Component({
  selector: 'app-template',
  template: `
    <ng-container #tempContainer></ng-container>
  `,
  styles: []
})
export class TemplateComponent implements OnInit{

  @Input() id=null
  @HostBinding('id') get Id(){
    return this.id
  }
  private _data = []
  get data(){
    return this._data
  }
  @Input() set data(val){
    if(val){
      val.forEach((item,index)=>{
        if(!this.util.isSame(item, this._data[index])){
          console.log('refresh')
          this.refresh(item,index)
          this._data[index] = item
        }
      })
      let len = this._data.length - val.length
      if(len>0){
        for(let i=val.length; i<this._data.length; i++){
          this.vf.remove(i)
        }
      }
    }else{
      this.vf.clear()
      this._data = []
    }
  }
  @ViewChild('tempContainer', {read: ViewContainerRef, static: true}) vf:ViewContainerRef
  componentRef: ComponentRef<unknown>=null

  constructor(private util: JsUtilService) {}
  ngOnInit(): void {}
  refresh(data, index=null){
    if(index!==null&& this.vf.get(index)){
      this.vf.remove(index)
    }
    if(this.componentRef!==null){
      let ref = this.vf.createComponent(this.componentRef.componentType,{index})
      // this.setCompInput(data, ref)
      ref.setInput('data', data)
    }
  }
  setCompInput(data, componentRef){
    Object.keys(data).forEach(key => {
      if (key in (componentRef.instance as any)) {
        componentRef.setInput(key, data[key])
      }
    })
  }
}
