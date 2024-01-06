import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SignUpI } from './SignUpI';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = new FormGroup({
      name: new FormControl(),
      userPassword: new FormControl(),
      userRole: new FormControl()
    })
  }

  onSignUpFormSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);

    let payload: SignUpI = {
      userName: this.signupForm.value.name,
      password: this.signupForm.value.userPassword,
      role: this.signupForm.value.userRole
    }

    this.authService.signUp(payload).subscribe(
      (signUpResponse) => {
        console.log(signUpResponse);
      },
      (signUpErrorResponse) => {
        console.log(signUpErrorResponse);
      }
    );
  }



}

// http://localhost:3010/api/signup - POST
// userName: String, required: true,
// password: {type: String, required: true, ,
// role: {type: String, required: true,