const express = require("express");
const router = express.Router();
const passport = require("passport");


const Article = require("../models/article");

router.route("/").get(
    function (req, res) {
        res.status(404).json({
            'success': "FUCK YOU"
    })}
)
module.exports = router;
