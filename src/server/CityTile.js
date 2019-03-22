const Tile = require("./Tile");

/**
 * @lends CityTile
 * A City Tile is a tile with a city on it. It can be tokened.
 * It has a revenue and a list of edges that are connected to the city.
 */
class CityTile extends Tile {
    constructor(color, revenue, connectedEdges, tokenCapacity) {
        super(color);
        this._revenue = revenue;
        this._connectedEdges = connectedEdges;
        this._tokenCapacity = tokenCapacity;
    }
}

module.exports = CityTile;