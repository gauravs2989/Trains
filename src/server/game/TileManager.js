const fs = require("fs");
const Tile = require("@server/game/Tile");

class TileManager {
    constructor() {

        this._tiles = new Map();

        var _PATH_TO_JSON = "server/data/tiles.json";
        var configuration = JSON.parse(fs.readFileSync(_PATH_TO_JSON));
        this._configureFromJSON(configuration);
    }

    _configureFromJSON(configuration) {
        var tileConfigurations = configuration.tiles;
        if (!tileConfigurations || !tileConfigurations.length) {
            throw new Error("No tiles defined in configuration");
        }

        tileConfigurations.forEach((tileConfiguration) => {
            var tile = new Tile(tileConfiguration);
        });
    }
}