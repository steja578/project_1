import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs:['employee'],
  outputs:['onDelete']
})
export class EmployeeTable {
   employee: any;

   onDelete = new EventEmitter<any>();

   delete(empId: number) {
    this.onDelete.emit(empId);
  }
}
