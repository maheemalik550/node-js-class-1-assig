
const fs = require("fs");

//create
fs.writeFileSync("text.txt","hello world");

//read
const res = fs.readFileSync("text.txt","utf-8")
console.log(res)

//update
const result = res.replace("hello world","updated content");
fs.writeFileSync("text.txt",result);

const updated_value = fs.readFileSync("text.txt","utf-8");
console.log(updated_value)

//Delet
fs.unlinkSync("text.txt");
