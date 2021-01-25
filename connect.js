const mongoose = require("mongoose");
const Article = require("./models/Article.model")

const connection = "mongodb://mongo:27017/theatlantic"

const connect = async () => {
    return await mongoose.connect(connection);
}

module.exports = connect;