import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  { path: '', component: ModulesComponent ,children:[
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'new-products', loadChildren: () => import('./new-products/new-products.module').then(m => m.NewProductsModule) },
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
