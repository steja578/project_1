import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-table',
  imports: [CommonModule],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
})
export class ProductTable {
productArr:any[]=[];

// productService = inject(ProductService); - DI
constructor(private productService:ProductService){//lefthand side=object, RHS class
this.productArr = this.productService.getAllProducts();
}
}
