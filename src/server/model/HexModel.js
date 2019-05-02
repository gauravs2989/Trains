const fs = require("fs");
const Hex = require("@server/game/Hex");

class HexModel {
    constructor() {
        this._config = JSON.parse(fs.readFileSync("./server/data/hexes.json"));
        this._hexes = {};
        this._addHexes();
    }

    getHexes() {
        return this._hexes;
    }

    getHex(hexId) {
        return this._hexes[hexId];
    }

    _addHexes() {
        var hexes = this._config.hexes;
        hexes.forEach((hex) => {
            this._hexes[hex.id] = new Hex(hex.id, hex.city, hex.neighbors);
        }, this);
    }
}

module.exports = HexModel;