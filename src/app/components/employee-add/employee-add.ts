import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs:['onAdd']
})
export class EmployeeAdd {
onAdd = new EventEmitter<any>();

  name : any ='';
  sal: any='';
  gender: any ='';
  dept : any='';
  status: any='';
  role : any='';

  addEmployee() {
    //if (!this.name || !this.sal) return;
      const newEmp = {
      name: this.name,
      sal: Number(this.sal),
      gender: this.gender,
      dept: this.dept,
      status: this.status,
      role: this.role,
    };

    
    this.onAdd.emit(newEmp);
    this.name = this.sal = this.gender = this.dept = this.status = this.role = '';
  }
}
