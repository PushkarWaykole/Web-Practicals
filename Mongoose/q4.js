const mongoose=require('mongoose')
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const parser=bodyParser.urlencoded({extended:true})

try{
    mongoose.connect("mongodb://0.0.0.0:27017/employee",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("Connected succesfully")
}

catch(err){
    console.log(err)
}

const emp=new mongoose.Schema({
    name:String,
    age:Number
})

const Employee=new mongoose.model('Employee',emp);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.get('/data',function(req,res){
    
    Employee.find({},function(err,collection){
        res.send(collection)
    })
})

app.post('/emp-data',parser,function(req,res){
    const data={
        name:req.body.name,
        age:req.body.age
    }

    Employee.insertMany(data,function(err,value){
        if(err) throw err
        else{
            console.log("Added successfully")
        }
    })

    res.redirect('/data')
})


app.listen(8000)