import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { parse } from 'path';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  myName: string = 'Bharath';
  imgUrl: string ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxf0Pl2qPmxxHkrFuBPVfKMX3tHbIkKU_Y3g&s'

  flag: boolean = true;
  col_span = 2;

  num1: number = 10;
  num2: number = 20;

  toggleflag(){
    this.flag = !this.flag; // change value true to false , false to true 
  }

  addResult:any;
  performAdd(a:any, b:any)
  {
    //this.addResult = a+b;
    //this.addResult = +a + +b
    this.addResult = Number(a) +Number(b);
    // this.addResult = parseInt(a) + parseInt(b); //  a+b

  }
  TypeInput:any;
  remaining = 100;
  
  hiddenValue : boolean = false; 
  hide(){
    this.hiddenValue = ! this.hiddenValue;
  }
  stateN:any;

  
 stateN1: string = ""; //// variable bound to the dropdown

  arthResult:any;
  selectedOp:any;
 arth(a: string, b: any, c: any) {
  this.selectedOp = a;
  const x = Number(b);
  const y = Number(c);

  switch (a) {
    case 'add':
      this.arthResult = x + y;
      break;
    case 'minus':
      this.arthResult = x - y;
      break;
    case 'multiply':
      this.arthResult = x * y;
      break;
    case 'division':
      this.arthResult = x / y;
      break;
    default:
      this.arthResult = 'Invalid operation';
  }
}

inputType= 'password';
toggleType(){
this.inputType = (this.inputType === 'password' && 'text') || 'password';
}


count = 0;
decrement(){
  this.count--;
}
increment(){
  this.count++;
}
reset(){
  this.count = 0;
}

 DarkMode: boolean = false;
toggleTheme(){
 this.DarkMode = !this.DarkMode

}

celsius: number = 0;
fahrenheit: number = 0;
convert(){
  this.fahrenheit = (this.celsius * 9/5) + 32
}

employees = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

}
