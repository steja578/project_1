import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-templetedrivenform',
  imports: [FormsModule, CommonModule],
  templateUrl: './templetedrivenform.html',
  styleUrl: './templetedrivenform.css',
})
export class Templetedrivenform {

  submitForm(form:any){
    
  }

}
