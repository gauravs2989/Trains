const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('uncaughtException', (err)=> {
    console.log(err);
});

module.exports = eventEmitter;