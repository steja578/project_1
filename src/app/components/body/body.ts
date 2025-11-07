import { Component } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';
import { Directives } from "../directives/directives";
import { Employeestable } from "../employeestable/employeestable";
import { MyModel } from "../my-model/my-model";
import { UserList } from '../user-list/user-list';
import { Products } from '../products/products';
import { EmployeeCRUD } from '../employee-crud/employee-crud';
import { Pipes } from '../pipes/pipes';

@Component({
  selector: 'app-body',
  imports: [
    Pipes
    // EmployeeCRUD
  // Databinding,
  //   TopDeals, 
  // Directives, 
  // Employeestable, 
  // MyModel, 
  // UserList, 
  // Products
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}