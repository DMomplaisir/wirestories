const express = require("express");
const { isEmpty } = require("./util");
const { getAllArticles, createArticle, getArticleByCanonicalURL } = require("./apiService");
const connect = require("./connect");
const app = express();


var port = 8080
app.use(express.json());

app.listen(port, async function() {
    console.log('Coolest job app ever!')
    await connect();
})

app.get("/articles", async (req, res) => {
    try{
        if ('id' in req.body){
            res.json(await getArticleById(req.body.id))
        }
        if ('canonical_url' in req.body){
            res.json(await getArticleByCanonicalURL(canonical_url));
        }
        else {
            // Return all if there isn't a request body
            res.json(getAllArticles());
        }
    } catch(err) {
        next(err);
    }


   // Returns all articles in a list
})

app.post("/articles", async (req, res) => {
    const article = req.body.article; 
    console.log(article);
    try {
        res.json(await createArticle(article));
     } catch (err) {
        next(err);
    }
    res.json(await createArticle(article));
    // Accept an request.body, confirm if valid, and create article in database
})
