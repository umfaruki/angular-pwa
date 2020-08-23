import { TestBed } from '@angular/core/testing';

import { VerifyLoginAuthGuardService } from './verify-login-auth-guard.service';

describe('VerifyLoginAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyLoginAuthGuardService = TestBed.get(VerifyLoginAuthGuardService);
    expect(service).toBeTruthy();
  });
});
