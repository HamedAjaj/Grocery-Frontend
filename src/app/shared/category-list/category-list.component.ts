import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SubCategory } from 'src/app/core/interfaces/products/product';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class CategoryListComponent  implements OnInit{
  @Input() SubCategory!:SubCategory[];
  @Input() ProductId!:string;

  backgroundColor:string[]=[];

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
    // Generate colors
        const min=210;
        const max=255;
        this.backgroundColor = this.generateColorArray(20,min,max);      
  }


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
