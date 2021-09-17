const mongoose = require('mongoose');

const panelsSchema = {
    photoUrl: String,
    title: String
}

const Panel = mongoose.model("Panel", panelsSchema);

module.exports = Panel;