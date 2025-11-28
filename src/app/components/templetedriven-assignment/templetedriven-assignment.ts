import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-templetedriven-assignment',
  imports: [CommonModule, FormsModule],
  templateUrl: './templetedriven-assignment.html',
  styleUrl: './templetedriven-assignment.css',
})
export class TempletedrivenAssignment {
   submitForm(form: any) {
    console.log('Registration Form Submitted:', form);

    if (form.valid) {
      alert('Registration successful!');
      form.reset();
    }
  }

}

