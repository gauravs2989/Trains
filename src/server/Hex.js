function Hex(id, city, neighbors) {
    this._id = id;
    this._city = city;
    this._neighbors = neighbors;

    // A hex does not have a tile. 
    this._tile = null;
}

Hex.prototype.addTile = function (tile) {
    
}

module.exports = Hex;