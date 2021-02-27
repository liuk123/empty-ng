import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewConfigService {

  baseDataUrl: string = "assets/data/";

  constructor(
    private http: HttpClient,
  ) {}

  
}
