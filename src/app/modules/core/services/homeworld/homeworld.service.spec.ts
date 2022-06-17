import { TestBed } from '@angular/core/testing';

import { HomeworldService } from './homeworld.service';

describe('HomeworldService', () => {
  let service: HomeworldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeworldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
