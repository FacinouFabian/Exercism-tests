import Series from './series'

describe('Series', () => {
  it('has digits (short)', () => {
    const series = new Series('01234')
    expect(series.digits).toEqual([0, 1, 2, 3, 4])
  })
})
