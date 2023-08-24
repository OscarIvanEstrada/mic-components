import { TestBed } from '@angular/core/testing';

import { MicOtpService } from './mic-otp.service';

describe('MicOtpService', () => {
  let service: MicOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
