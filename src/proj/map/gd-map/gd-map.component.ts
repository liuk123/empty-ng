import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { filter, map, zipAll } from 'rxjs/operators';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-gd-map',
  templateUrl: './gd-map.component.html',
  styleUrls: ['./gd-map.component.less']
})
export class GdMapComponent implements OnInit {

  dynamicScripts = [
    "https://webapi.amap.com/maps?v=1.4.15&key=bb54c9aa6790d4bd016b01374ddc6a7f&plugin=Map3D,AMap.DistrictSearch&callback=onLoad",
    "https://webapi.amap.com/loca?v=1.3.2&key=bb54c9aa6790d4bd016b01374ddc6a7f"
    ]
  constructor(
    public util: UtilService
  ) {}

  ngOnInit(): void {
    this.util.dynamicLoadScript(this.dynamicScripts).subscribe(v=>{
      console.log(v)
    })
  }

  
}
