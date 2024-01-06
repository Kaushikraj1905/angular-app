import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserProfileService } from '../user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private authService: AuthService,private userProfileService: UserProfileService, private router: Router,) {

  }


  ngOnInit() {
    this.createForm();
  
  }
   createForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    })
  }
 onLogInClick() {
  console.log(this.loginForm);
  console.log(this.loginForm.value);
 this.authService.logIn(this.loginForm.value).subscribe(
  (logInResponse) => {
    console.log(logInResponse);
    this.userProfileService.saveUserName(logInResponse['data'].user.userName);
    this.router.navigate(['communication']);
    //console.log(logInResponse['data'].user.userName)
  },
  (logInErrorResponse) => {
    console.log(logInErrorResponse);
    this.userProfileService.saveUserName('');
  }
 );
 }
}
// http://localhost:3010/api/login - POST

// userName: string
// password: string
// {
//   "data": {
//       "user": {
//           "userName": "kaushik",
//           "role": "Admin"
//       },
//       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk0YmMxZTUzNWRjNzhlYzhhMDUxZDYiLCJpYXQiOjE3MDQ0MTY5Njd9.1lje0vHzpENIB-VmWMGLTABJMxZ6ub1FQQjA0R-xYhE"
//   },
//   "status": 1
// }