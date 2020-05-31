const Itinerary = require('../src/Itinerary.js')

describe('Itinerary', () => {
  it('should be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object)
  })
})
