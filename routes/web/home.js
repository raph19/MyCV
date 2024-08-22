var express =require("express");
var router = express.Router();              //the router of my app is stored on variable router



router.get("/", function(req,res){
    res.render("views/");
  });


module.exports = router;    // Now app js will know that home js uses this router