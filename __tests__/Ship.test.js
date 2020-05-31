const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object)
  })

  it('has a starting port', () => {
    const ship = new Ship('Luna')
    expect(ship.startingPort).toBe('Luna')
  })

  it('can set sail', () => {
    const ship = new Ship('Luna')
    ship.setSail()
    expect(ship.startingPort).toBeFalsy()
  })

  it('can dock in a different port', () => {
    const luna = new Port('Luna')
    const ship = new Ship(luna)
    const calais = new Port('Calais')
    ship.dock(calais)
    expect(ship.currentPort).toBe(calais)
  })
})
