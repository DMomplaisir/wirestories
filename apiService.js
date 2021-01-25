
const connect = require("./apiService");
const Article = require("./models/Article.model")

async function getAllArticles(){
    const articles = await Article.find()
}

async function getArticle(searchBody){
    if (id in searchBody){

    } else {

    }
}