import { Injectable } from '@angular/core'
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class AjaxService {
  constructor(private http:HttpUtilService) {}

  getFavicon(data){
    const url = `/nodeapi/getFavicon`;
    return this.http.download(url,data, {method: 'POST'})
  }
  getBdData(key, data){
    const url = `/nodeapi/bd`;
    const params=this.http.encodeParams({key})
    return this.http.post(url,data, {params})
  }
}
