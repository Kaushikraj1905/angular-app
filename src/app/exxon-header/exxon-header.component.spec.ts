import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExxonHeaderComponent } from './exxon-header.component';

describe('ExxonHeaderComponent', () => {
  let component: ExxonHeaderComponent;
  let fixture: ComponentFixture<ExxonHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExxonHeaderComponent]
    });
    fixture = TestBed.createComponent(ExxonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
