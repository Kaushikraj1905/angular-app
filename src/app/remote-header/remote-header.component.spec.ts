import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteHeaderComponent } from './remote-header.component';

describe('RemoteHeaderComponent', () => {
  let component: RemoteHeaderComponent;
  let fixture: ComponentFixture<RemoteHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteHeaderComponent]
    });
    fixture = TestBed.createComponent(RemoteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
