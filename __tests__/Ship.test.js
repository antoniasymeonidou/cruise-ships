const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship('Luna');
        expect(ship.startingPort).toBe('Luna');
    });
});