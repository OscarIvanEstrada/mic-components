import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicOtpComponent } from './mic-otp.component';

describe('MicOtpComponent', () => {
  let component: MicOtpComponent;
  let fixture: ComponentFixture<MicOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicOtpComponent]
    });
    fixture = TestBed.createComponent(MicOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
