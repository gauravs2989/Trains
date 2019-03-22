const CityTile = require("./CityTile");
const Sides = require("./SideEnum");

// Todo: Create a tile manifest json
var manifest = {
    "erie": new CityTile("yellow", 10, [Sides.NorthEast, Sides.SouthWest, Sides.West], 2),
    "buffalo": new CityTile("red", 30, [Sides.SouthWest, Sides.West], 0),
    5: new CityTile("yellow", 20, [Sides.NorthEast, Sides.NorthWest], 1),
    6: new CityTile("yellow", [Sides.NorthEast, Sides.West], 1)
}

/**
 * The tile manifest maintains a list of all the tiles in the game and provides information about
 * which upgrades are eligible for a given tile
 */
class TileManifest {

    static getDefaultErieTile() {
        return manifest["erie"];
    }

    static getDefaultBuffaloTile() {
        return manifest["buffalo"];
    }
}

module.exports = TileManifest;