const fs = require("fs");
const Hex = require("./Hex");
var config = JSON.parse(fs.readFileSync("server/data.json"));

function Map() {
    console.log("Creating a map");
    
    this._hexes = {};
    this._addHexes();
}

Map.prototype.getData = function () {
    return config;
}

Map.prototype.getHexes = function () {
    return this._hexes;
}

Map.prototype._addHexes = function () {
    var hexes = config.hexes;
    hexes.forEach((hex) => {
        this._hexes[hex.id] = new Hex(hex.id, hex.city, hex.neighbors);
    }, this);
}



module.exports = Map;