import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteShareComponent } from './remote-share.component';

describe('RemoteShareComponent', () => {
  let component: RemoteShareComponent;
  let fixture: ComponentFixture<RemoteShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteShareComponent]
    });
    fixture = TestBed.createComponent(RemoteShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
