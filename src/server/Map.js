const TileManifest = require("./TileManifest");

class Map {
    constructor(hexModel) {
        console.log("Creating a map");
        this._hexModel = hexModel;
        this._placeInitialTiles();
    }
    
    getHexes() {
        return this._hexModel.getHexes();
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
        return this._hexModel.getHex(hexId);
    }
}

module.exports = Map;