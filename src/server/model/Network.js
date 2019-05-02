const eventManager = require("@server/events/EventManager");

class Network {
    /**@lends Network# */

    /**
     * Constructs a Network of cities and connections
     * @constructs Network
     */
    constructor () {
        this._cities = [];
        this._connections = [];

        // When a city is added, add it to the network
        eventManager.on("cityAdded", (city) => {
            this._addCityToNetwork(city);
        });
    }

    connectTracksToCity(city, edges) {
        
    }

    /**
     * Add the given city to the network.
     * @param city {City} the city to add to the network
     * 
     * @private
     */
    _addCityToNetwork(city) {
        // if the city has not been added yet, add the city to the network
        if (!this._hasCity(city)) {
            this._cities.push(city);
        }
    }

    /**
     * Returns true if the given <code>City</code> already exists in the network
     * @param city {City} the city to check for.
     * 
     * @private
     */
    _hasCity(city) {
        return this._cities.indexOf(city) !== -1;
    }
}

module.exports = Network;