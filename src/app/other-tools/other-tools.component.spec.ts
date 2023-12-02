import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherToolsComponent } from './other-tools.component';

describe('OtherToolsComponent', () => {
  let component: OtherToolsComponent;
  let fixture: ComponentFixture<OtherToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherToolsComponent]
    });
    fixture = TestBed.createComponent(OtherToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
