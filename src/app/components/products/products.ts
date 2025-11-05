import { Component } from '@angular/core';
import products from './products_data';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  productArr = products;

}
