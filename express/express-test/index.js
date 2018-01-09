const express=require("express");
var app=express();
app.get("/",(req,res)=>{
    res.send("hello express")
}).listen(8888)