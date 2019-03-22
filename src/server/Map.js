const fs = require("fs");
const Hex = require("./Hex");
const CityTile = require("./CityTile");

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
        console.log(erie);
    
        // Since this is a city hex, we have to create a city tile
        var cityTile = new CityTile("yellow", 10);
        erie.placeTile(cityTile);
    }
    
    _getHex(hexId) {
        return this._hexes[hexId];
    }
}

module.exports = Map;