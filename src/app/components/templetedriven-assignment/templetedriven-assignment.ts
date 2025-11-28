// import { Component, inject } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-templetedriven-assignment',
//   imports: [],
//   templateUrl: './templetedriven-assignment.html',
//   styleUrl: './templetedriven-assignment.css',
// })
// export class TempletedrivenAssignment {
// signUpForm!: FormGroup;
// formBuilder = inject(FormBuilder);

// constructor(){
//   // this.usingFormGroup();
//   this.usingFormBuilder();
//   }
 
//   usingFormGroup()
//   {
//   this.signUpForm = new FormGroup({
//     firstName : new FormControl('tej',[Validators.required, Validators.minLength(5)]),
//     lastName: new FormControl(),
//     email: new FormControl(),
//     address: new FormGroup({
//       city: new FormControl(),
//       state: new FormControl(),
//       pincode: new FormControl(), 
//     })
//   },{updateOn:'blur'});//change/blur/submit
// }
// usingFormBuilder()
// {
//   this.signUpForm = this.formBuilder.group(
//     {
//       firstName : ['tejj',Validators.required, Validators.minLength(5)],
//          lastName: [''],
//     email: [''],
//     address: this.formBuilder.group({
//       city: [''],
//       state: [''],
//       pincode: [''], 
//     }
//   )
// });
// }

// submitMyForm(){
//   console.log(this.signUpForm);
//   console.log(this.signUpForm.value);
// }


// }


