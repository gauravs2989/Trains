const Sides = require("./SideEnum");
const eventManager = require("./EventManager");

class Hex {
    constructor(id, city, neighbors) {
        this._id = id;
        this._city = city;
        this._neighbors = neighbors;
    
        // A hex does not have a tile. 
        this._tile = null;

        // Connected neighboring hexes
        this._connections = [];
    }

    placeTile(tile) {
        console.log("Placing tile on: " + this._id);
        this._tile = tile;

        var hasListener = eventManager.emit("tilePlaced", this._tile);
        console.log(hasListener);
    }

    getConnectedSides() {
        return this._tile.getConnectedSides();
    }

    getNeighborOnSide(side) {
        return this._neighbors[side];
    }

    // Check if there is a tile which has a connection to the given side
    hasConnectingSide(side) {
        // If the hex does not have a tile on it, return false
        if (!this._tile) {
            console.log("There is no tile on the hex: " + this._id);
            return false;
        }

        // return if the tile has a connecting side to complete the connection
        var connectingSide = Sides.getSideToCompleteConnection(side);
        console.log(connectingSide);
        console.log(this._tile);
        return this._tile.hasConnectionToSide(connectingSide);
    }
}

module.exports = Hex;