import { BookingStatusFilterPipe } from './booking-status-filter.pipe';

describe('BookingStatusFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookingStatusFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
