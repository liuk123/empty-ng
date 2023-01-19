import { Injectable } from '@angular/core'
import { JsUtilService } from 'src/app/shared/utils/js-util'

@Injectable()
export class ObjectUtilService extends JsUtilService {

  constructor() {super()}

  findTreeOne(data, condition, fn){
    if(this.isObject(data)){
      
    }
  }

  newFunction(data){
    return (new Function(data))()
  }
}
