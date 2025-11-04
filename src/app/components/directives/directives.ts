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


filter = 'All';
  taskArr = [
    { title: 'Complete Angular assignment', completed: false },
    { title: 'Review pull requests', completed: true },
    { title: 'Prepare project report', completed: false },
    { title: 'Attend team meeting', completed: true },
    { title: 'Update documentation', completed: false }
  ];
    selectedTaskState : string = 'all';
    filterTasksArray() {
      if(this.selectedTaskState === 'all'){
        return this.taskArr;
      }else if(this.selectedTaskState === 'completed'){
        return this.taskArr = this.taskArr.filter(task => task.completed);
      }else (this.selectedTaskState === 'pending')
      {
        return this.taskArr = this.taskArr.filter(task => !task.completed);
      }
    }
  

  cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 4999, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 1999, qty: 1 },
    { id: 4, name: 'Power Bank', price: 1299, qty: 3 }
  ];

  increaseQty(item: any) {
    item.qty++;
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}