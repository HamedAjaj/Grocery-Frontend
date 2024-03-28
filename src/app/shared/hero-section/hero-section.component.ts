import { AfterViewInit, Component } from '@angular/core';
/* import Swiper from 'swiper'; */

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {

  // swiper: Swiper | undefined;

  ngAfterViewInit() {
   /*  this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView:7,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); */
  }
}
