const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

// Create Express Server
const app = express();

// Setting HBS framework
app.set("view engine", "hbs");
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");


// Routes
app.get("/", (req, res)=>{
    res.send("default path")
})

app.get("/test", (req, res)=>{
    res.render("test-file")
})


// Server listening
app.listen(3000, (req, res)=>{
    console.log("server has started on port 3000")
})