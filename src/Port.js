// function Port(name) {
//   this.name = name;
//   this.ships = [];
// }

// Port.prototype.addShip = function addShip(ship) {
//   this.ships.push(ship);
// };

// Port.prototype.removeShip = function removeShip(ship) {
//   if (!this.ships.includes(ship)) {
//     throw new Error('ship is not docked');
//   }
//   const shipIndex = this.ships.indexOf(ship);
//   this.ships.splice(shipIndex, 1);
// };

class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  removeShip(ship) {
    if (!this.ships.includes(ship)) {
      throw new Error('ship is not docked');
    }
    const shipIndex = this.ships.indexOf(ship);
    this.ships.splice(shipIndex, 1);
  }
}


module.exports = Port;