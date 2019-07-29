/**
 * Represents a Hex on the Map from the model side
 * 
 * The term rotation is used to indicate the amount of rotation in 60 degree 
 * units from the standard orientation of the tile (sometimes the term
 * orientation is also used to refer to rotation).
 * Rotation is always relative to the standard orientation, which has the 
 * printed tile number of the SW edge of the EW-oriented tile.
 */
class MapHex {
    constructor(mapManager, configuration) {
        this._mapManager = mapManager;
        this._configureFromJSON(configuration);
    }

    getName() {
        return this._name;
    }

    _configureFromJSON(configuration) {
        this._name = configuration.name;
        if (!this._name) {
            throw new Error("Hex name does not exist");
        }

        this._tileId = configuration.tile;
        if (!this._tileId) {
            throw new Error("Tile does not exist on hex");
        }
        
        // Optional configuration parameters
        if (configuration.city) {
            this._city = configuration.city;
        }

        if (configuration.cost) {
            this._tileCost = configuration.cost;
        }

        if (configuration.value) {
            this._valuesPerPhase = configuration.value;
        }
    }
}

module.exports = MapHex;