import { TestBed } from '@angular/core/testing';

import { PrenotationService } from './prenotation.service';

describe('PrenotationService', () => {
  let service: PrenotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrenotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
