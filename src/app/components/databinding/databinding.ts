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
}
