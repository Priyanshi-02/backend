const express = require ("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const { Console } = require("console");

const app = express(); 
const PORT = 3000;

//localhost:8080
//C:\
//domain
//www.google.com/
// https://www.jiocinema
//C:\Users\hp\OneDrive\Desktop\MERN Internship\MongoDB

// 

app.get("/", (req, res)=> {

    res.send("Hello World");
    console.log("Chai pe Charcha");
});
app.get("/users",(req, res)=>{
    res.send(data);
})
app.get("/users/greaterthan20",(req, res)=>{
    const greaterThan20=data.filter((user)=>
    user.age>20);
    res.send(greaterThan20);
    console.log("Chai Pe Charcha");
});
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
const data = [
    { id: 1, name: "John", age: 25},
    { id: 2, name: "Jane", age: 30},
    { id: 3, name: "Bob", age: 35},
    {id: 4, name: "Arjun", age: 18},
    { id: 5, name: "Riya", age: 18},
    { id: 6, name:"Ram", age: 21},
];
