const express = require("express")
const app = express


app.get("/articles", (req, res) => {
   // Returns all articles in a list
   // if no request.body, we return all articles, 
   // else - we check for the .id, or canonical_link to see if in system.
})

app.post("/articles", (req, res) => {
    // Accept an request.body, confirm if valid, and create article in database
    console.log(request.body);
})
