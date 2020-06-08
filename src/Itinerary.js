// function Itinerary(ports) {
//   this.ports = ports;
// }

(function exportItinerary() {
  class Itinerary {
    constructor(ports) {
      this.ports = ports;
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
})();