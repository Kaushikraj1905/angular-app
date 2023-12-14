import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkirtsComponent } from './skirts.component';

describe('SkirtsComponent', () => {
  let component: SkirtsComponent;
  let fixture: ComponentFixture<SkirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkirtsComponent]
    });
    fixture = TestBed.createComponent(SkirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
