const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

const app = express();


app.set("view engine", "hbs");
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");


app.get("/", (req, res)=>{
    res.send("default path")
})

app.get("/test", (req, res)=>{
    res.render("test-file")
})

app.listen(3000, (req, res)=>{
    console.log("server has started on port 3000")
})