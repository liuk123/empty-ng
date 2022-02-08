import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emailto(e){
    e.preventDefault()
    e.stopPropagation()
    window.open('mailto:980479803@qq.com?subject=cicode')
  }
}
