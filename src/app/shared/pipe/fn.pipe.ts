import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fn'
})
export class FnPipe implements PipeTransform {
    transform(value: any, args: Function, ...param:any[]){
        return args?args(value, ...param):value
    }
}