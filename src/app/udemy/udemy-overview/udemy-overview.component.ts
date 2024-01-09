import { Component } from '@angular/core';
import { UdemyService } from '../udemy.service';

@Component({
  selector: 'app-udemy-overview',
  templateUrl: './udemy-overview.component.html',
  styleUrls: ['./udemy-overview.component.css']
})
export class UdemyOverviewComponent {

  courseList: any[] = [];

  constructor(private udemyService: UdemyService) {

  }

  getAllCourses() {
    this.udemyService.getAllCourses().subscribe(
      (response: any) => {
        this.courseList = response;
      },
      (error) => {
        console.log(error)
      },
    );
  }

}
