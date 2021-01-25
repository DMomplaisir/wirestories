const express = require("express");
const { isEmpty } = require("./util");
const { getAllArticles } = require("./apiService");
const app = express()
var port = 8080

app.use(express.json());

app.listen(port, function() {
    console.log('Coolest job app ever!')
})

app.get("/articles", (req, res) => {
    if (('id' in req.body) || ('canonical_url' in req.body)) {
                // else - we check for the .id, or canonical_link to see if in system.

    } else {
        res.json(getAllArticles());
    }


   // Returns all articles in a list
   // if no request.body, we return all articles, 
})

app.post("/articles", (req, res) => {

    // Accept an request.body, confirm if valid, and create article in database
    console.log(request.body);
})
