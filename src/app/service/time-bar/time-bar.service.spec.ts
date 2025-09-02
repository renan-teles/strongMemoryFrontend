import { TestBed } from '@angular/core/testing';

import { TimeBarService } from './time-bar.service';

describe('TimeBarService', () => {
  let service: TimeBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
