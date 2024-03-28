import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category/category';
import { SubCategory } from 'src/app/core/interfaces/products/product';
import { CategoryService } from 'src/app/core/services/catgegory/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  categories:Category[]=[]
  subCategories:SubCategory[]=[]
  
  constructor(private categoryService: CategoryService) {}
  
  ngOnInit() {
    this.getCategories();
    this.getProducts();
    
  }
  
  getCategories(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  
  getProducts() {
    this.categoryService.getProducts().subscribe(
      products => {
        this.subCategories = products;
      }
    )
  }
  
}
