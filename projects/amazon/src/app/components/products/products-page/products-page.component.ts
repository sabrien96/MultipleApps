import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../../../../shared/models/product';
import { CategoryService } from '../../../../../../shared/services/category.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnChanges {
  loading: boolean = false;
  loadingPage:boolean=false;
  categoryName: any='category name';
  cateId: any;
  subcategoryName: string='';
  subCategoryList: any[] = [];
  categoryList: any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryServe: CategoryService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.cateId = parseInt(params.get('cateId') + '')+1;
      // this.subName = params.get('subName') + '';
      console.log("cateId: ",this.cateId);    
    });
  }
  
  ngOnInit(): void {
    this.getCategoryName();
    this.getSubCategory();
    // this.fetchAllProduct();
    
  }
  ngOnChanges(changes: SimpleChanges): void {
 
  }


  getSubCategory(): void {
    this.categoryServe.getAllSubcategoryByCateId(this.cateId).subscribe(
      response => {
        this.subCategoryList = response;
        this.loadingPage=true;
      });
  }
  getCategoryName() {
    this.categoryServe.getAllCategory().subscribe((response) => {
      this.categoryName = response.filter((el: any) => {
        return el._id === this.cateId ? el.name : '';
      });
    });


  }
 
}
