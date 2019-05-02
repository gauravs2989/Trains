const Sides = {
    NorthEast: "northeast",
    East: "east",
    SouthEast: "southeast",
    SouthWest: "southwest",
    West: "west",
    NorthWest: "northwest",

    getSideToCompleteConnection(side) {
        switch(side) {
            case this.NorthEast:
                return this.SouthWest;
            case this.East:
                return this.West;
            case this.SouthEast:
                return this.NorthWest; 
            case this.SouthWest:
                return this.NorthEast;
            case this.West:
                return this.East;
            case this.NorthWest:
                return this.SouthEast;

        }
    }    
};

module.exports = Sides;