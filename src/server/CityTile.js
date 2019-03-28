const Tile = require("./Tile");
const Track = require("./Track");

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

        this._tracks = [];
        for (var i = 0; i < this._connectedEdges.length; i++) {
            this._tracks.push(new Track("junction", this._connectedEdges[i]));
        }
    }

    getConnectedSides() {
        return this._connectedEdges;
    }

    hasConnectionToSide(side) {
        return this._connectedEdges.includes(side);
    }
}

module.exports = CityTile;