(function exportController () {
  class Controller {
    constructor (ship) {
      this.ship = ship
      this.initialiseSea()

      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.setSail();
      });

      document.querySelector("#portButton").addEventListener("click", (e) => {
        e.preventDefault();
        this.addPort();
        this.renderPorts(ship.itinerary.ports);
        this.renderShip();
        this.displayMessage();
        document.getElementById("input").value = "";
      });
    }

    initialiseSea() {
      const backgrounds = ["./images/water0.png", "./images/water1.png"];

      let backgroundIndex = 0;

      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url(${
          backgrounds[backgroundIndex % backgrounds.length]
        })`;
        backgroundIndex += 1;
      }, 1000);
    }

    renderPorts (ports) {
      const portsElement = document.querySelector("#ports");
      console.log(portsElement.childNodes);

      portsElement.style.width = "0px";

      ports.forEach((port, index) => {
        if (!document.querySelector(`[data-port-name=${port.portName}]`)) {
          const newPortElement = document.createElement("div");

          console.log(
            document.querySelector(`[data-port-name=${port.portName}]`)
          );

          newPortElement.className = "port";
          newPortElement.dataset.portName = port.portName;
          newPortElement.dataset.portIndex = index;

          portsElement.appendChild(newPortElement);

          const portsElementWidth = parseInt(portsElement.style.width, 10);
          portsElement.style.width = `${portsElementWidth + 256}px`;
        }
      });
    }

    renderShip() {
      const ship = this.ship;
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      // finds the index of the ship's currentPort inside of its itinerary.ports
      const portElement = document.querySelector(
        `[data-port-index = '${shipPortIndex}']`
      );
      // attribute selector to find a .port element that has a portIndex data attribute which corresponds to this index

      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;

      // set the top and left CSS properties of your ship element to the offsetTop and offsetLeft values for the port element.
    }

    setSail() {
      const ship = this.ship;

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index = '${nextPortIndex}']`
      );

      if (!ship.currentPort) {
        return this.renderMessage("Add a port name to procceed!");
      }

      if (!nextPortElement) {
        return this.renderMessage(
          `${ship.currentPort.portName} is your final destination!`
        );
      }

      this.renderMessage(`Departing from ${ship.currentPort.portName}`);
      ship.setSail();

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === nextPortElement.offsetLeft - 32) {
          ship.dock();
          this.displayMessage();
          this.renderMessage(`Arriving at ${ship.currentPort.portName}`);
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    }

    renderMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.innerHTML = message;

      const viewport = document.querySelector("#viewport");
      viewport.appendChild(messageElement);

      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    }

    displayMessage() {
      this.ship = ship;

      const currentPortElement = document.getElementById("current-port");
      const nextPortElement = document.getElementById("next-port");

      if (ship.currentPort) {
        currentPortElement.innerText = `Current Port: ${ship.currentPort.portName}`;
      }

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;

      if (nextPortIndex === ship.itinerary.ports.length) {
        nextPortElement.innerText = "End of The Trip";
      } else {
        nextPortElement.innerText = `Next Port: ${ship.itinerary.ports[nextPortIndex].portName}`;
      }
    }

    addPort() {
      const ship = this.ship;

      const newPort = document.getElementById("input").value;

      const portObject = new Port(newPort);

      if (newPort === "") {
        return this.renderMessage("Add a port name to procceed!");
      }
      ship.itinerary.ports.push(portObject);
      console.log(ship.itinerary.ports);

      if (!ship.currentPort) {
        ship.currentPort = ship.itinerary.ports[0];
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();