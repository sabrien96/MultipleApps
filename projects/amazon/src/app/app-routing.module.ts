import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'products', loadChildren: () => import('./components/products/products.module')
      .then(m => m.ProductsModule)
  },
  {
    path: 'auth', loadChildren: () => import('./components/authenticate/authenticate.module')
      .then(m => m.AuthenticateModule)
  },
  {
    path: 'user', loadChildren: () => import('./components/user-profile/user-profile.module')
      .then(m => m.UserProfileModule),
  },
  { path: '**', component: NotFoundComponent }


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
