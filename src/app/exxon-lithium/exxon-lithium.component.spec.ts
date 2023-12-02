import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExxonLithiumComponent } from './exxon-lithium.component';

describe('ExxonLithiumComponent', () => {
  let component: ExxonLithiumComponent;
  let fixture: ComponentFixture<ExxonLithiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExxonLithiumComponent]
    });
    fixture = TestBed.createComponent(ExxonLithiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
