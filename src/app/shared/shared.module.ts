import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { HeaderNavComponent } from './nav/header-nav/header-nav.component';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CarouselModule } from 'primeng/carousel';
import { ProductsComponent } from './products/products.component';
import { OffersComponent } from './offers/offers.component';
import { BestSellsComponent } from './best-sells/best-sells.component';
import { BestSellsCarouselComponent } from './best-sells-carousel/best-sells-carousel.component';
import { TopReviewComponent } from './top-review/top-review.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavBarComponent,
    HeaderNavComponent,
    HeroSectionComponent,
    CategoryComponent,
    CategoryListComponent,
    ProductsComponent,
    OffersComponent,
    BestSellsComponent,
    BestSellsCarouselComponent,
    TopReviewComponent,
    AdvertisementComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
  ],
  exports:[
    NavBarComponent,
    HeaderNavComponent,
    HeroSectionComponent,
    CategoryComponent,
    CategoryListComponent,
    ProductsComponent,
    OffersComponent,
    BestSellsComponent,
    BestSellsCarouselComponent,
    TopReviewComponent,
    AdvertisementComponent,
    FooterComponent
  ]
})
export class SharedModule { }
