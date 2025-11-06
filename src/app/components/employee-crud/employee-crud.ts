import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';	
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {
faTrash = faTrash;
faEye = faEye;
faUserPlus = faUserPlus;
selectedEmployee: any = null;
showAddForm = false;

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" ,"status":"inactive","role":"developer"},
    { "eId": 104, "name": "geeta", "sal": 80000, "gender": "female","status":"active" ,"role":"manager"},
    { "eId": 103, "name": "sameer", "sal": 60000, "gender": "male" ,"status":"active","role":"tester"},
    { "eId": 102, "name": "sita", "sal": 90000, "gender": "female","status":"active","role":"manager" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male","status":"inactive","role":"tester" }
  ];

  deleteEmployeeCRUD(inputValue: number)
  {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33"
}).then((result) => {
  if (result.isConfirmed) {
    this.employees = this.employees.filter(emp => emp.eId !== inputValue);
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }

  viewEmployeeCRUD(view: any)
  {
  this.selectedEmployee = view;
  }
  
  newEmployee = { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" ,"status":"inactive","role":"developer"};
  addEmployee()
  {
    this.employees.push(this.newEmployee);
  }
}
