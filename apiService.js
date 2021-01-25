
const Article = require("./models/Article.model")

async function getAllArticles(){
    const articles = await Article.find();
    return articles;
}
function isSameArticle(articleOne, articleTwo){
    return (articleOne.id === articleTwo.id && articleOne.canonical_url === articleTwo.canonical_url)
}
async function createArticle(articleObject) {
    const articleExists = await Article.findOne({ $or: [
        {id: articleObject.id},
        {canonical_url: articleObject.canonical_url}
    ]}).exec(); 
    if (articleExists) {
        if (isSameArticle(articleExists, articleObject)){
            foundArticle = Object.assign(articleExists, articleObject);
            await foundArticle.save()
            return foundArticle;
        }
        throw new Error("Article exists already")
    }
    
    const article = new Article(articleObject);
    article.save((err) => {if (err) throw new Error("Problem publishing")})
    return article;

}

// async function getArticle(searchBody){
//     if (id in searchBody){

//     } else {

//     }
// }

exports.getAllArticles = getAllArticles;
exports.createArticle = createArticle;