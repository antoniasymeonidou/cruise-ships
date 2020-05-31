const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary.js')

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
      let ship;
      let luna 
      let calais 
      let itinerary;
  
      beforeEach(() => {
        luna = new Port('luna');
        calais = new Port('calais');
        itinerary = new Itinerary([luna, calais]);
        ship = new Ship(itinerary);
      });
  
      it('can be instantiated', () => {
        expect(ship).toBeInstanceOf(Object);
      });
      it('starting port', () => {
        expect(ship.currentPort).toBe(luna);
      });
      it('can set sail', () => {
        ship.setSail();
        expect(luna.ships).not.toContain(ship);
      });
      it('gets added to the port on instantiation', () => {
        expect(luna.ships).toContain(ship);
      });
      it('can dock at another port', () => {
        ship.setSail();
        ship.dock();
  
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
      });
      it('can\'t sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();
  
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
      it('can add a ship', () => {
        luna.addShip(ship);
  
        expect(luna.ships).toContain(ship);
      });
      it('can remove a ship', () => {
        const titanic = {};
        const mary = {};
  
        calais.addShip(titanic);
        calais.addShip(mary);
        calais.removeShip(mary);
  
        expect(calais.ships).toEqual([titanic]);
      });
    });
  });
