import { TestBed } from '@angular/core/testing';

import { DisplaylistService } from './displaylist.service';

describe('DisplaylistService', () => {
  let service: DisplaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
