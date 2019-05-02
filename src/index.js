require("module-alias/register");

const express = require("express");
const path = require("path");
const app = express();

const Map = require("@server/game/Map");
const HexModel = require("@server/model/HexModel");
const Network = require("@server/model/Network");
const NetworkManager = require("@server/model/NetworkManager"); 

app.use(express.static(path.join(__dirname, '../dist/train-game/')));

// Catch all routes and return it to the index page
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../dist/train-game/index.html'));
});

app.get('/server', (req, res)=> {
    console.log("Requesting data");
    var network = new Network();
    var hexModel = new HexModel();
    var networkManager = new NetworkManager(network, hexModel);
    var map = new Map(hexModel);
    res.send(map.getHexes());
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
    console.log("Running server on port: " + port);
});