import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'new-products',
        loadChildren: () =>
          import('./new-products/new-products.module').then(
            (m) => m.NewProductsModule
          ),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },

      {
        path: 'wishlist',
        loadChildren: () =>
          import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'shopping-cart',
        loadChildren: () =>
          import('./shopping-cart/shopping-cart.module').then(
            (m) => m.ShoppingCartModule
          ),
      },

      { path: '**', component: NotFoundComponent },
    ],
  },
  {
    path: 'product-details',
    loadChildren: () =>
      import('./product/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
