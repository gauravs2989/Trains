const fs = require("fs");
const CityTile = require("@server/tiles/CityTile");
const Sides = require("@server/utils/SideEnum");

// Todo: Create a tile manifest json
const manifestData = fs.readFileSync("server/data/hexes.json");
var manifest = {
    "erie": new CityTile("yellow", 10, [Sides.NorthEast, Sides.SouthWest, Sides.West], 2, ["erie"]),
    "buffalo": new CityTile("red", 30, [Sides.SouthWest, Sides.West], 0, ["buffalo"]),
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