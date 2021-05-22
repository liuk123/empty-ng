import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fn'
})
export class FnPipe implements PipeTransform {
    transform(value: any, args: Function|null){
        return args?args(value):value
    }
}