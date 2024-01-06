import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private userProfileBs = new BehaviorSubject<string>(''); // creating a storage to save data
  userProfile$ = this.userProfileBs.asObservable(); // this will help to send notificcations to all users those who subscribed to us

  constructor() { }

  saveUserName(userName: string) {
   this.userProfileBs.next(userName);
  }
}
