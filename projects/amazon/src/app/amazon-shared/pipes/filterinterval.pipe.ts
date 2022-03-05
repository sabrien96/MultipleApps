import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../../../../shared/models/product';

@Pipe({
  name: 'filterInterval'
})
export class FilterbetweenPipe implements PipeTransform {

  transform(list: IProduct[], min: any, max: any=null, propName: any): any[] {
    if (list.length === 0 || min === null || propName === '') {
      return list;
    }
    if (max === null) {
      list = list.filter((item: any) => {
        if (item[propName] >= min) {
          return item;
        }
      })
    }
    else {
      list = list.filter((item: any) => {
        if (item[propName] >= min && item[propName] <= max) {
          return item;
        }
      })
    }

    return list;
  }

}
