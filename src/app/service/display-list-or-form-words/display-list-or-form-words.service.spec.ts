import { TestBed } from '@angular/core/testing';

import { DisplayListOrFormWordsService } from './display-list-or-form-words.service';

describe('DisplayListOrFormWordsService', () => {
  let service: DisplayListOrFormWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayListOrFormWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
