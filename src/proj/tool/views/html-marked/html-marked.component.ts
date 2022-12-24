import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-marked',
  templateUrl: './html-marked.component.html',
  styleUrls: ['./html-marked.component.less']
})
export class HtmlMarkedComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  editChange(e){
    const clipboardData = e.clipboardData.getData('text/html')
    const text = e.clipboardData.getData('text/html')
    console.log(clipboardData)
    if(clipboardData && clipboardData.items){
      e.preventDefault()
      
    }
    
  }
}
