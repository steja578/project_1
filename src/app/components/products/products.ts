import { Component } from '@angular/core';
import products from './products_data';
import { FormsModule } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule, FontAwesomeModule, NgxPaginationModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  faStar = faStar;
  p: number = 1;
  filteredProducts = products;
  categoryArr: string[] = [];
  selectedCategory: string = 'all';
  searchText:String= '' ;

  constructor() {
    this.categoryArr = products.map(prod => prod.category); // duplicate categories
    this.categoryArr = ['all', ...new Set(this.categoryArr)]; // unique categories
  }
  onCategoryChange() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = products;
    } else {
      this.filteredProducts = products.filter(product => product.category === this.selectedCategory);
    }
  }




  sortAsc()
  {
    this.filteredProducts.sort((a, b) => a.price - b.price);
  }

  sortDesc()
  {
     this.filteredProducts.sort((a, b) => b.price - a.price);
  }
}