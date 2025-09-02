import { TestBed } from '@angular/core/testing';

import { StrongMemoryApiService } from './strong-memory-api.service';

describe('StrongMemoryApiService', () => {
  let service: StrongMemoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrongMemoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
