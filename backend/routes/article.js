const express = require("express");
const router = express.Router();


const Article = require("../models/article");

router.get(
    '',
    (req, res)=>{
        query_fields = req.query.fields
        console.log(query_fields)
        Article.find({}).then(function (articles) {
                res.send(articles);
            });
    }
)

module.exports = router;
