const Port = require('../src/Port.js')

describe('Port', () => {
  const port = new Port('Calais');

  it('returns an object when instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });

  it('the port has a name', () => {
    expect(port.name).toEqual('Calais');
  });

  it('the port has an empty ships array', () => {
    expect(port.ships).toEqual([]);
  });
});

describe('adding and removing a ship from the port', () => {
  let dover;
  let titanic;

  beforeEach(() => {
    dover = new Port('Dover');
    titanic = jest.fn();
  });

  it('adds a ship to the port', () => {
    dover.addShip(titanic);
    expect(dover.ships).toContain(titanic);
  });

  it('Removes a ship from the port', () => {
    const queenMary = jest.fn();
    dover.addShip(titanic);
    dover.addShip(queenMary);
    dover.removeShip(queenMary);
    expect(dover.ships).toEqual([titanic]);
  });
});