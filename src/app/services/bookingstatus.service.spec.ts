import { TestBed } from '@angular/core/testing';

import { BookingstatusService } from './bookingstatus.service';

describe('BookingstatusService', () => {
  let service: BookingstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
