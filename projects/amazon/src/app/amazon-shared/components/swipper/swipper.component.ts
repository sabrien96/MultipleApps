import { IProduct } from './../../../../../../shared/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit {
@Input() productList:IProduct[]=[];
@Input() header:string='';
responsiveOptions;

constructor() {
  this.responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 2
    }
  ];
}

  ngOnInit(): void {
  }

}
