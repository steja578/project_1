import { Component } from '@angular/core';
import cardData from './product2-assignment'
import { ProductAssignmentItem } from '../product-assignment-item/product-assignment-item';

@Component({
  selector: 'app-product-assignment',
  imports: [ProductAssignmentItem],
  templateUrl: './product-assignment.html',
  styleUrl: './product-assignment.css',
})
export class ProductAssignment {
 productsData=cardData;

}

