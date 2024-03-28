import {  AfterViewInit, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SubCategory } from 'src/app/core/interfaces/products/product';
import { Component } from '@angular/core';

// import Swiper core and required modules
/* import SwiperCore, { Navigation, Pagination, Swiper} from 'swiper';

SwiperCore.use([Pagination,Navigation]); */

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  @Input() SubCategory!:SubCategory[];
  @Input() ProductId!:string;
  responsiveOptions: any[] | undefined;
  backgroundColor:string[]=[];

  //constructor(private productService: ProductService) {}


    
    ngOnInit() {
     /*    this.productService.getProductsSmall().then((products) => {
            this.products = products;
        }); */

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

   
    // Generate colors

  generateColorArray(numColors: number, min: number, max: number) {
    for (let i = 0; i < numColors; i++) {
      this.backgroundColor.push(this.generateRandomColor(min, max));
    }
    return this.backgroundColor;
  }

  generateRandomColor(min: number, max: number) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${r}, ${g}, ${b})`;
  }

  

}
