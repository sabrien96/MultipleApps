import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Array<any>, args: any[]): any {
    const sortField = args[0];
    const sortedDirection = args[1];
    let multiplier = 1;
    console.log('from pipe: ',sortField);

    if (sortedDirection === 'desc') {
      multiplier = -1;
    }
    value.sort((a: any, b: any) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      }
      else if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      }
      else
        return 0;
    });
    return value;
  }

}