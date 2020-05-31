function Ship (startingPort) {
  this.startingPort = startingPort
}

Ship.prototype = {
  setSail: function setSail () {
    this.startingPort = ''
  },
  dock: function dock (currentPort) {
    this.currentPort = currentPort
  }
}

module.exports = Ship
