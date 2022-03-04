import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { InfoComponent } from './user-profile/info/info.component';
import { OrdersComponent } from './user-profile/orders/orders.component';
import { CartsComponent } from './user-profile/carts/carts.component';
import { WishlistComponent } from './user-profile/wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'',component:UserProfileComponent,
    children:[
      {
        path:'info',component:InfoComponent
      },
      {
        path:'wishlist',component:WishlistComponent
      },
      {
        path:'carts',component:CartsComponent
      },
      {
        path:'orders',component:OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
