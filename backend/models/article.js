const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
      type: String,
      required: false,
    },
    author:[
        {type: Schema.Types.ObjectId, ref: 'User'}
      ]
    },
    {
        timestamps: true
    });

    const Article = (module.exports = mongoose.model("Article", articleSchema));


    module.exports.addArticle = function (newArticle, callback) {
        newArticle.save(callback)
      };
      