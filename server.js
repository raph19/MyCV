var express = require ("express");
var path = require ("path");

var server = express();

var routes=require("./routes/web");

server.set("port", process.env.PORT || 3000);

server.use(express.static(path.join(__dirname, 'client/build')));

server.set("views", path.join(__dirname,"views"));
server.use("/", require("./routes/web"));

server.listen(server.get("port"), function(){
    console.log("Server is up on port " + server.get("port"));
});