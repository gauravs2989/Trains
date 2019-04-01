const eventManager = require("./EventManager");
class NetworkManager {
    constructor(hexModel) {

        this._hexModel = hexModel;

        eventManager.on("tilePlaced", (hex) => {
            this._checkConnections(hex);
        });
    }

    _checkConnections(hex) {
        var connectedSidesOnTile = hex.getConnectedSides();
        for (var i = 0; i < connectedSidesOnTile.length; i++) {
            // get the neighboring hex on that connected side
            var side = connectedSidesOnTile[i];
            var neighbor = this._hexModel.getHex(hex.getNeighborOnSide(side));

            // if the neighbor has a connecting side to this edge, then there is a connection
            if (neighbor.hasTileWithConnectionTo(side)) {
                console.log(hex._id + " connects to " + neighbor._id);
            }
        }
    }
}

module.exports = NetworkManager;