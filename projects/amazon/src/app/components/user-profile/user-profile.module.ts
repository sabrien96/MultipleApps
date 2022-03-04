import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { CoreModule } from './../../amazon-shared/modules/core.module';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { InfoComponent } from './user-profile/info/info.component';
import { OrdersComponent } from './user-profile/orders/orders.component';
import { CartsComponent } from './user-profile/carts/carts.component';
import { WishlistComponent } from './user-profile/wishlist/wishlist.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    InfoComponent,
    OrdersComponent,
    CartsComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserProfileRoutingModule,
    CoreModule
  ]
})
export class UserProfileModule { }
