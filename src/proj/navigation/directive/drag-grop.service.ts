import { Injectable } from '@angular/core';

export interface DragData{
  data:any;
}

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  public dragData = null
}