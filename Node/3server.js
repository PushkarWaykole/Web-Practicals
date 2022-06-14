var fs=require('fs')

//read from existing data
const file=fs.readFileSync('test.txt');

//display on console
console.log(file.toString())

//write in the file

fs.writeFileSync('test.txt',"New content")

