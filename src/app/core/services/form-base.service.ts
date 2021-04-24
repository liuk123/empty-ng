import { Injectable }   from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormBase } from 'src/app/shared/components/form-item/form-item.component';


@Injectable({
  providedIn: 'root'
})
export class InputControlService {
  constructor(private fb: FormBuilder) { }

  toFormGroup(questions: FormBase<string>[] ) {
    let group: any = {};

    group = questions.reduce((obj,v,i)=>{
        obj[v.key]=[v.value, v.valide]
        return obj
      },{})
    return this.fb.group(group);
  }
}