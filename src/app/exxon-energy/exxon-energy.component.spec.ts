import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExxonEnergyComponent } from './exxon-energy.component';

describe('ExxonEnergyComponent', () => {
  let component: ExxonEnergyComponent;
  let fixture: ComponentFixture<ExxonEnergyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExxonEnergyComponent]
    });
    fixture = TestBed.createComponent(ExxonEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
