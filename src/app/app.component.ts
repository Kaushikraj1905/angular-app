import { Component, OnInit } from '@angular/core';
import { UspsComponent } from './usps/usps.component';
import { Router } from '@angular/router';
import { UserProfileService } from './user-profile.service';
import { UdemyService } from './udemy/udemy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  noOfCoursesIncart: number = 0;
  title: string = 'Training';
  name: string = 'Kaushik';
  userName: string = '';



  // variableName: dataType = value;
  // int studentId = 10;
  studentId: number = 10;
  studentName: string = 'John';
  studentEmailId: string = 'john@gmail.com';
  studentStatus: boolean = false;
  studentIds: number[] = [1, 2, 3, 4, 50, 60, 80];
  studentNames: string[] = ['Tom', 'John', 'Maxi'];

    company: any = {
    companyName: 'sira',
    companyId: 59432,
    companysize: 50,
    companyEmail: 'sira@gmail.com',
    companyAvailability: true,
    coampanyLocation: ['India', 'USA']
  };

  customer: any = {
    customerName: 'kaushik',
    customerEmailId: 'kaushikraj@gmail.com',
    prime: true,
    secondary: false,
    products: [
      { pName: 'Xbox', pId: 'xbox145', address: { stNo: '123', state: 'TX', city: 'Irving', zipcode: '75062' } },
      { pName: 'Tv', pid: 'samsung456' },
      { pName: 'Alexa', pid: 'alx789' }],
  };

  employee: any = {
    name: 'somr thing here',
    email: ''
  };
  uspscomponent: any;

  constructor(private router: Router, private userProfileService: UserProfileService, private udemyService: UdemyService) {
    this.studentName = 'ram';
  }

  ngOnInit() {
    this.userProfileService.userProfile$.subscribe(
      (userProfileInfo) => {
        console.log(userProfileInfo);
        this.userName = userProfileInfo;
      }
      )

      this.udemyService.itemsInCart$.subscribe(
        (udemyCartInfo) => {
          console.log(udemyCartInfo)
          this.noOfCoursesIncart = udemyCartInfo.length;
        }
      );
  }

  changeButtonAngular() {

  }
  
changeButtonReact() {

}
changeButtonVue() {

}
usps () {
  this.uspscomponent.usps()

}

navigateToMen() {
  this.router.navigate(['mens'])
}
navigateToWomen() {
  this.router.navigate(['womens'])
}

navigateTo(pathTo: string) {
  this.router.navigate([pathTo]) // 
}



}

// setOfCarNames=(name: string) => {}
// setOfCarModel = (Model: number) => {}
// getThePersonByName = (name: string) => {}

// export class AppComponent {
//   title = 'tutorial';
//   studentName:string = 
// }

// courseType(tutorialType: string) {
//   this.title = tutorialType;
// }