import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  template: '<textarea rows="4" nz-input [(ngModel)]="inputValue"></textarea>',
})
export class TextareaComponent{

  inputValue="";
  constructor() { }

}
