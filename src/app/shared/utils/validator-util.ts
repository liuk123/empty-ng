import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidatorUtilService {
  reg = {
    phone: /^1\d{10}$/,
    email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
  }
  constructor() { }

  customValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value){
        const forbidden = nameRe.test(control.value);
        return forbidden ? null: {forbiddenName: {value: control.value}};
      }else{
        return null
      }
    };
  }
}