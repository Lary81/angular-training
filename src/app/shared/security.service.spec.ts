import { TestBed, inject } from '@angular/core/testing';

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityService]
    });
  });

  it('should be created', inject([SecurityService], (service: SecurityService) => {
    expect(service).toBeTruthy();
  }));

  it('should authenticate test user with test password', inject([SecurityService], (service: SecurityService) => {
    service.login("test", "test")
    expect(service.isAuthenticated).toBeTruthy();
  }));
});
