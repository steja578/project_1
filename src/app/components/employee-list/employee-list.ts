import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Employee } from '../../services/employee';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeService = inject(Employee);
  employeeArr: any=[];

  ngOnInit(){
    this.employeeService.getAllEmployees().subscribe((response:any)=>{
      console.log(response);
      this.employeeArr=response;
    });
  }
}
