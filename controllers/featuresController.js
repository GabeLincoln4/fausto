// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/FeaturesDB", { useNewUrlParser : true, useUnifiedTopology : true });

// const featureSchema = new mongoose.Schema({
//     photo: {
//         type: String
//         required: true
//     },

// })


exports.featuresController = function(req, res){
    res.json({
        // featureList: ["user 1", "user 2"]
        featureList: [
            {
                id: 1,
                title: "Fresh Smoothies in the hot sun!",
                photo: "https://images.unsplash.com/photo-1622597468620-656aa1f981ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNtb290aGllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            },
            {
                id: 2,
                title: "Sweet Treats after a long day!",
                photo: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2llfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            }
        ]
    })
}