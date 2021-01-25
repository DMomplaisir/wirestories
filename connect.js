const mongoose = require("mongoose");
const Article = require("./models/Article.model")

const connection = "mongodb://localhost:27017/theatlantic"

const connect = () => {
    return mongoose.connect(connection);
}

module.exports = connect;