
const Article = require("./models/Article.model")

async function getAllArticles(){
    const articles = await Article.find();
    return articles;
}

// async function getArticle(searchBody){
//     if (id in searchBody){

//     } else {

//     }
// }

exports.getAllArticles = getAllArticles;