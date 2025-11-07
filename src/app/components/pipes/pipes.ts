import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custom_pipe/ordinal-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, FormsModule, OrdinalPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  dateObj = new Date();
  user = { name: 'John Doe', age: 30 }

  num: number=21;
}
