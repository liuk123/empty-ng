import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drag1Component } from "../views/drag1/drag1.component";
import { Drag2Component } from "../views/drag2/drag2.component";


// export const viewMap = new Map<string, any>();



@Injectable({
  providedIn: 'root'
})
export class ViewConfigService {

  baseDataUrl: string = "assets/data/";
  viewMap = new Map<string, any>()

  constructor(
    private http: HttpClient,
  ) {
    this.viewMap.set('app-drag1',Drag1Component)
    this.viewMap.set('app-drag2',Drag2Component)
  }

  
}
