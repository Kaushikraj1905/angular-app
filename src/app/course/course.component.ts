import { Component, inject } from '@angular/core';
import { StudentI } from './StudentI';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  //variableName: dataType = value;
  courseId: string = 'angular18';
  courseName: string = 'angular';
  courseReleaseYear: number = 2015;
  isCourseActive: boolean = true;
  // courseService = inject(CourseService);

  student: StudentI = {
    firstName: 'Tom',
    lastName: 'Henry',
    age: 20,
    isInternationalStudent: true,
    studentAddress: {
      street: '2980 lee hwy',
      apt: 'G312',
      state: 'Tx',
      city: 'Dallas',
      zip: '90'
    },
    localGuardianAddress: {
      street: '29801 Tyco Road',
      apt: '711',
      state: 'VA',
      city: 'Fairfax',
      zip: '22031-7654',
    },
  };

  constructor(private courseService: CourseService) {
    // we can call  getDropDownValues() from here..
  }

  selectCourse() {
    // code goes here
    console.log('working...');
    console.log(this.student.firstName);


    this.courseService.getDataFromApi().subscribe(
      (successResp) => {
        console.log(successResp);
      },
      (errorResp) => {
        console.log(errorResp);
      }
    );
  }

  checkStatus(caseId: string, caseType: string) {
    console.log('check status function called...');
    console.log(caseId);
    this.courseId = 'angular-20';
    //
  }

  getDropDownValues() {
    // code to get all dropdowns from API...
  }

  customer: any = {
    fn: '',
    ln: '',
    cid: 'amz101',
    cardInfo: [
      {
        number: '1001-1001-1001-1001',
        cvv: 298,
        CardType: 'visa',
        isPrimary: true,
        expiredOn: '10/28',
      },
    ],
    products: [
      {
        pid: 'xb101',
        pName: 'xbox-5',

        deliveredAddress: {
          street: '2980 lee hwy',
          apt: 'G312',
          state: 'Tx',
          city: 'Dallas',
          zip: '22031-8907',
        },
      },
      {
        pid: 'ps101',
        pName: 'play station',
        deliveredAddress: {
          street: '2981  hwy',
          apt: '711',
          state: 'VA',
          city: 'Fairfax',
          zip: '22031-8977',
        },
      },
    ],
  };
}

// customer.products.length
// customer.products[0].pName


//fn
//ln
//vs
// country
// course
// variableName: dataType = value

// fn, ln, cid, cAdd, products, cardInfo

// testFun() {

// }

// testFun = () => {

// }

// someName() {

// }

// someName = () => {

// }

// () {

// }

// () => {

// }