import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  imports: [],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCRUD {

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" ,"status":"inactive","role":"developer"},
    { "eId": 104, "name": "geeta", "sal": 80000, "gender": "female","status":"active" ,"role":"manager"},
    { "eId": 103, "name": "sameer", "sal": 60000, "gender": "male" ,"status":"active","role":"tester"},
    { "eId": 102, "name": "sita", "sal": 90000, "gender": "female","status":"active","role":"manager" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male","status":"inactive","role":"tester" }
  ];

}
