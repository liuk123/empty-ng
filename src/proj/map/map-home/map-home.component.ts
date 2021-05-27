import { Component, OnInit } from '@angular/core';
import { MapService } from '../service/map.service';

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.less']
})
export class MapHomeComponent implements OnInit {

  heatData
  constructor(
    private srv: MapService
  ) { }

  ngOnInit(): void {
    this.srv.get4GData().subscribe(v=>{
      this.heatData = v.data
    })
  }

}
