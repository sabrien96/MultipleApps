import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  {path:':cateId',component:ProductsPageComponent},
  {path:'details/:cateId',component:ProductDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
