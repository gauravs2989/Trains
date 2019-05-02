const Tile = require("@server/tiles/Tile");
const Track = require("@server/track/Track");

/**
 * @lends CityTile
 * A City Tile is a tile with a city on it. It can be tokened.
 * It has a revenue and a list of edges that are connected to the city.
 */
class CityTile extends Tile {

    constructor(color, revenue, connectedEdges, tokenCapacity) {
        super(color, connectedEdges);
        this._revenue = revenue;
        this._tokenCapacity = tokenCapacity;

        this._addTracks();
    }

    _addTracks() {
        this.getConnectedSides().forEach( (side) => {
            this._tracks.push(new Track(null, side));
        });
    }

    hasConnectionToSide(side) {
        return this._connectedEdges.includes(side);
    }
}

module.exports = CityTile;