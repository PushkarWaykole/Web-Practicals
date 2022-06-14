const mongoose=require('mongoose')

try{
    mongoose.connect("mongodb://0.0.0.0:27017/family",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("Connected succesfully")
}

catch(err){
    console.log(err)
}

const person=new mongoose.Schema({
    name:String,
    age:Number
})

const Person=new mongoose.model('Person',person);

const peter=new Person({name:"Peter",age:40})
console.log(peter)
peter.save()