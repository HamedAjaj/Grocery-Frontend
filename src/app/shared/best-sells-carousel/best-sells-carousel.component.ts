import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-sells-carousel',
  templateUrl: './best-sells-carousel.component.html',
  styleUrls: ['./best-sells-carousel.component.scss']
})
export class BestSellsCarouselComponent implements OnInit {
  responsiveOptions: any[] | undefined;



bestproducts=[
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
  }
]

  ngOnInit() {
    
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

}
