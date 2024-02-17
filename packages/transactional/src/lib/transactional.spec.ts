import { transactional } from './transactional';

describe('transactional', () => {
  it('should work', () => {
    expect(transactional()).toEqual('transactional');
  });
});
