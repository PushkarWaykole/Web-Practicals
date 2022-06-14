var http=require("http");
const { off } = require("process");

var server=http.createServer(function(req,res){
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<html><h1>Home page</h1></html>");
        res.end();
    }
    else if(req.url==='/about'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<html><h1>About page</h1></html>");
        res.end();
    }
    else{
        console.log("Error");
    }

})

server.listen(8000,function(err){
    if(err){
        throw err;
    }
    console.log("Server Started at port 8000")
})