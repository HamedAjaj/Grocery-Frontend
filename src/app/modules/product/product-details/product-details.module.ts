import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import {GalleriaModule} from 'primeng/galleria';
import {RadioButtonModule} from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    GalleriaModule,
    RadioButtonModule,
    SharedModule,
    RatingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductDetailsModule { }
