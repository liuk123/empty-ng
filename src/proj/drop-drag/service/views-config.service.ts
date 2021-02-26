import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DragItem } from '../model/drag.model';

@Injectable({
  providedIn: 'root'
})
export class ViewConfigService {

  baseDataUrl: string = "assets/data/";
  viewMap = new Map<string, any>();

  constructor(
    private http: HttpClient,
  ) {}

  getViewJson(){
    const url = `${this.baseDataUrl}views.json`;
    return this.http.get<DragItem[]>(url);
  }
}
