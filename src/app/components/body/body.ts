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
import { ProductAssignment } from "../product-assignment/product-assignment";
import { ParentDemo } from "../parent-demo/parent-demo";
import { EmployeeAdd } from "../employee-add/employee-add";
import { EmployeeCrudAssignment } from '../employee-crud-assignment/employee-crud-assignment';

@Component({
  selector: 'app-body',
  imports: [
    EmployeeCrudAssignment
    // Pipes
    // EmployeeCRUD
    // Databinding,
    //   TopDeals, 
    // Directives, 
    // Employeestable, 
    // MyModel, 
    // UserList, 
    // Products
    // ParentDemo,
    // EmployeeAdd
],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}