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

}
