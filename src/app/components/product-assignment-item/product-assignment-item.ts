import { Component } from '@angular/core';

@Component({
  selector: 'app-product-assignment-item',
  imports: [],
  templateUrl: './product-assignment-item.html',
  styleUrl: './product-assignment-item.css',
  inputs:["passDataToChild"]
})
export class ProductAssignmentItem {
passDataToChild :any;
}
