import { TestBed } from '@angular/core/testing';

import { VerbeteService } from './verbete.service';

describe('VerbeteService', () => {
  let service: VerbeteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbeteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
