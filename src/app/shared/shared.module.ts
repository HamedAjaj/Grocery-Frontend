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
import { InputComponent } from './custom-components/input/input.component';
import { ButtonComponent } from './custom-components/button/button.component';
import { ShoppingCardComponent } from './modals/shopping-card/shopping-card.component';
import { QuickViewComponent } from './modals/quick-view/quick-view.component';
import { TabViewComponent } from './product/tab-view/tab-view.component';
import { TabViewModule } from 'primeng/tabview';
import { DescriptionComponent } from './product/description/description.component';
import { AdditionalInformationComponent } from './product/additional-information/additional-information.component';
import { CustomerFeedBackComponent } from './product/customer-feed-back/customer-feed-back.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { RelatedProductsComponent } from './product/related-products/related-products.component';


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
    FooterComponent,
    InputComponent,
    ButtonComponent,
    ShoppingCardComponent,
    QuickViewComponent,
    TabViewComponent,
    DescriptionComponent,
    AdditionalInformationComponent,
    CustomerFeedBackComponent,
    RelatedProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    TabViewModule,
    RatingModule,
    FormsModule
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
    FooterComponent,
    InputComponent,
    ButtonComponent,
    ShoppingCardComponent,
    QuickViewComponent,
    TabViewComponent,
    DescriptionComponent,
    AdditionalInformationComponent,
    CustomerFeedBackComponent,
    RelatedProductsComponent
  ]
})
export class SharedModule { }
