const CityTile = require("./CityTile");
const Sides = require("./SideEnum");

/**
 * The tile manifest maintains a list of all the tiles in the game and provides information about
 * which upgrades are eligible for a given tile
 */
class TileManifest {
    static getDefaultErieTile() {
        return new CityTile("yellow", 10, [Sides.NorthEast, Sides.SouthWest, Sides.West], 2);
    }

    static getDefaultBuffaloTile() {
        return new CityTile("red", 30, [Sides.SouthWest, Sides.West], 0);
    }
}

module.exports = TileManifest;