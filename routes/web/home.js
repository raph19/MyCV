var express =require("express");
var router = express.Router();              //the router of my app is stored on variable router



router.get("https://raph19.github.io/MyCV/", function(req,res){
    res.render("client/build/index.html");
  });


module.exports = router;    // Now app js will know that home js uses this router
