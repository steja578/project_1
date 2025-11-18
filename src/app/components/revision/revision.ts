import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-revision',
  imports: [FormsModule],
  templateUrl: './revision.html',
  styleUrl: './revision.css',
})
export class Revision {

  myName: string = 'virat';
  imgurl: string ='https://picsum.photos/300';
  flag:boolean=true;
num1=10;
num2=20;
  toggle(){
    this.flag=!this.flag;
  }
addresult:any;
  addition(a:any ,b:any){
    this.addresult=+a + +b;    //using + before variable it will convert string to number
// this.addresult=Number(a) + Number(b);
  }
}


