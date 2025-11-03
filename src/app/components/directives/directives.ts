import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [  CommonModule,
    FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  num: number = 4;
   cars = ['Tata', 'Honda', 'Toyota', 'Hyundai']

   myMap = new Map().set(102, 'saiteja').set(103, 'suresh').set(104, 'bharath');

   employees1 = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

flag: boolean = true;


mystyle1 ={
  color: 'red',
  padding: '10px',
  border: '20px dotted black'
}
mystyle2 ={
  color: 'blue',
  padding: '10px',
  border: '25px dotted yellow'

}
myfunction(){
  return this.flag? this.mystyle1 : this.mystyle2;
}
}