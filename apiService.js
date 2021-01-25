
const Article = require("./models/Article.model")

async function getAllArticles(){
    const articles = await Article.find();
    return articles;
}
function isSameArticle(articleOne, articleTwo){
    return (articleOne.id === articleTwo.id && articleOne.canonical_url === articleTwo.canonical_url)
}
async function createArticle(articleObject) {
    let error;
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
        // Return found article
        error = new Error(`Our system already has an article ${articleExists.id}, ${articleExists.canonical_url}`)
        error.statusCode = 409;
        throw error;
    }
    
    const article = new Article(articleObject);
    article.save((err) => {if (err) throw new Error("Problem publishing")})
    return article;

}


async function getArticleById(id){
   return await article.findOne({$id: id}).exec();
}
async function getArticleByCanonicalURL(canoncial_url){
    return await article.findOne({$canoncial_Url: canoncial_url}).exec();
}

exports.getArticleByCanonicalURL = getArticleByCanonicalURL
exports.getArticleById = getArticleById
exports.getAllArticles = getAllArticles;
exports.createArticle = createArticle;