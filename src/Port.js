function Port (name) {
  this.name = name
  this.ships = []
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship)
}

Port.prototype.removeShip = function (ship) {
  this.ships = this.ships.filter(item => item !== ship)
}

module.exports = Port

module.exports = Port
