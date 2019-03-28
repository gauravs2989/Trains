const fs = require("fs");
const Hex = require("./Hex");
const TileManifest = require("./TileManifest");
const eventManager = require("./EventManager");
var config = JSON.parse(fs.readFileSync("./server/data/hexes.json"));

class Map {
    constructor() {
        console.log("Creating a map");
    
        this._hexes = {};
        this._addHexes();

        eventManager.on("tilePlaced", (hex) => {
            this._checkConnections(hex);
        });

        this._placeInitialTiles();
    }

    getData() {
        return config;
    }
    
    getHexes() {
        return this._hexes;
    }
    
    _addHexes() {
        var hexes = config.hexes;
        hexes.forEach((hex) => {
            this._hexes[hex.id] = new Hex(hex.id, hex.city, hex.neighbors);
        }, this);
    }
    
    _placeInitialTiles() {
        // Place the initial tile on Erie (D20)
        var erie = this._getHex("D20");
        erie.placeTile(TileManifest.getDefaultErieTile());
        
        // Place the initial tile for Buffalo (D22)
        var buffalo = this._getHex("D22");
        buffalo.placeTile(TileManifest.getDefaultBuffaloTile());
    }

    _checkConnections(hex) {
        var connectedSidesOnTile = hex.getConnectedSides();
        for (var i = 0; i < connectedSidesOnTile.length; i++) {
            // get the neighboring hex
            var side = connectedSidesOnTile[i];
            var neighbor = this._hexes[hex.getNeighborOnSide(side)];

            // if the neighbor has a connecting side to this edge, then there is a connection
            if (neighbor.hasTileWithConnectionTo(side)) {
                console.log(hex._id + " connects to " + neighbor._id);
            }
        }
    }
    
    _getHex(hexId) {
        return this._hexes[hexId];
    }
}

module.exports = Map;