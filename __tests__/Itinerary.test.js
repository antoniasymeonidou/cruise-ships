const Itinerary = require('../src/Itinerary.js')
const Port = require('../src/Port.js')

describe('Itinerary', () => {
  it('checks whether Itinerary can be instantiated ', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it('checks that Itinerary has a ports property', () => {
    const luna = new Port('luna');
    const calais = new Port('calais');
    const itinerary = new Itinerary([luna, calais]);
    expect(itinerary.ports).toEqual([luna, calais]);
  });
});
