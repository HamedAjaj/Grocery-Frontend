import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category/category';
import { SubCategory } from 'src/app/core/interfaces/products/product';
import { CategoryService } from 'src/app/core/services/catgegory/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnChanges{

  @Input() sectionName!: string;
  @Input() categories!: Category[];
  @Input() subCategories!:SubCategory[];
  filteredsubCategories: SubCategory[] = [];
  selectedCategory: string = 'All';

  constructor(private categoryService: CategoryService) {}

    ngOnChanges(changes: SimpleChanges): void {
    const firstCategoryName = 'All';    
    this.onCategoryClick(firstCategoryName);
    console.log(this.categories,this.subCategories);
  }

  filterCategories() {
    this.filteredsubCategories = [];
    for (const subCategory of this.subCategories) {      
      if(this.selectedCategory == 'All' || subCategory.categoryName === this.selectedCategory) {
        this.filteredsubCategories.push(subCategory);
      }
    }
  }
  
  onCategoryClick(categoryName: string) {
    this.selectedCategory = categoryName;
    this.filterCategories();
  }
}
