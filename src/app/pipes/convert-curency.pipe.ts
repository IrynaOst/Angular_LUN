import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCurency'
})
export class ConvertCurencyPipe implements PipeTransform {

  transform(value: number, course: any): any {
    return Math.round(value * course);
  }
}
