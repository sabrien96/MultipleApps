import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';



@NgModule({
  declarations: [
    CategoryComponent,
    SubcategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
