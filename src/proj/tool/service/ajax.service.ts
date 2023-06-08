import { Injectable } from '@angular/core'
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Injectable()
export class AjaxService {
  constructor(private http:HttpUtilService) {}

  getFavicon(data){
    const url = `/nodeapi/getFavicon`;
    return this.http.download('POST',url,data)
  }
  getSummary(data){
    // const url = `/nodeapi/ai-summary`;
    const url = `/nodeapi/bd-summary`;
    return this.http.post(url,data)
  }
}
