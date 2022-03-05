import { CategoryService } from './../../../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { IProduct } from '../../../../../shared/models/product';
import { LocalStorageService } from '../../../../../shared/services/local-storage.service';
import { ProductsService } from '../../../../../shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  higherRatingList:IProduct[]=[];
  productsList: IProduct[] = [];
  filterBy:string='';
  filterMin:any;
  filterMax:any;
  originalProductsFilter: IProduct[] = [];
  addedItem:boolean=false;
  loading: boolean;
  notFound: boolean = false;
  allCategories: any;
  page = 1;
  count = 0;
  tableSize = 20;
  tableSizes = [3, 6, 9, 12];
  sortArr:string [] = ['price', 'discount', 'rating'];
  sortFiled:string='';
  constructor(
    private productServe: ProductsService,
    private categoryServ: CategoryService,
    private fb: FormBuilder,
    private localStorageServ:LocalStorageService
    ) {

    this.loading = false;

  }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
    this.fetchProduct();
  }

  //get all categories
  getAllCategory() {
    this.categoryServ.getAllCategory().subscribe((data) => {
      this.allCategories = data;
    });
  }
  //get all products
  getAllProducts() {
    this.productServe.getAllProducts().subscribe((data) => {
      this.originalProductsFilter = data;
      this.productsList = [...this.originalProductsFilter];
      this.loading = true;
      this.higherRatingList=this.productsList.filter((ele)=>{
        return ele.rating>=4;
      })
    });
  }
 
  fetchProduct(): void {
    this.categoryServ.getAllProducts().subscribe(
      response => {
        this.originalProductsFilter = response;
        // console.log(response);
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchProduct();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchProduct();
  }
  sortBy(event: any) {
    this.sortFiled=event.target.value;
  }
  // add item to whishlist
  addToWishList(product:IProduct){
   this.localStorageServ.addToWishList(product); 
   this.addedItem=true;
  }

}
