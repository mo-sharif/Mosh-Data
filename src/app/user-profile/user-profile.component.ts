import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DefaultImgPipe } from '../pipes/default-img.pipe'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  formElements: any;
  formattedMessage: string;
  imageUrl: string = "";
  userForm = this.fb.group({
    firstName: ['Mosh', Validators.required],
    lastName: ['Bubbah', Validators.required],
    email: ['Mo@mosh-media.com'],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
 

  constructor(private fb: FormBuilder,private defaultImg: DefaultImgPipe)  { }

  ngOnInit() {
   this.formElements =  JSON.parse(localStorage.getItem("userForm"));
    console.log(this.formElements);
    this.onChanges();
  }
  
onSubmit() {
  // TODO: Use EventEmitter with form value
  //console.warn(this.userForm.value);
  console.log(this.userForm.value);
  localStorage.setItem("userForm",  JSON.stringify(this.userForm.value));
  
}

onChanges(): void {

    this.formattedMessage =
    `Hello,

    My name is ${this.formElements.firstName + ' ' + this.formElements.lastName} and my email is ${this.formElements.email}.

    I would like to tell you that..`;

}
  
}
