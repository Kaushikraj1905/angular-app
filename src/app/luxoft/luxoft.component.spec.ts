import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxoftComponent } from './luxoft.component';

describe('LuxoftComponent', () => {
  let component: LuxoftComponent;
  let fixture: ComponentFixture<LuxoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuxoftComponent]
    });
    fixture = TestBed.createComponent(LuxoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
