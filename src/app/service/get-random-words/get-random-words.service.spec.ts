import { TestBed } from '@angular/core/testing';

import { GetRandomWordsService } from './get-random-words.service';

describe('GetRandomWordsService', () => {
  let service: GetRandomWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRandomWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
