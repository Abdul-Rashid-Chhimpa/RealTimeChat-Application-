const mongoose = require("mongoose");
const roomData = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    }
});

const roomJoinData = mongoose.model("RoomData", roomData);
module.exports = roomJoinData;