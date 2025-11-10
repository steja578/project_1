import { CommonModule } from '@angular/common';
import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [CommonModule],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs:['child2'],
  outputs:['userEvent']
})
export class Child2Demo {
child2:any;
b:number=200;

user={name:'virat', add: 'india', age:38 }

userEvent = new EventEmitter();
sendDataToParent(){
 this.userEvent.emit(this.user);
}

}
