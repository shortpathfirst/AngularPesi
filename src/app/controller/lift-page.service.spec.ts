import { TestBed } from '@angular/core/testing';

import { LiftPageService } from './lift-page.service';

describe('LiftPageService', () => {
  let service: LiftPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiftPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
