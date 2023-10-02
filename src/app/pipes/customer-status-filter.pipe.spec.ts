import { CustomerStatusFilterPipe } from './customer-status-filter.pipe';

describe('CustomerStatusFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerStatusFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
