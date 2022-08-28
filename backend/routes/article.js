const express = require("express");
const router = express.Router();
const passport = require("passport");
bodyParser = require('body-parser').json();


const Article = require("../models/article");

router.get(
    "/",
    function (req, res) {
        Article.find({}).then(data=>{
            res.send(200, {data:data})
        })
    }
)

router.get(
    ":/q",
    bodyParser,
    function(req,res){
        query = req.query
        Article.find(query).then(data=>{
            res.send(200, {data:data})
        })
    }
)

router.post(
    "/add",
    bodyParser,
    passport.authenticate("user", { session: false }),
    function(req,res){
        let article = {
            title: req.body.article,
            body: req.body.body,
            author: req.user
        }
        articleObject = new Article(article)
        articleObject.save().then(obj=>res.send(201,{data:obj}))
    }
)
module.exports = router;
