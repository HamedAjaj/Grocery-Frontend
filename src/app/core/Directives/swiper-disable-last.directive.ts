import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSwiperDisableLast]'
})
export class SwiperDisableLastDirective {

  @Input() swiper: any; 

  constructor(private el: ElementRef) {}

  @HostListener('swiper.slideChange') onSlideChange() {
    if (this.swiper.isEnd) {
      this.el.nativeElement.classList.add('disabled'); 
    } else {
      this.el.nativeElement.classList.remove('disabled'); 
    }
  }
}
