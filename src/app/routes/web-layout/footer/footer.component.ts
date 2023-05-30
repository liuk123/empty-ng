import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {

  sub=null
  constructor() { }

  ngOnInit(): void {
    let t1 = new Date().getTime() - new Date('2022-02-07').getTime()
    let y = Math.floor(t1/1000/60/60/24/365)
    let m = Math.floor(t1/1000/60/60/24/30%12)
    let d = Math.floor(t1/1000/60/60/24%30)
    this.sub = `${y}年${m}月${d}天`
  }
  emailto(e){
    e.preventDefault()
    e.stopPropagation()
    window.open('mailto:980479803@qq.com?subject=cicode')
  }
}
