import { IProduct } from './../../../../../shared/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  resultArray:IProduct[] = [];
  transform(value: IProduct[], filterString: any, propName: any): any[] {
    if (value.length === 0 || filterString === null || propName === '') {
      return value;
    }

    // for (let item:IProduct in value) {
    //   if (item[propName] === filterString) {
    //     console.log("filter: ", this.resultArray);
    //     this.resultArray.push(item);
    //   }
    // }
    value=value.filter((item:any)=>{
      if (item[propName] === filterString) {
        console.log("filter: ", this.resultArray);
        return item;
      }
    })
    console.log(`${this.resultArray} ,  ${filterString}  ,  ${propName}`);

    return value;
  }
}
