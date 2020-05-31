const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary.js')

describe('Ship', () => {
  let dover
  let calais
  let itinerary
  let ship

  beforeEach(() => {
    const port = {
      removeShip: jest.fn(),
      addShip: jest.fn()
    }

    dover = {
      ...port,
      name: 'Dover',
      ships: []
    }

    calais = {
      ...port,
      name: 'calais',
      ships: []
    }

    itinerary = {
      ports: [dover, calais]
    }

    ship = new Ship(itinerary)
  })
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object)
  })

  it('has a starting port', () => {
    expect(ship.currentPort).toBe(dover)
  })

  it('sets sail from current port', () => {
    ship.setSail()
    expect(ship.currentPort).toBeFalsy()
    expect(ship.previousPort).toBe(dover)
  })

  it('can dock at a different port', () => {
    ship.setSail()
    ship.dock()
    expect(ship.currentPort).toBe(calais)
  })

  it('can\'t sail further than the itinerary', () => {
    ship.setSail()
    ship.dock()
    expect(() => ship.setSail()).toThrowError('End of itinerary reached')
  })
})
