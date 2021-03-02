import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DragItem } from '../model/drag.model';


import { Drag1Component } from "../views/drag1/drag1.component";
import { Drag2Component } from "../views/drag2/drag2.component";

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  baseDataUrl: string = "assets/data/";
  viewMap = new Map<string, any>();

  constructor(
    private http: HttpClient,
  ) {
    this.viewMap.set('app-drag1',Drag1Component)
    this.viewMap.set('app-drag2',Drag2Component)
    console.log('servie')
  }

  getViewJson(){
    const url = `${this.baseDataUrl}views.json`;
    return this.http.get<DragItem[]>(url);
  }
  mkComponent(){
    
  }
}
