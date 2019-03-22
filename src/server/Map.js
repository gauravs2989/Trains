const fs = require("fs");
const Hex = require("./Hex");
const CityTile = require("./CityTile");
const Sides = require("./SideEnum");
const TileManifest = require("./TileManifest");
var config = JSON.parse(fs.readFileSync("server/data.json"));

class Map {
    constructor() {
        console.log("Creating a map");
    
        this._hexes = {};
        this._addHexes();

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
    
    _getHex(hexId) {
        return this._hexes[hexId];
    }
}

module.exports = Map;