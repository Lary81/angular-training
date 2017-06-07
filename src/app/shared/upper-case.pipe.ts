import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string, size: number): any {
    return value.substr(0, size).toUpperCase() + value.substr(size);
  }

}
