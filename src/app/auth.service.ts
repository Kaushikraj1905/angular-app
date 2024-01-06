import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpI } from './sign-up/SignUpI';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(signUpInfo: SignUpI) {
    return this.http.post('http://localhost:3010/api/signup', signUpInfo);
  }
  logIn(logInInfo: any) {
    return this.http.post('http://localhost:3010/api/login', logInInfo);
  }
}
// RETRIEVE - get
// CREATE - post
// Update - put
// DELETE - delete