import { Injectable } from '@angular/core'
import { JsUtilService } from 'src/app/shared/utils/js-util'

@Injectable()
export class ObjectUtilService extends JsUtilService {

  constructor() {super()}

  newFunction(data){
    return (new Function(data))()
  }

  encodeTree(){}
}
