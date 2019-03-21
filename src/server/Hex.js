class Hex {
    constructor(id, city, neighbors) {
        this._id = id;
        this._city = city;
        this._neighbors = neighbors;
    
        // A hex does not have a tile. 
        this._tile = null;
    }

    placeTile(tile) {
        this._tile = tile;
    }
}

module.exports = Hex;