const express = require("express");
const { isEmpty } = require("./util");
const { getAllArticles, createArticle } = require("./apiService");
const connect = require("./connect");
const app = express();


var port = 8080

app.use(express.json());

app.listen(port, async function() {
    console.log('Coolest job app ever!')
    await connect();
})

app.get("/articles", async (req, res) => {
    await getAllArticles();

    if (('id' in req.body) || ('canonical_url' in req.body)) {
        // else - we check for the .id, or canonical_link to see if in system.

    } else {
        // Return all if there isn't a request body
        res.json(getAllArticles());
    }


   // Returns all articles in a list
})

app.post("/articles", async (req, res) => {
    const article = req.body.article; 
    await createArticle();
    // Accept an request.body, confirm if valid, and create article in database
    console.log(request.body);
})
