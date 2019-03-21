
 /** 
  * A TrackTile defines a track tile that is placed on a hex on the board.
  * If a track tile has a city on it, that tile will indicate the base revenue 
  * provided by the city.
  * The track tile also has a color (one of yellow, gren, brown, gray).
  */
class TrackTile {
    constructor(color) {
        this._color = color;
    }
}

module.exports = TrackTile;