import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UdemyRoutingModule } from './udemy-routing.module';
import { UdemyOverviewComponent } from './udemy-overview/udemy-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { UdemyCourseComponent } from './udemy-course/udemy-course.component';


@NgModule({
  declarations: [
    UdemyOverviewComponent,
    UdemyCourseComponent
  ],
  imports: [
    CommonModule,
    
    UdemyRoutingModule
  ]
})
export class UdemyModule { }
