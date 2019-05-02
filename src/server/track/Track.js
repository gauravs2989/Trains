class Track {
    constructor(edge1, edge2) {
        this._edge1 = edge1;
        this._edge2 = edge2;

        this._terminal1 = null;
        this._terminal2 = null;
    }

    setTerminal(city) {
        if (!this._terminal1) {
            this._terminal1 = city;
            return;
        }

        if (!this._terminal2) {
            this._terminal2 = city;
            return;
        }
    }

    hasEdge(edge) {
        return this._edge1 === edge || this._edge2 === edge;
    }
}

module.exports = Track;