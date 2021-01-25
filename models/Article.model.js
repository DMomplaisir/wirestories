const mongoose = require("mongoose")
const articleSchema = new mongoose.Schema({
    slug: {type: String},
    title: {type: String},
    dek: {type: String},
    published_date: {type: Date, default: Date.now()},
    canonical_url: {type: String},
    word_count: {type: Number},
    tags: {type: String},
    embeds: [String],
    lead_art: [{
        id: Number,
        type: {type: String, enum:["image_large", "image_small"] }
    }],
    authors: [{
        id: Number,
        slug: String
    }]
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;