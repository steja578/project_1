import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {

  employeeService  = inject(EmployeeService);

  selectedCategory:any = "allEmployees";
  employee_data :any[] =[];

  constructor(){
    this.loadDetails();
  }

  loadDetails(){
    if(this.selectedCategory ==="allEmployees"){
      this.employee_data =  this.employeeService.getAllEmployees();
    }else if(this.selectedCategory ==="maleEmployees"){
      this.employee_data =  this.employeeService.getMaleEmployees();
    }else{
      this.employee_data =  this.employeeService.getFemaleEmployees();
    }
  }
}
