const Sides = require("@server/utils/Sides");
const eventManager = require("@server/events/EventManager");

class Hex {
    constructor(id, city, neighbors) {
        this._id = id;
        this._city = city;

        // If there is a city on this hex, notify that
        if (this._city) {
            eventManager.emit("cityAdded", this._city);
        }

        this._neighbors = neighbors;
    
        // A hex does not have a tile. 
        this._tile = null;

        // Connected neighboring hexes
        this._connections = [];
    }

    placeTile(tile) {
        this._tile = tile;
        // emit an event notifying that a tile was placed on this hex
        eventManager.emit("tilePlaced", this);
    }
    
    getTile() {
        return this._tile;
    }

    getNeighborOnSide(side) {
        return this._neighbors[side];
    }

    getCity() {
        return this._city;
    }

    hasCity() {
        return this._city !== null;
    }

    // Check if there is a tile which has a connection to the given side
    hasTileWithConnectionTo(side) {
        // If the hex does not have a tile on it, return false
        if (!this._tile) {
            return false;
        }

        // return if the tile has a connecting side to complete the connection
        var connectingSide = Sides.getSideToCompleteConnection(side);
        return this._tile.hasConnectionToSide(connectingSide);
    }
}

module.exports = Hex;