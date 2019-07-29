const fs = require("fs");
const MapHex = require("@server/game/MapHex");
class MapManager {
    constructor() {
        
        this._hexes = new Map();

        var _PATH_TO_JSON = "server/data/map.json";
        var configuration = JSON.parse(fs.readFileSync(_PATH_TO_JSON));
        this._configureFromJSON(configuration);    
    }

    _configureFromJSON(configuration) { 
        this._name = configuration.game;
        this._tileOrientation = configuration.tileOrientation;
        this._letterOrientation = configuration.letterOrientation;

        var hexConfigurations = configuration.hexes;
        hexConfigurations.forEach((hexConfiguration) => {
            var mapHex = new MapHex(this, hexConfiguration);
            this._hexes.set(mapHex.getName(), mapHex);
        }, this);

        console.log(this._hexes)
    }
}

module.exports =  MapManager;