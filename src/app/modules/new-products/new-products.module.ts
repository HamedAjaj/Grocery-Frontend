import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductsRoutingModule } from './new-products-routing.module';
import { NewProductsComponent } from './new-products.component';


@NgModule({
  declarations: [
    NewProductsComponent
  ],
  imports: [
    CommonModule,
    NewProductsRoutingModule
  ]
})
export class NewProductsModule { }
