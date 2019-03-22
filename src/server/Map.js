const fs = require("fs");
const Hex = require("./Hex");
const CityTile = require("./CityTile");
const Sides = require("./SideEnum");

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
    
        // Since this is a city hex, we have to place a city tile
        erie.placeTile(new CityTile("yellow", 10, [Sides.NorthEast, Sides.SouthWest, Sides.West], 2));

        // Place the initial tile for Buffalo (D22)
        var buffalo = this._getHex("D22");
        console.log(buffalo);
        buffalo.placeTile(new CityTile("red", 30, [Sides.SouthWest, Sides.West], 0));
    }
    
    _getHex(hexId) {
        return this._hexes[hexId];
    }
}

module.exports = Map;