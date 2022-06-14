var express=require('express')
var app=express()

app.get('/',function(req,res){
    res.send("Information");
})

app.get('/books',function(req,res){
    res.send("Information about books");
})

app.listen(8000)