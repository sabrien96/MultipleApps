import { CategoryService } from './../../../../../../shared/services/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../../../shared/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() subcategoryName: string = '';
  productsList: IProduct[];
  constructor(private categoryServ: CategoryService) {
    this.productsList = [];
  }

  ngOnInit(): void {
    this.getProductBySubcategory();
  }
  getProductBySubcategory() {
    this.categoryServ.getProductsBySubcategory(this.subcategoryName).subscribe((response) => {
      this.productsList = response;
    })
  }
}
