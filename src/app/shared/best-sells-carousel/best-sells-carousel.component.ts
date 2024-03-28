import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-sells-carousel',
  templateUrl: './best-sells-carousel.component.html',
  styleUrls: ['./best-sells-carousel.component.scss']
})
export class BestSellsCarouselComponent implements OnInit {
  responsiveOptions: any[] | undefined;

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
