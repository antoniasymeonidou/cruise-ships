// function Ship(itinerary) {
//   this.itinerary = itinerary;
//   this.currentPort = itinerary.ports[0];
//   this.previousPort = null;
//   this.currentPort.addShip(this);
// }

// Ship.prototype.setSail = function setSail() {
//   this.previousPort = this.currentPort;
//   this.currentPort = '';
//   this.previousPort.removeShip(this);
// };

// Ship.prototype.dock = function dock() {
//   const itinerary = this.itinerary;
//   const portIndex = itinerary.ports.indexOf(this.previousPort);
//   this.currentPort = itinerary.ports[portIndex + 1];
//   this.currentPort.addShip(this);
// };


class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = '';
    this.previousPort.removeShip(this);
  }

  dock() {
    const itinerary = this.itinerary;
    const portIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[portIndex + 1];
    this.currentPort.addShip(this);
  }
}

module.exports = Ship;