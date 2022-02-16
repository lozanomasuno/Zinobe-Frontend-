import { TestBed } from '@angular/core/testing';

import { UserWithApprovedLoanService } from './user-with-approved-loan.service';

describe('UserWithApprovedLoanService', () => {
  let service: UserWithApprovedLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithApprovedLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
