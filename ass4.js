const express=require('express');
const app=express();
const port=5000;
app.get('/getRequest',(req,res)=>{
  
    res.send("it is a get method");
});
app.post('/postRequest',(req,res)=>
{
    
    res.send("it is a post method");
})
app.listen(port,()=>{
   
    console.log("listining to port 5000");
});
