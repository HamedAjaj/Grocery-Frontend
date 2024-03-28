import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../interfaces/category/category';
import { Endpoints } from '../../Grocery-Endpoints/endpoints';
import { Observable } from 'rxjs';
import { SubCategory } from '../../interfaces/products/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }


  getCategories():Observable<Category[]>{
    return this._http.get<Category[]>(`${Endpoints.CATEGORY}`);
  }
  
  getProducts():Observable<SubCategory[]>{
    return this._http.get<SubCategory[]>(`${Endpoints.SUBCATEGORYS}`);
  }
}
