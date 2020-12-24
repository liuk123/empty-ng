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
  
  constructor(private boutiqueSrv: BoutiqueService) { }

  ngOnInit(): void {
    this.boutiqueSrv.get4GCsvData().subscribe(res => {
      if(res){
        this.heatData = res
      }
    })
    this.boutiqueSrv.get5GCsvData().subscribe(res => {
      if(res){
        this.pointData = res
      }
    })
  }
}
