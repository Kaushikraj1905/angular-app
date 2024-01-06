import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormService } from '../form.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  universityName: any;

  universityForm: FormGroup;

  
  
  ngOnInit() {
    console.log('ngOnInit..');
    console.log(this.universityForm);
    this.createForm();
    console.log(this.universityForm);
  }

  constructor() {
    console.log('constructor..');
  }
  


  createForm() {
    this.universityForm = new FormGroup({
      universityName: new FormControl(''),
      universityId: new FormControl(''),
      universityCountry: new FormControl(''),
    });
  }

  universityList() {
    console.log(this.universityName);

    this.FormService.universityList(this.universityName).subscribe(
      (success) => {
        console.log(success);
        console.log(this.universityList.length);
        // this.universityList = success;
        // console.log(this.universityList.length);
      },
      (error) => {
        console.log('error');
      }
    );
  }

  FormService = inject(FormService);

  onFormSubmit() {
    console.log(this.universityForm);
    console.log(this.universityForm.value);
  }

  ngOnDestroy(): void {
    console.log('Destroyed..')
  }
}


// http://localhost:3010/api/courses
// POST
// {
//   "studentName": "Bhargav",
//       "studentId": "react-101",
//       "course": "React",
//       "completedYear": 2021,
//       "term": "fall"
//   }


// http://localhost:3010/api/getAllCompletedCourses
// GET


