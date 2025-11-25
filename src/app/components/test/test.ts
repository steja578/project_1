import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-test',
  imports: [FormsModule,CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})


export class Test {
num1 :number = 10;
num2 : number = 20;
operator : String = '';
result : number = 0;
calculate(){
  switch(this.operator){
  case '+' : this.result = this.num1 + this.num2;
  break;
   case '-' : this.result = this.num1 - this.num2;
  break;
   case '*' : this.result = this.num1 * this.num2;
  break;
   case '/' : this.result = this.num1 / this.num2;
  break;

}
  
}
}
