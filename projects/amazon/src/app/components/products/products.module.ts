import { CoreModule } from './../../amazon-shared/modules/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsPageComponent } from './products-page/products-page.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule
  ]
})
export class ProductsModule { }
