import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeestable',
  imports: [FormsModule,
    CommonModule],
  templateUrl: './employeestable.html',
  styleUrl: './employeestable.css',
})
export class Employeestable {

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" ,"status":"inactive","role":"developer"},
    { "eId": 104, "name": "geeta", "sal": 80000, "gender": "female","status":"active" ,"role":"manager"},
    { "eId": 103, "name": "sameer", "sal": 60000, "gender": "male" ,"status":"active","role":"tester"},
    { "eId": 102, "name": "sita", "sal": 90000, "gender": "female","status":"active","role":"manager" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male","status":"inactive","role":"tester" }
  ];


}
