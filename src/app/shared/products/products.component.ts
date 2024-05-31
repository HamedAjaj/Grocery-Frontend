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


  products= [
    {
        "id": 1,
        "categoryName": "Fruits",
        "name": "Apples",
        "description": "Crisp and juicy apples",
        "image": "https://www.goodfruit.com/wp-content/uploads/snowflakeApple.jpg"
    },
    {
        "id": 2,
        "categoryName": "Fruits",
        "name": "Bananas",
        "description": "Sweet and ripe bananas",
        "image": "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg"
    },
    {
        "id": 3,
        "categoryName": "Fruits",
        "name": "Oranges",
        "description": "Citrusy and tangy oranges",
        "image": "https://cdn.shopify.com/s/files/1/1755/3995/products/lovecitrusnavelcopysmaller_8e9ab650-a4ae-4afc-9a6a-26b7dfbaea29.png?v=1612658453"
    },
    {
        "id": 4,
        "categoryName": "Vegetables",
        "name": "Carrots",
        "description": "Crunchy and fresh carrots",
        "image": "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg"
    },
    {
        "id": 5,
        "categoryName": "Vegetables",
        "name": "Broccoli",
        "description": "Healthy and green broccoli",
        "image": "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg"
    },
    {
      "id": 2,
      "categoryName": "Fruits",
      "name": "Bananas",
      "description": "Sweet and ripe bananas",
      "image": "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg"
  },
  {
      "id": 3,
      "categoryName": "Fruits",
      "name": "Oranges",
      "description": "Citrusy and tangy oranges",
      "image": "https://cdn.shopify.com/s/files/1/1755/3995/products/lovecitrusnavelcopysmaller_8e9ab650-a4ae-4afc-9a6a-26b7dfbaea29.png?v=1612658453"
  },
  {
      "id": 4,
      "categoryName": "Vegetables",
      "name": "Carrots",
      "description": "Crunchy and fresh carrots",
      "image": "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg"
  },
  {
      "id": 5,
      "categoryName": "Vegetables",
      "name": "Broccoli",
      "description": "Healthy and green broccoli",
      "image": "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg"
  },
  ]
  
    
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
