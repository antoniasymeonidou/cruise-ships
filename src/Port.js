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
(function exportPort() {
  class Port {
    constructor(portName) {
      this.portName = portName;
      this.ships = [];
    }

    addShip(ship) {
      this.ships.push(ship);
    }
    removeShip(ship) {
      const removedShip = this.ships.indexOf(ship);
      this.ships.splice(removedShip, 1);
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();

