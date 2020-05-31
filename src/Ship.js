function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }
  
  Ship.prototype.setSail = function () {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
  
    if (currentPortIndex === (itinerary.ports.length - 1)) {
      throw new Error('End of itinerary reached');
    }
  
    this.previousPort = this.currentPort;
    this.currentPort.removeShip(this);
  };
  
  Ship.prototype.dock = function () {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
  
    this.currentPort = itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  };
  
  module.exports = Ship;