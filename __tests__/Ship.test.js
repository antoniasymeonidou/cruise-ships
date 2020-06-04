const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary.js')

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let luna;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      // luna = new Port('Luna');
      const port = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      luna = {
        ...port,
        name: 'Luna',
      };
      // calais = new Port('Calais');
      calais = {
        ...port,
        name: 'Calais',
      };
      // itinerary = new Itinerary([luna, calais]);
      itinerary = {
        ports: [luna, calais],
      };
      ship = new Ship(itinerary);
    });

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toEqual(luna);
    });

    it('Ship > gets added to the port on instantiation', () => { // with spy
      // expect(luna.ships).toContain(ship);
      expect(luna.addShip).toHaveBeenCalledWith(ship); 
    });

    it('Ship > can set sail', () => { // with spy
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(luna.removeShip).toHaveBeenCalledWith(ship); 
      // expect(luna.ships).not.toContain(ship);
    });

    it('Ship > can dock at a different port', () => { // with spy
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toEqual(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship); 
      // expect(calais.ships).toContain(ship);
    });
  });
});