import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteConnectComponent } from './remote-connect.component';

describe('RemoteConnectComponent', () => {
  let component: RemoteConnectComponent;
  let fixture: ComponentFixture<RemoteConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteConnectComponent]
    });
    fixture = TestBed.createComponent(RemoteConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
