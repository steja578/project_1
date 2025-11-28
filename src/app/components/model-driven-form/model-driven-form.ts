import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
signUpForm!: FormGroup;
formBuilder = inject(FormBuilder);

constructor(){
  // this.usingFormGroup();
  this.usingFormBuilder();
  }
 
  usingFormGroup()
  {
  this.signUpForm = new FormGroup({
    firstName : new FormControl('tej',[Validators.required, Validators.minLength(5)]),
    lastName: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(), 
    })
  },{updateOn:'blur'});//change/blur/submit
}
usingFormBuilder(){
  this.signUpForm = this.formBuilder.group(
    {
      firstName : ['tejj',[Validators.required, Validators.minLength(5)]],
         lastName: [''],
    email: [''],
    address: this.formBuilder.group({
      city: [''],
      state: [''],
      pincode: [''], 
    })
});
}

submitMyForm(){
  console.log(this.signUpForm);
  console.log(this.signUpForm.value);
}
}