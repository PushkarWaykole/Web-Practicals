var fs=require('fs')

//read from existing data
const file=fs.readFileSync('test2.txt');

//display on console
console.log(file.toString())

//delete in the file

fs.unlink('test2.txt',function(err){
    if(err) throw err;
    console.log("File deleted")
})

