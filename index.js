const express = require("express")
const app = express()
var port = 8080

app.listen(port, function() {
    console.log('Coolest job app ever!')
})

app.get("/articles", (req, res) => {
   // Returns all articles in a list
   // if no request.body, we return all articles, 
   // else - we check for the .id, or canonical_link to see if in system.
})

app.post("/articles", (req, res) => {
    // Accept an request.body, confirm if valid, and create article in database
    console.log(request.body);
})
