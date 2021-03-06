require("module-alias/register");

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, '../dist/train-game/')));

const MapManager = require("@server/game/MapManager");

// Catch all routes and return it to the index page
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../dist/train-game/index.html'));
});

app.get('/server', (req, res)=> {
    console.log("Requesting data");
    var mapManager = new MapManager();
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
    console.log("Running server on port: " + port);
});