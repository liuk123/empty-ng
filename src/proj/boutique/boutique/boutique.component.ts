import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from 'src/proj/service/boutique.service';

@Component({
  selector: 'app-fiveg-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.less']
})
export class BoutiqueComponent implements OnInit {
  heatData
  pointData
  dbHeatData

  // p1="9M5g_liuliang"
  // p2="12M5g_liuliang"
  p1="9M5g_yonghushu"
  p2="9M5g_yonghushu"
  // p1="9MSite_zhuliubi"
  // p2="12MSite_zhuliubi"
  // p1="9M_fugailv"
  // p2="12M_fugailv"
  maxValue=10000
  minValue=0
  
  constructor(private boutiqueSrv: BoutiqueService) { }

  ngOnInit(): void {
    // this.boutiqueSrv.get4GCsvData().subscribe(res => {
    //   if(res){
    //     this.heatData = res
    //   }
    // })
    // this.boutiqueSrv.get5GCsvData().subscribe(res => {
    //   if(res){
    //     this.pointData = res
    //   }
    // })
    this.boutiqueSrv.getContrastCsvData().subscribe(res=>{
      this.dbHeatData = res;
    })
  }
}
