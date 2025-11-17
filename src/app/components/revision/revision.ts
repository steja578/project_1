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

  toggle(){
    this.flag=!this.flag;
  }
}
