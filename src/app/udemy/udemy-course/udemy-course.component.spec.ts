import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCourseComponent } from './udemy-course.component';

describe('UdemyCourseComponent', () => {
  let component: UdemyCourseComponent;
  let fixture: ComponentFixture<UdemyCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdemyCourseComponent]
    });
    fixture = TestBed.createComponent(UdemyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
