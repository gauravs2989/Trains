
 /** 
  * A Tile defines a track tile of a specific color that is placed on a hex on the board.
  */
class Tile {
    constructor(color, connectedEdges) {
        this._color = color;
        this._connectedEdges = connectedEdges;
        this._tracks = [];
    }

    getConnectedSides() {
        return this._connectedEdges;
    }

    getTracks() {
        return this._tracks;
    }

    // Get the tracks on this tile which connect to the given edge of the tile
    getTracksConnectingToEdge(edge) {
        var tracks = this.getTracks().filter((track)=> {
            return track.hasEdge(edge);
        });

        return tracks;
    } 
}

module.exports = Tile;