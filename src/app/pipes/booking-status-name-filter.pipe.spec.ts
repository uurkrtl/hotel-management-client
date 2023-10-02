import { BookingStatusNameFilterPipe } from './booking-status-name-filter.pipe';

describe('BookingStatusNameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookingStatusNameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
