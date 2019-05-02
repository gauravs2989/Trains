const eventManager = require("@server/events/EventManager");
const Sides = require("@server/utils/Sides")

class NetworkManager {
    constructor(network, hexModel) {

        this._hexModel = hexModel;
        this._network = network;

        this._tracks = [];
        
        // When a tile is placed on a hex, update the model using the hex on which 
        // the tile was placed
        eventManager.on("tilePlaced", (hex) => {
            this._updateModel(hex);
        });
    }

    _updateModel(hex) {
        var tile = hex.getTile();
        var connectedSides = tile.getConnectedSides();

        connectedSides.forEach((side)=> {
            var tracksConnectingToSide = tile.getTracksConnectingToEdge(side);
            tracksConnectingToSide.forEach((track) => {
                
                // if hex has a city, set the terminal of each track to be that city    
                if (hex.hasCity()) {
                    track.setTerminal(hex.getCity());
                } else {
                    // To do
                }

                // get the neighbor on the side
                var neighbor = this._hexModel.getHex(hex.getNeighborOnSide(side));

                // if neighbor has a tile with tracks that connect to this side, then update
                if (neighbor.hasTileWithConnectionTo(side)) {
                    // Get all tracks that connect to this side
                    var connectingTracks = neighbor.getTile().getTracksConnectingToEdge(
                        Sides.getSideToCompleteConnection(side)
                    );
                    console.log(connectingTracks);

                    connectingTracks.forEach((connectingTrack) => {
                        var unconnectedTerminal = connectingTrack.getUnconnectedTerminal();
                    });
                }
            });
            // console.log(tracksConnectingToSide);
        });

        

        // if the hex has a city, then ensure that one of the ends of the track is the city
        

        // this._checkConnections(hex);
    }

    _checkConnections(hex) {
        var connectedSidesOnTile = hex.getConnectedSides();
        for (var i = 0; i < connectedSidesOnTile.length; i++) {
            // get the neighboring hex on that connected side
            var side = connectedSidesOnTile[i];
            var neighbor = this._hexModel.getHex(hex.getNeighborOnSide(side));

            // if the neighbor has a connecting side to this side, then there is a connection
            if (neighbor.hasTileWithConnectionTo(side)) {
                console.log(hex._id + " connects to " + neighbor._id);
            }
        }
    }
}

module.exports = NetworkManager;