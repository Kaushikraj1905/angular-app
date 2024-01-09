import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyOverviewComponent } from './udemy-overview.component';

describe('UdemyOverviewComponent', () => {
  let component: UdemyOverviewComponent;
  let fixture: ComponentFixture<UdemyOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdemyOverviewComponent]
    });
    fixture = TestBed.createComponent(UdemyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
